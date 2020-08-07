import React, { useContext } from "react";
import {
  Character,
  ToggleInfo,
  Selection,
  GetSetDisplayTwo,
  PrimaryModifier,
  totalSpells
} from "./dnd.js";

const KnownSpells = props => {
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
  const [selection, setSelection] = useContext(Selection);
  const spell = props.value;
  const formattedSpell = spell.replace(/_/g, " ");
  const buttonAndSpellClass = "spellButtons " + spell;
  function displayInfo(spell) {
    setToggleInfo("Spell");
    setSelection(spell);
  }
  return (
    <button className={buttonAndSpellClass} onClick={() => displayInfo(spell)}>
      {formattedSpell + " \u221e"}
    </button>
  );
};
const Spells = props => {
  const character = useContext(Character);
  const primaryModifier = useContext(PrimaryModifier);
  const [displayTwo, setDisplayTwo] = useContext(GetSetDisplayTwo);
  console.log(primaryModifier);
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
  function displaySpells(level) {
    const spells = Object.values(character.magic.spells[level]).map(s => (
      <KnownSpells key={s} value={s} />
    ));
    return spells;
  }
  //condense spell block into function
  function spellCodeBlock(level, levelNum, levelRoman) {
    return (
      <div className="spellItems">
        <div className="spellLevelWrapper">
          <h2 className="spellLevelHeader">Level {levelRoman}</h2>
          <em className="remainingSpells">
            {totalSpells(character, primaryModifier, level, levelNum)} remaining
            today
          </em>
        </div>
        <p className="spellList">{displaySpells(level)}</p>
        <hr />
      </div>
    );
  }
  return (
    <div>
      <button id="prepSpellsButton" onClick={() => setDisplayTwo("Prep")}>
        <i className="fas fa-book"></i>
        <span>PREP</span>
      </button>
      <div className="spellContainer">
        <div className="spellItems">
          <div className="spellLevelWrapper">
            <h2 id="levelZeroHeader" className="spellLevelHeader">
              {casterType()}
            </h2>
            <em className="remainingSpells">
              {totalSpells(character, primaryModifier, "zero", 0)} remaining
              today
            </em>
          </div>
          <p className="spellList">{displaySpells("zero")}</p>
          <hr />
        </div>
        {spellCodeBlock("one", 1, "I")}
        {spellCodeBlock("two", 2, "II")}
        {spellCodeBlock("three", 3, "III")}
        {spellCodeBlock("four", 4, "IV")}
        {spellCodeBlock("five", 5, "V")}
        {spellCodeBlock("six", 6, "VI")}
        {spellCodeBlock("seven", 7, "VII")}
        {spellCodeBlock("eight", 8, "VIII")}
        {spellCodeBlock("nine", 9, "IX")}
      </div>
    </div>
  );
};

export default Spells;
