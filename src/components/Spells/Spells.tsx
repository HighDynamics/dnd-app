import { useSetRecoilState, useRecoilValue } from "recoil";

import {
  mainContentState,
  modalTypeState,
  selectionState,
  innateSpellsCastState,
  preppedSpellsState,
  preppedSpellsCastState,
  primaryModifierState,
  characterState,
} from "../../recoilState";
import { totalSpells } from "../dnd";
import "./Spells.css";

const PreppedSpellCast = (props: { value: string }) => {
  const spell = props.value;
  const setModalType = useSetRecoilState(modalTypeState);
  const setSelection = useSetRecoilState(selectionState);
  const formattedSpellName = spell.replace(/\W/g, "");
  const buttonAndSpellClass = "spellButtons disabled " + formattedSpellName;
  function displayInfo(spell: string) {
    setModalType("UsedPrepped");
    setSelection(spell);
  }
  return (
    <button className={buttonAndSpellClass} onClick={() => displayInfo(spell)}>
      {spell}
    </button>
  );
};

function PreppedSpellsCast(props: {
  levelNum: number;
  preppedSpellsCast: Array<string[]>;
}) {
  const { levelNum, preppedSpellsCast } = props;
  return preppedSpellsCast[levelNum].map((psc) => (
    <PreppedSpellCast key={psc} value={psc} />
  ));
}

const PreppedSpell = (props: { value: string }) => {
  const spell = props.value;
  const setModalType = useSetRecoilState(modalTypeState);
  const setSelection = useSetRecoilState(selectionState);
  const formattedSpellName = spell.replace(/\W/g, "");
  const buttonAndSpellClass = "spellButtons " + formattedSpellName;
  function displayInfo(spell: string) {
    setModalType("CastPrepped");
    setSelection(spell);
  }
  return (
    <button className={buttonAndSpellClass} onClick={() => displayInfo(spell)}>
      {spell}
    </button>
  );
};

function PreppedSpells(props: {
  levelNum: number;
  preppedSpells: Array<string[]>;
}) {
  const { levelNum, preppedSpells } = props;
  return preppedSpells[levelNum].map((ps) => (
    <PreppedSpell key={ps} value={ps} />
  ));
}

const KnownSpell = (props: { value: string }) => {
  const setModalType = useSetRecoilState(modalTypeState);
  const setSelection = useSetRecoilState(selectionState);
  const spell = props.value;
  const formattedClass = spell.replace(/\W/g, "");
  const buttonAndSpellClass = "spellButtons " + formattedClass;
  function displayInfo(spell: string) {
    setModalType("Cast");
    setSelection(spell);
  }
  return (
    <button className={buttonAndSpellClass} onClick={() => displayInfo(spell)}>
      {spell + " \u221e"}
    </button>
  );
};

const KnownSpells = (props: {
  character: ICharacter;
  level: keyof ICharacter["magic"]["spells"];
}) => {
  return Object.values(props.character.magic.spells[props.level]).map((s) => (
    <KnownSpell key={s} value={s} />
  ));
};

const CasterType = (props: { character: ICharacter }) => {
  const character = props.character;
  if (character.magic.type.arcane && character.magic.type.divine) {
    return "Cantrips & Orisons";
  } else if (character.magic.type.divine) {
    return "Orisons";
  } else if (character.magic.type.arcane) {
    return "Cantrips";
  }
};

const romans = [
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

const SpellCodeBlock = (props: {
  levelNum: number;
  character: ICharacter;
  primaryModifier: number;
  innateSpellsCast: Array<string[]>;
  preppedSpells: Array<string[]>;
  preppedSpellsCast: Array<string[]>;
  getDifficultyClass: (levelNum: number) => number;
}) => {
  const {
    levelNum,
    character,
    primaryModifier,
    innateSpellsCast,
    preppedSpells,
    preppedSpellsCast,
    getDifficultyClass,
  } = props;
  const levelRoman = romans[levelNum - 1];
  const level = numStrings[levelNum - 1];
  const remainingSpells =
    totalSpells(character, primaryModifier, level, levelNum) -
    innateSpellsCast[levelNum].length -
    preppedSpells[levelNum].length -
    preppedSpellsCast[levelNum].length;
  return (
    <div className="spellItems">
      <div className="spellLevelWrapper">
        <h2 className="spellLevelHeader">
          Level {levelRoman} (DC {getDifficultyClass(levelNum)})
        </h2>
        <em className="remainingSpells">{remainingSpells} remaining today</em>
      </div>
      {preppedSpells[levelNum].length >= 1 ||
      preppedSpellsCast[levelNum].length >= 1 ? (
        <>
          <p className="preppedSpells">
            Prepped:{" "}
            <PreppedSpells levelNum={levelNum} preppedSpells={preppedSpells} />
            <PreppedSpellsCast
              levelNum={levelNum}
              preppedSpellsCast={preppedSpellsCast}
            />
          </p>
          <hr className="shortHR" />
        </>
      ) : null}
      <p className="spellList">
        <KnownSpells level={level} character={character} />
      </p>
      <hr />
    </div>
  );
};

const Spells = (props) => {
  const character = useRecoilValue(characterState);
  const primaryModifier = useRecoilValue(primaryModifierState);
  const setMainContent = useSetRecoilState(mainContentState);
  const innateSpellsCast = useRecoilValue(innateSpellsCastState);
  const preppedSpells = useRecoilValue(preppedSpellsState);
  const preppedSpellsCast = useRecoilValue(preppedSpellsCastState);
  const remainingSpells =
    character.magic.spellsPerDay.zero -
    innateSpellsCast[0].length -
    preppedSpells[0].length -
    preppedSpellsCast[0].length;
  function getDifficultyClass(levelNum: number) {
    return 10 + levelNum + primaryModifier;
  }

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
              <CasterType character={character} /> (DC {getDifficultyClass(0)})
            </h2>
            <em className="remainingSpells">
              {remainingSpells} remaining today
            </em>
          </div>
          {preppedSpells[0].length >= 1 || preppedSpellsCast[0].length >= 1 ? (
            <>
              <p className="preppedSpells">
                Prepped:{" "}
                <PreppedSpells levelNum={0} preppedSpells={preppedSpells} />
                <PreppedSpellsCast
                  levelNum={0}
                  preppedSpellsCast={preppedSpellsCast}
                />
              </p>
              <hr className="shortHR" />
            </>
          ) : null}
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
            preppedSpellsCast={preppedSpellsCast}
            getDifficultyClass={getDifficultyClass}
          />
        ))}
      </div>
    </div>
  );
};

export default Spells;
