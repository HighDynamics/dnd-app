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
  spellCompendiumState,
} from "../../recoilState";
import { totalSpells } from "../dnd";
import { getInfoById } from "../../utilities/utilities";
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
  return (
    <>
      {preppedSpellsCast[levelNum].map((psc) => (
        <PreppedSpellCast key={psc} value={psc} />
      ))}
    </>
  );
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
  return (
    <>
      {preppedSpells[levelNum].map((ps) => (
        <PreppedSpell key={ps} value={ps} />
      ))}
    </>
  );
}

const KnownSpell = ({
  spellRef,
  level,
}: {
  spellRef: string;
  level: number;
}) => {
  const setModalType = useSetRecoilState(modalTypeState);
  const setSelection = useSetRecoilState(selectionState);
  const spellCompendium = useRecoilValue(spellCompendiumState);
  const getSpellInfoById = getInfoById(spellCompendium);
  const spell = getSpellInfoById(spellRef);
  const formattedClass = spell.name.replace(/\W/g, "");
  const buttonAndSpellClass = "spellButtons " + formattedClass;
  function displayInfo(spell: ISpell) {
    innate === true ? setModalType("Cast") : setModalType("Prep");
    setSelection(spell);
  }
  return (
    <>
      {innate === true ? (
        <button
          className={buttonAndSpellClass}
          onClick={() => displayInfo(spell)}
        >
          {spell.name + " \u221e"}
        </button>
      ) : (
        <button
          className={buttonAndSpellClass}
          onClick={() => displayInfo(spell)}
        >
          {spell.name}
        </button>
      )}
    </>
  );
};

const KnownSpells = ({
  character,
  level,
  innate,
}: {
  character: ICharacter;
  level: keyof ICharacter["magic"]["spell_refs"]["level"];
}) => {
  const innateSpells = character.magic.spell_refs.filter(
    (sr) => sr.innate === true
  );
  const spellbook = character.magic.spell_refs.filter(
    (sr) => sr.innate === false
  );
  return (
    <>
      {innate === true
        ? Object.values(
            innateSpells.filter((sr) => sr.level === level)
          ).map((s) => (
            <KnownSpell
              key={s.id}
              spellRef={s.id}
              level={s.level}
              innate={innate}
            />
          ))
        : Object.values(
            spellbook
              .filter((sr) => sr.level === level)
              .map((s) => (
                <KnownSpell
                  key={s.id}
                  spellRef={s.id}
                  level={s.level}
                  innate={innate}
                />
              ))
          )}
    </>
  );
};

const CasterType = ({ character }: { character: ICharacter }) => {
  if (character.magic.type.arcane && character.magic.type.divine) {
    return <>Cantrips & Orisons</>;
  } else if (character.magic.type.divine) {
    return <>Orisons</>;
  } else {
    return <>Cantrips</>;
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

const Spells = () => {
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
            <KnownSpells level={0} character={character} />
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
