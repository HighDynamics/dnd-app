import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import {
  modalTypeState,
  characterState,
  selectionState,
} from "../../recoilState.js";

const romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const numStrings = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const KnownSLAs = (props) => {
  const setModalType = useSetRecoilState(modalTypeState);
  const setSelection = useSetRecoilState(selectionState);
  const { name, uses, frequency } = props;
  const formattedName = name.replace(/_/g, " ");
  const buttonAndSpellClass = "spellButtons " + name;
  function displayInfo(modalDestination) {
    setSelection(name);
    setModalType(modalDestination);
  }
  return (
    <button className={buttonAndSpellClass} onClick={() => displayInfo("SLA")}>
      {formattedName} {uses}/{frequency}
    </button>
  );
};
const SLACodeBlock = (props) => {
  const { levelNum, character, displaySLAs } = props;
  const levelRoman = romans[levelNum - 1];
  const level = numStrings[levelNum - 1];

  return (
    <>
      {Array.isArray(character.magic.slas[level]) ? (
        <div className="spellItems">
          <div className="spellLevelWrapper">
            <h2 className="spellLevelHeader">Level {levelRoman}</h2>
          </div>
          <p className="spellList">{displaySLAs(level)}</p>
          <hr />
        </div>
      ) : null}
    </>
  );
};

const SLAs = (props) => {
  const character = useRecoilValue(characterState);
  //cantrips or orisons? or both?
  function casterType() {
    if (character.magic.type.arcane && character.magic.type.divine) {
      return "Cantrips & Orisons";
    } else if (character.magic.type.divine) {
      return "Orisons";
    } else if (character.magic.type.arcane) {
      return "Cantrips";
    }
  }
  function displaySLAs(level) {
    const slas = Object.values(character.magic.slas[level]).map((s) => (
      <KnownSLAs
        key={s.name}
        name={s.name}
        uses={s.uses}
        frequency={s.frequency}
      />
    ));
    return slas;
  }
  return (
    <div>
      <div className="spellContainer">
        {Array.isArray(character.magic.slas.zero) ? (
          <div className="spellItems">
            <div className="spellLevelWrapper">
              <h2 className="spellLevelHeader">{casterType()}</h2>
            </div>
            <p className="spellList">{displaySLAs("zero")}</p>
            <hr />
          </div>
        ) : null}
        {romans.map((_, i) => (
          <SLACodeBlock
            key={i + 1}
            levelNum={i + 1}
            character={character}
            displaySLAs={displaySLAs}
          />
        ))}
      </div>
    </div>
  );
};

export default SLAs;
