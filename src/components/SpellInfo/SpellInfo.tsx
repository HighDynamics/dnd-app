import { FadedSeparator } from "../FadedSeparator";
import "./SpellInfo.css";

function SpellProperty(p: { name: string; value?: string | null }) {
  if (!p.value) return null;
  return (
    <div className="flex gap-1">
      <span className="w-[13ch] shrink-0">{p.name}:</span>
      <span>{p.value}</span>
    </div>
  );
}

function formatRange(range?: string) {
  if (!range) return null;
  return range === "Close"
    ? "Close (25 ft. + 5 ft./2 levels)"
    : range === "Medium"
      ? "Medium (100 ft. + 10 ft./level)"
      : range === "Long"
        ? "Long (400 ft. + 40 ft./level)"
        : range;
}

export function SpellInfo(p: { spell: ISpell }) {
  return (
    <div className="mt-1">
      <div className="mb-2 flex gap-1">
        <span>{p.spell.school}</span>
        {p.spell.subSchool && <span>({p.spell.subSchool})</span>}
        {p.spell.descriptor && <span>[{p.spell.descriptor}]</span>}
      </div>
      <div className="flex flex-col gap-1 text-sm">
        <SpellProperty name="Level" value={p.spell.level} />
        <SpellProperty name="Components" value={p.spell.components} />
        <SpellProperty name="Casting Time" value={p.spell.castingTime} />
        <SpellProperty name="Range" value={formatRange(p.spell.range)} />
        <SpellProperty name="Target" value={p.spell.target} />
        <SpellProperty name="Effect" value={p.spell.effect} />
        <SpellProperty name="Area" value={p.spell.area} />
        <SpellProperty name="Target or Area" value={p.spell.targetOrArea} />
        <SpellProperty name="Duration" value={p.spell.duration} />
        <SpellProperty name="Saving Throw" value={p.spell.savingThrow} />
        <SpellProperty
          name="Spell Resistance"
          value={p.spell.spellResistance}
        />
        <FadedSeparator className="my-2" />
        <p className="whitespace-pre-line">{p.spell.description}</p>
      </div>
    </div>
  );
}
