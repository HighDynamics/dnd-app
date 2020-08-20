import React, { useContext } from "react";
import {
  Character,
  ToggleInfo,
  Selection,
  GetSetDisplayTwo,
  PrimaryModifier,
  totalSpells
} from "../dnd.js";
import "./Spells.css";

const KnownSpell = props => {
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
  const [selection, setSelection] = useContext(Selection);
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

const KnownSpells = props => {
  return Object.values(props.character.magic.spells[props.level]).map(s => (
    <KnownSpell key={s} value={s} />
  ));
};

const CasterType = props => {
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
  "nine"
];

const SpellCodeBlock = props => {
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
        <KnownSpells level={level} character={props.character} />
      </p>
      <hr />
    </div>
  );
};

const Spells = props => {
  const character = useContext(Character);
  const [primaryModifier] = useContext(PrimaryModifier);
  const [displayTwo, setDisplayTwo] = useContext(GetSetDisplayTwo);

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
              <CasterType character={character} />
            </h2>
            <em className="remainingSpells">
              {totalSpells(character, primaryModifier, "zero", 0)} remaining
              today
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
          />
        ))}
      </div>
    </div>
  );
};

export default Spells;
