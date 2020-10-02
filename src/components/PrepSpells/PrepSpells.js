import React, { useContext } from "react";
import { useSetRecoilState } from "recoil";

import {
  mainContentState,
  toggleInfoState,
  selectionState,
} from "../../recoilState.js";
import { Character, PrimaryModifier, totalSpells } from "../dnd.js";
import "./PrepSpells.css";

const KnownSpell = (props) => {
  const setToggleInfo = useSetRecoilState(toggleInfoState);
  const setSelection = useSetRecoilState(selectionState);
  const spell = props.value;
  const formattedClass = spell.replace(/\W/g, "");
  const buttonAndSpellClass = "spellButtons " + formattedClass;
  function displayInfo(spell) {
    setToggleInfo("Spell");
    setSelection(spell);
  }
  return (
    <button className={buttonAndSpellClass} onClick={() => displayInfo(spell)}>
      {spell}
    </button>
  );
};

const Spellbook = (props) => {
  return Object.values(
    props.character.magic.spellbook[props.level]
  ).map((s) => <KnownSpell key={s} value={s} />);
};

const CasterType = (props) => {
  const character = props.character;
  if (character.magic.type.arcane && character.magic.type.divine) {
    return "Cantrips & Orisons";
  } else if (character.magic.type.divine) {
    return "Orisons";
  } else if (character.magic.type.arcane) {
    return "Cantrips";
  }
};

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

const SpellCodeBlock = (props) => {
  const { levelNum } = props;
  const levelRoman = romans[levelNum - 1];
  const level = numStrings[levelNum - 1];
  return (
    <div className="spellItems">
      <div className="spellLevelWrapper">
        <h2 className="spellLevelHeader">Level {levelRoman}</h2>
        <em className="remainingSpells">
          {totalSpells(props.character, props.primaryModifier, level, levelNum)}{" "}
          remaining today
        </em>
      </div>
      <p className="spellList">
        <Spellbook level={level} character={props.character} />
      </p>
      <hr />
    </div>
  );
};
const PrepSpells = (props) => {
  const character = useContext(Character);
  const [primaryModifier] = useContext(PrimaryModifier);
  const setMainContent = useSetRecoilState(mainContentState);

  return (
    <>
      <div>
        <button id="returnToSpells" onClick={() => setMainContent("Spells")}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <div className="spellContainer">
          <div className="spellItems">
            <div className="spellLevelWrapper">
              <h2 id="levelZeroHeaderPrep" className="spellLevelHeader">
                <CasterType character={character} />
              </h2>
              <em className="remainingSpells">
                {totalSpells(character, primaryModifier, "zero", 0)} remaining
                today
              </em>
            </div>
            <p className="spellList">
              <Spellbook level="zero" character={character} />
            </p>
            <hr />
          </div>
          {romans.map((_, i) => (
            <SpellCodeBlock
              key={i + 1}
              levelNum={i + 1}
              character={character}
              primaryModifier={primaryModifier}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PrepSpells;
