import React, { useContext } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import {
  mainContentState,
  toggleInfoState,
  selectionState,
  innateSpellsCastState,
  preppedSpellsState,
} from "../../recoilState.js";
import { Character, PrimaryModifier, totalSpells } from "../dnd.js";
import "./Spells.css";

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
      {spell + " \u221e"}
    </button>
  );
};

const KnownSpells = (props) => {
  return Object.values(props.character.magic.spells[props.level]).map((s) => (
    <KnownSpell key={s} value={s} />
  ));
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
  const { character } = props;
  const { primaryModifier } = props;
  const { innateSpellsCast } = props;
  const { preppedSpells } = props;
  const levelRoman = romans[levelNum - 1];
  const level = numStrings[levelNum - 1];
  const remainingSpells =
    totalSpells(character, primaryModifier, level, levelNum) -
    innateSpellsCast[levelNum].length -
    preppedSpells[levelNum].length;
  return (
    <div className="spellItems">
      <div className="spellLevelWrapper">
        <h2 className="spellLevelHeader">Level {levelRoman}</h2>
        <em className="remainingSpells">{remainingSpells} remaining today</em>
      </div>
      <p className="spellList">
        <KnownSpells level={level} character={character} />
      </p>
      <hr />
    </div>
  );
};

const Spells = (props) => {
  const character = useContext(Character);
  const [primaryModifier] = useContext(PrimaryModifier);
  const setMainContent = useSetRecoilState(mainContentState);
  const innateSpellsCast = useRecoilValue(innateSpellsCastState);
  const preppedSpells = useRecoilValue(preppedSpellsState);
  const remainingSpells =
    totalSpells(character, primaryModifier, "zero", 0) -
    innateSpellsCast[0].length -
    preppedSpells[0].length;
  return (
    <div>
      <button id="prepSpellsButton" onClick={() => setMainContent("Prep")}>
        <i className="fas fa-book"></i>
        <span>PREP</span>
      </button>
      <div className="spellContainer">
        <div className="spellItems">
          <div className="spellLevelWrapper">
            <h2 id="levelZeroHeader" className="spellLevelHeader">
              <CasterType character={character} />
            </h2>
            <em className="remainingSpells">
              {remainingSpells} remaining today
            </em>
          </div>
          <p className="spellList">
            <KnownSpells level="zero" character={character} />
          </p>
          <hr />
        </div>
        {romans.map((_, i) => (
          <SpellCodeBlock
            key={i + 1}
            levelNum={i + 1}
            character={character}
            primaryModifier={primaryModifier}
            innateSpellsCast={innateSpellsCast}
            preppedSpells={preppedSpells}
          />
        ))}
      </div>
    </div>
  );
};

export default Spells;
