# Effects System

Models D&D 3.5 bonuses: "this source applies this typed bonus to this stat". Every
number on the sheet is resolved from a list of **contributions**, which go through
3.5 stacking rules. The values stored on the character are contributions too, so a
spell or item stacks correctly against what's already on the sheet.

## Pieces

| File | Role |
|---|---|
| `src/store/stats/types.ts` | Stat keys, `EffectDef` (authoring), `ActiveSource` (character), `Contribution`/`ResolvedStat` (engine) |
| `src/store/stats/engine.ts` | `createStatEngine(contributions).resolve(key)` → `{ total, hasBase, lines }`; stacking; `resolveArmorClass` |
| `src/store/stats/contributions.ts` | `characterContributions` (stored sheet values → contributions), `sourceContributions` (active sources → contributions) |
| `src/store/recoilState.ts` | `statEngineSelector`; hooks `useStat`, `useArmorClass`, `useActiveSources`, `useActivateSource`, `useDeactivateSource` |
| `src/components/StatBreakdown.tsx` | Renders a stat's lines (applied / suppressed / conditional) |

## Data flow

```
ICharacter (stored values) ──► characterContributions ─┐
                                                        ├─► createStatEngine ─► resolve("save.will") ─► components
character.activeSources ──► lookup item/spell/ability ──┘
          (effects: EffectDef[] on the compendium entry)
```

## Stat keys

`ac`, `initiative`, `bab`, `attack.melee|ranged`, `damage.melee|ranged`, `casterLevel`,
`hp.max`, `hp.temp`, `sr`, `dr`, `ability.<ability>`, `save.<save>`, `skill.<skillId>`,
`speed.<mode>`, `resist.<energy>`, `uses.<abilityId>`.

Effects may target wildcards: `ability.*`, `save.*`, `skill.*`, `attack.*`, `damage.*`, `speed.*`.

## Rules implemented

- **op "add"**: typed bonus/penalty. Same bonus type → only the highest applies.
- **Always stack**: `dodge`, `circumstance`, `untyped` — except with the same source.
- **Penalties** (negative amounts) stack regardless of type, except with the same source.
- **Same source** = same compendium id (`spell:haste`), so casting a spell twice doesn't stack. Custom sources are keyed by instance.
- **Enhancement to AC** must say what it `enhances` (`armor`/`shield`/`naturalArmor`); barkskin and an amulet of natural armor don't stack.
- **op "base"**: candidate starting value, highest wins (land speed, SR, DR, temp HP, resist energy).
- **Touch AC** drops armor/shield/natural armor (and enhancements to them). **Flat-footed** drops dodge and positive Dex.
- **condition** (e.g. "vs. evil"): shown in the breakdown, never added to the total.
- **Scaling**: `{ scale: "casterLevel" | { classLevel }, base, per, every, startAt, max }`, rounded down. Caster level = `ActiveSource.casterLevel` override → item's `casterLevel` → character's highest.
- **Derived**: `{ from: "ability.dexterity", as: "modifier", max? }` — Dex to AC/initiative/Reflex, ability to skills.

## Authoring an effect

```ts
// src/server/spells — on the ISpell entry
effects: [
  { target: "ac", bonusType: "enhancement", enhances: "naturalArmor",
    value: { scale: "casterLevel", base: 2, per: 1, every: 3, startAt: 3, max: 5 } },
]

// resist energy — target picked on activation
effects: [
  { target: { prefix: "resist", choice: "energy" }, op: "base", bonusType: "untyped",
    value: { scale: "casterLevel", base: 10, per: 10, every: 4, startAt: 3, max: 30 } },
]
```

## Activating

```ts
const activate = useActivateSource();
activate({ ref: { kind: "spell", id: "haste" } });
activate({ ref: { kind: "spell", id: "resist-energy" }, choices: { energy: "fire" }, casterLevel: 9 });
activate({ custom: { label: "Charging", effects: [{ target: "ac", bonusType: "untyped", value: -2 }] } });

useDeactivateSource()(instanceId);
```

## Next

- **UI**: list `activeSources` with their lines; activate buttons on item/spell/ability panels; a "custom effect" form.
- **Authoring**: add `effects` to compendium entries; move sheet values (armor, cloak "magic" saves) into items/sources as they're modeled.
- **Not yet modeled**: a "set" operation (paralysis → Dex 0), skill synergies as contributions, armor max Dex, speed bonuses only applying to modes the character already has.
