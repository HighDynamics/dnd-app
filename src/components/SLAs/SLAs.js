import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { modalTypeState, characterState } from "../../recoilState.js";

const KnownSLAs = (props) => {
  const setModalType = useSetRecoilState(modalTypeState);
  const spell = props.value;
  const formattedSpell = spell.replace(/_/g, " ");
  const buttonAndSpellClass = "spellButtons " + spell;
  return (
    <button className={buttonAndSpellClass} onClick={() => setModalType("SLA")}>
      {formattedSpell}
    </button>
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
      <KnownSLAs key={s} value={s} />
    ));
    return slas;
  }
  //condense SLA code block into function
  function SLACodeBlock(level, levelNum, levelRoman) {
    if (Array.isArray(character.magic.slas[level])) {
      return (
        <div className="spellItems">
          <div className="spellLevelWrapper">
            <h2 className="spellLevelHeader">Level {levelRoman}</h2>
          </div>
          <p className="spellList">{displaySLAs(level)}</p>
          <hr />
        </div>
      );
    }
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
        {SLACodeBlock("one", 1, "I")}
        {SLACodeBlock("two", 2, "II")}
        {SLACodeBlock("three", 3, "III")}
        {SLACodeBlock("four", 4, "IV")}
        {SLACodeBlock("five", 5, "V")}
        {SLACodeBlock("six", 6, "VI")}
        {SLACodeBlock("seven", 7, "VII")}
        {SLACodeBlock("eight", 8, "VIII")}
        {SLACodeBlock("nine", 9, "IX")}
      </div>
    </div>
  );
};

export default SLAs;
