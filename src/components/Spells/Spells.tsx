import { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import {
  modalTypeState,
  selectionState,
  innateSpellsCastState,
  preppedSpellsState,
  preppedSpellsCastState,
  primaryModifierState,
  characterState,
  spellCompendiumState,
} from "../../recoilState";
import { combine as c } from "../../lib";
import { getInfoById } from "../../utilities/utilities";

import { Button } from "../Button";
import { FadedSeparator } from "../FadedSeparator";

function Spell(p: {
  spell: ISpell;
  innate?: boolean;
  isPrepping?: boolean;
  expended?: boolean;
}) {
  const setModalType = useSetRecoilState(modalTypeState);
  const setSelection = useSetRecoilState(selectionState);

  function displayInfo(spell: ISpell) {
    const modalType = p.innate
      ? "Cast"
      : p.isPrepping
        ? "Prep"
        : p.expended
          ? "UsedPrepped"
          : "CastPrepped";

    setModalType(modalType);
    setSelection(spell);
  }

  return (
    <button
      className={c(
        "whitespace-nowrap border border-stone-100 px-2 py-1",
        p.expended && "opacity-50",
      )}
      onClick={() => displayInfo(p.spell)}
    >
      {c(p.spell.name, p.innate ? " \u221e" : "")}
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
const numStrings = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
] as const;

export function Spells() {
  const [isPrepping, setIsPrepping] = useState(false);
  const character = useRecoilValue(characterState);
  const spellCompendium = useRecoilValue(spellCompendiumState);
  const primaryModifier = useRecoilValue(primaryModifierState);
  const innateSpellsCast = useRecoilValue(innateSpellsCastState);
  const preppedSpells = useRecoilValue(preppedSpellsState);
  const preppedSpellsCast = useRecoilValue(preppedSpellsCastState);
  const casterType = !character.magic.type.arcane
    ? "Orisons"
    : !character.magic.type.divine
      ? "Cantrips"
      : "Cantrips & Orisons";
  const spellListContainerClasses = "flex flex-wrap gap-2 items-center my-4";

  function getRemainingSpells(spellLevel: number) {
    return (
      character.magic.spellsPerDay[numStrings[spellLevel]] -
      innateSpellsCast[spellLevel].length -
      preppedSpells[spellLevel].length -
      preppedSpellsCast[spellLevel].length
    );
  }

  function getDifficultyClass(levelNum: number) {
    return 10 + levelNum + primaryModifier;
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
      {romans.map((x, i) => (
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
          {(preppedSpells[i].length >= 1 ||
            preppedSpellsCast[i].length >= 1) && (
            <>
              <div className={spellListContainerClasses}>
                Prepped:
                {preppedSpells[i].map((y) => (
                  <Spell key={y.id + i} spell={y} isPrepping={isPrepping} />
                ))}
                {preppedSpellsCast[i].map((y) => (
                  <Spell key={y.id + i} spell={y} expended />
                ))}
              </div>
              <FadedSeparator className="mx-auto w-1/2" />
            </>
          )}
          <div className={spellListContainerClasses}>
            {character.magic.spellRefs
              .filter((y) => y.innate === !isPrepping)
              .filter((y) => y.level === i)
              .map((y) => {
                const spell = getInfoById(spellCompendium)(y.id) as ISpell;

                return <Spell key={y.id} spell={spell} innate={!isPrepping} />;
              })}
          </div>
          <FadedSeparator />
        </div>
      ))}
    </>
  );
}
