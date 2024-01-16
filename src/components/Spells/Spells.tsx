import { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import * as store from "../../recoilState";
import { combine as c } from "../../lib";

import { Button } from "../Button";
import { FadedSeparator } from "../FadedSeparator";

function Spell(p: {
  spell: {
    id: string;
    level: number;
    uses: number;
    numUsed: number;
    entry: ISpell | undefined;
    frequency?: string;
  };
  isPrepping?: boolean;
}) {
  const setModalType = useSetRecoilState(store.modalTypeState);
  const setSelection = useSetRecoilState(store.selectionState);

  const remainingUses =
    p.spell.uses === Number.POSITIVE_INFINITY
      ? "\u221e"
      : `x ${p.spell.uses - p.spell.numUsed}`;

  function displayInfo(spell: ISpell) {
    const modalType =
      p.spell.uses === Number.POSITIVE_INFINITY
        ? "Cast"
        : p.isPrepping
          ? "Prep"
          : p.spell.frequency
            ? "SLA"
            : p.spell.numUsed >= p.spell.uses
              ? "UsedPrepped"
              : "CastPrepped";

    setModalType(modalType);
    setSelection(spell);
  }

  if (!p.spell.entry) return null;

  return (
    <button
      className={c(
        "whitespace-nowrap border border-stone-100 px-2 py-1",
        p.spell.numUsed >= p.spell.uses && "opacity-50",
      )}
      onClick={() => displayInfo(p.spell.entry)}
    >
      {c(p.spell.entry.name, remainingUses)}
    </button>
  );
}

const romans = [
  null,
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
] as const;

export function Spells() {
  const [isPrepping, setIsPrepping] = useState(false);
  const character = useRecoilValue(store.characterState);
  const primaryModifier = useRecoilValue(store.primaryModifierState);
  const spellSlotsExpended = useRecoilValue(store.spellSlotsExpended);
  const allKnownSpells = useRecoilValue(store.allKnownSpells);

  const preppedSpells = allKnownSpells.spellbookSpells.filter(
    (x) => x.uses > 0,
  );

  const casterType = !character.magic.type.arcane
    ? "Orisons"
    : !character.magic.type.divine
      ? "Cantrips"
      : "Cantrips & Orisons";
  const spellListContainerClasses = "flex flex-wrap gap-2 items-center my-4";

  function getDifficultyClass(levelNum: number) {
    return 10 + levelNum + primaryModifier;
  }

  function getRemainingSpells(level: number) {
    return character.magic.spellsPerDay[level] - spellSlotsExpended[level];
  }

  return (
    <>
      {!isPrepping ? (
        <Button
          className="fixed flex items-center gap-2 text-lg"
          onClick={() => setIsPrepping(true)}
        >
          <i className="fas fa-book"></i>
          <span>PREP</span>
        </Button>
      ) : (
        <Button onClick={() => setIsPrepping(false)} className="fixed">
          <i className="fas fa-arrow-left"></i>
        </Button>
      )}
      {romans.map((x, i) => {
        const thisLevelPreppedSpells = preppedSpells.filter(
          (y) => y.level === i,
        );
        const thisLevelSpellbookSpells = allKnownSpells.spellbookSpells.filter(
          (y) => y.level === i,
        );
        const thisLevelInnateSpells = allKnownSpells.innateSpells.filter(
          (y) => y.level === i,
        );
        const thisLevelSLAs = allKnownSpells.spellLikeAbilities.filter(
          (y) => y.level === i,
        );

        return (
          <div key={x} className="mt-4 px-4">
            <div className="text-center">
              <h2 className="text-3xl">
                {i === 0 ? (
                  <>
                    {casterType} (DC {getDifficultyClass(i)})
                  </>
                ) : (
                  <>
                    Level {x} (DC {getDifficultyClass(i)})
                  </>
                )}
              </h2>
              <span className="italic">
                {getRemainingSpells(i)} remaining today
              </span>
            </div>
            {thisLevelPreppedSpells.length > 0 && (
              <>
                <div className={spellListContainerClasses}>
                  Prepped:
                  {thisLevelPreppedSpells.map((y) => (
                    <Spell key={y.id + i} spell={y} isPrepping={isPrepping} />
                  ))}
                </div>
                <FadedSeparator className="mx-auto w-1/2" />
              </>
            )}
            <div className={spellListContainerClasses}>
              {isPrepping &&
                thisLevelSpellbookSpells.map((y) => (
                  <Spell key={y.id} spell={y} isPrepping={isPrepping} />
                ))}
              {!isPrepping && thisLevelInnateSpells.length > 0 && (
                <>
                  <div>Spontaneous:</div>
                  {thisLevelInnateSpells.map((y) => (
                    <Spell key={y.id} spell={y} isPrepping={isPrepping} />
                  ))}
                </>
              )}
            </div>
            <div className={spellListContainerClasses}>
              {thisLevelSLAs.length > 0 && (
                <>
                  <div>Spell-Like Abilities:</div>
                  {thisLevelSLAs.map((y) => (
                    <Spell key={y.id} spell={y} />
                  ))}
                </>
              )}
            </div>
            <FadedSeparator />
          </div>
        );
      })}
    </>
  );
}
