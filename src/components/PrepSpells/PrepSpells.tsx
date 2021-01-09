import { useSetRecoilState, useRecoilValue } from "recoil";

import {
  mainContentState,
  modalTypeState,
  selectionState,
  innateSpellsCastState,
  preppedSpellsState,
  primaryModifierState,
  characterState,
} from "../../recoilState";
import { totalSpells } from "../dnd";
import "./PrepSpells.css";

const KnownSpell = (props) => {
  const setModalType = useSetRecoilState(modalTypeState);
  const setSelection = useSetRecoilState(selectionState);
  const spell = props.value;
  const formattedClass = spell.replace(/\W/g, "");
  const buttonAndSpellClass = "spellButtons " + formattedClass;
  function displayInfo(spell) {
    setModalType("Prep");
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
        <Spellbook level={level} character={character} />
      </p>
      <hr />
    </div>
  );
};
const PrepSpells = (props) => {
  const character = useRecoilValue(characterState);
  const primaryModifier = useRecoilValue(primaryModifierState);
  const setMainContent = useSetRecoilState(mainContentState);
  const innateSpellsCast = useRecoilValue(innateSpellsCastState);
  const preppedSpells = useRecoilValue(preppedSpellsState);
  const remainingSpells =
    totalSpells(character, primaryModifier, "zero", 0) -
    innateSpellsCast[0].length -
    preppedSpells[0].length;

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
                {remainingSpells} remaining today
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
              innateSpellsCast={innateSpellsCast}
              preppedSpells={preppedSpells}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PrepSpells;
