import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";
import type { SetterOrUpdater } from "recoil";

/**
 * Because the default value for many of these objects is null, but we do not
 * want most of the app to behave as though they are null, we declare the null
 * values to actually be the real data instead of null. This Type will be used
 * at the location where the values for these states is initially set, and it
 * will represent the _actual_ data that we have: null OR the real data.
 */
export type InitialRecoilState<T> = [
  value: T | null,
  setValue: SetterOrUpdater<T>,
];

export const spellCompendiumState = atom<{ spells: ISpell[] }>({
  key: "spellCompendiumState",
  default: { spells: [] },
});

export const itemCompendiumState = atom<{ items: IItem[] }>({
  key: "itemCompendiumState",
  default: { items: [] },
});

export const characterState = atom<ICharacter>({
  key: "characterState",
  default: null as any,
});

export const useCharacter = () => useRecoilValue(characterState);

const abilityScores = selector({
  key: "abilityScores",
  get: ({ get }) => {
    const abilityScores = get(characterState).abilities.score;

    return Object.entries(abilityScores).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          score: value,
          modifier: value ? Math.floor((value - 10) / 2) : null,
        },
      }),
      {} as Record<Ability, { score: number | null; modifier: number | null }>,
    );
  },
});

export function useAbilityScore(ability: Ability) {
  const scores = useRecoilValue(abilityScores);
  return scores[ability];
}

const characterItems = selector({
  key: "characterItems",
  get: ({ get }) => {
    const itemRefs = get(characterState).itemRefs;
    const itemCompendium = get(itemCompendiumState).items;

    const items = itemRefs
      .map((itemRef) => itemCompendium.find((i) => i.id === itemRef.id))
      .filter(Boolean) as IItem[];

    return items;
  },
});

export function useItems() {
  return useRecoilValue(characterItems);
}
export const updatedCharacterState = atom<ICharacter>({
  key: "updatedCharacterState",
  default: null as any,
});

export const damageState = atom({
  key: "damageState",
  default: 0,
});

export const temporaryHitPointsState = atom({
  key: "temporaryHitPointsState",
  default: 0,
});

export const diceRollState = atom<{
  result: number;
  size: number;
  mod: number;
  use: string;
} | null>({
  key: "diceRollState",
  default: null,
});

export function useDiceRoll(size: number) {
  const setRollResult = useSetRecoilState(diceRollState);
  return (mod: number, use: string) => {
    const result = Math.floor(Math.random() * size + 1);

    setRollResult({ result, mod, size, use });
  };
}

export function useResetDiceRoll() {
  const setRollResult = useSetRecoilState(diceRollState);
  return () => setRollResult(null);
}

export const useDiceRollResult = () => useRecoilValue(diceRollState);

export type MainContent =
  | "Skills"
  | "Scores"
  | "Attacks"
  | "More"
  | "Spells"
  | "Abilities"
  | "SLAs"
  | "Prep"
  | "Items"
  | "EditSkills"
  | "EditAbilities"
  | "EditMagic"
  | "EditSpells"
  | "EditSLAs"
  | "EditAttacks"
  | "EditItems"
  | "EditCore"
  | "AddCharacter"
  | "ChangeCharacter";

export const mainContentState = atom<MainContent>({
  key: "mainContentState",
  default: "Skills",
});

export type SecondaryNavbar = "stats" | "ability" | "more";

export const secondaryNavbarState = atom<SecondaryNavbar>({
  key: "secondaryNavbarDisplayState",
  default: "stats",
});

export type ModalType =
  | "Cast"
  | "Prep"
  | "CastPrepped"
  | "UsedPrepped"
  | "HP"
  | "Defense"
  | "Abilities"
  | "SLA"
  | "Item"
  | "ConfirmationCharacterSpell"
  | "Off";

export const modalTypeState = atom<ModalType>({
  key: "modalTypeState",
  default: "Off",
});

export const confirmationMsg = atom<string | null>({
  key: "confirmationMsg",
  default: null,
});
export const selectionState = atom({
  key: "selectionState",
  default: {},
});

export const emptySpellArray: [
  ISpell[],
  ISpell[],
  ISpell[],
  ISpell[],
  ISpell[],
  ISpell[],
  ISpell[],
  ISpell[],
  ISpell[],
  ISpell[],
] = [[], [], [], [], [], [], [], [], [], []];

export const innateSpellsCastState = atom({
  key: "innateSpellsCastState",
  default: emptySpellArray,
});
export const preppedSpellsState = atom({
  key: "preppedSpellsState",
  default: emptySpellArray,
});
export const preppedSpellsCastState = atom({
  key: "preppedSpellsCastState",
  default: emptySpellArray,
});
export const slaState = atom({
  key: "slaState",
  default: emptySpellArray,
});

export const allKnownSpells_ = selector({
  key: "allKnownSpells_",
  get: ({ get }) => {
    const magic = get(characterState).magic;
    const spellCompendium = get(spellCompendiumState);
    function getSpellInfoById(id: string) {
      return spellCompendium.spells.find((item) => item.id === id);
    }

    const spells = magic.spellRefs.map((x) => ({
      ...x,
      uses: x.innate ? Number.POSITIVE_INFINITY : 0,
      numUsed: 0,
      entry: getSpellInfoById(x.id),
    }));

    const spellLikeAbilities = magic.slaRefs.map((x) => ({
      ...x,
      numUsed: 0,
      entry: getSpellInfoById(x.id),
    }));

    return { spells, spellLikeAbilities };
  },
});

export const allKnownSpells = atom({
  key: "allKnownSpells",
  default: allKnownSpells_,
});

export const spellSlotsExpended = selector({
  key: "spellSlotsExpended",
  get: ({ get }) => {
    const expendedSpells = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    function getExpendedSpellsByLevel(level: number) {
      return get(allKnownSpells)
        .spells.filter((x) => x.level === level)
        .reduce((acc, x) => {
          const expended =
            x.uses < Number.POSITIVE_INFINITY ? x.uses : x.numUsed;
          return acc + expended;
        }, 0);
    }

    return expendedSpells.map((x, i) => x + getExpendedSpellsByLevel(i));
  },
});
