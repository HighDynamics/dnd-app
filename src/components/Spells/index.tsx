import { useState } from "react";
import { useRecoilValue } from "recoil";

import { combine as c } from "../../lib";
import * as store from "../../recoilState";

import { Button } from "../Button";
import { SpellList } from "./SpellList";

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

  const preppedSpells = allKnownSpells.spells.filter(
    (x) => x.uses > 0 && x.uses < Number.POSITIVE_INFINITY,
  );

  const casterType = !character.magic.type.arcane
    ? "Orisons"
    : !character.magic.type.divine
      ? "Cantrips"
      : "Cantrips & Orisons";
  const spellListContainerClasses = "flex flex-col gap-2 my-4";

  function getDifficultyClass(levelNum: number) {
    return 10 + levelNum + primaryModifier;
  }

  function getRemainingSpells(level: number) {
    return character.magic.spellsPerDay[level] - spellSlotsExpended[level];
  }

  return (
    <div className="px-4">
      <div className="mt-2 flex gap-2">
        <Button
          className={c("grow basis-0", isPrepping && "opacity-50")}
          onClick={() => setIsPrepping(false)}
        >
          Cast Spells
        </Button>
        <Button
          className={c("grow basis-0", !isPrepping && "opacity-50")}
          onClick={() => setIsPrepping(true)}
        >
          Prepare Spells
        </Button>
      </div>
      {romans.map((x, i) => {
        const thisLevelPreppedSpells = preppedSpells.filter(
          (y) => y.level === i,
        );

        const thisLevelSpellbookSpells = allKnownSpells.spells
          .filter((x) => !x.innate)
          .filter((y) => y.level === i);

        const thisLevelInnateSpells = allKnownSpells.spells
          .filter((x) => x.innate)
          .filter((y) => y.level === i);

        const thisLevelSlas = allKnownSpells.spellLikeAbilities.filter(
          (y) => y.level === i,
        );

        return (
          <div key={x} className="mt-12">
            <div className="">
              <h2 className="text-5xl font-bold opacity-90">
                {i === 0 ? <>{casterType.toUpperCase()}</> : <>{x}</>}
              </h2>
              <h3 className="text-3xl">DC {getDifficultyClass(i)}</h3>
              <span className="italic">
                {getRemainingSpells(i)} remaining today
              </span>
            </div>
            {!isPrepping && (
              <div className="flex flex-col gap-4">
                {thisLevelPreppedSpells.length > 0 && (
                  <div className={spellListContainerClasses}>
                    <span className="text-label">Prepped</span>
                    <SpellList
                      spellList={thisLevelPreppedSpells}
                      isPrepping={isPrepping}
                    />
                  </div>
                )}
                {thisLevelInnateSpells.length > 0 && (
                  <div className={spellListContainerClasses}>
                    <span className="text-label">Spontaneous</span>
                    <SpellList
                      spellList={thisLevelInnateSpells}
                      isPrepping={isPrepping}
                    />
                  </div>
                )}
                {thisLevelSlas.length > 0 && (
                  <div className={spellListContainerClasses}>
                    <span className="text-label">Spell-Like Abilities</span>
                    <SpellList
                      spellList={thisLevelSlas}
                      isPrepping={isPrepping}
                    />
                  </div>
                )}
              </div>
            )}
            {isPrepping && (
              <div className={spellListContainerClasses}>
                <SpellList
                  spellList={thisLevelSpellbookSpells}
                  isPrepping={isPrepping}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
