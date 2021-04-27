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

const PreppedSpellCast = (props: { value: ISpell }) => {
  const spell = props.value;
  const setModalType = useSetRecoilState(modalTypeState);
  const setSelection = useSetRecoilState(selectionState);
  const formattedSpellName = spell.name.replace(/\W/g, "");
  const buttonAndSpellClass = "spellButtons disabled " + formattedSpellName;
  function displayInfo(spell: string) {
    setModalType("UsedPrepped");
    setSelection(spell);
  }
  return (
    <button className={buttonAndSpellClass} onClick={() => displayInfo(spell)}>
      {spell.name}
    </button>
  );
};

function PreppedSpellsCast(props: {
  level: number;
  preppedSpellsCast: Array<ISpell[]>;
}) {
  const { level, preppedSpellsCast } = props;
  let n = 0;
  return (
    <>
      {preppedSpellsCast[level].map((psc) => {
        n += 1;
        return <PreppedSpellCast key={psc.id + n} value={psc} />;
      })}
    </>
  );
}

const PreppedSpell = ({ spell }: { spell: ISpell }) => {
  const setModalType = useSetRecoilState(modalTypeState);
  const setSelection = useSetRecoilState(selectionState);
  const formattedSpellName = spell.name.replace(/\W/g, "");
  const buttonAndSpellClass = "spellButtons " + formattedSpellName;
  function displayInfo(spell: ISpell) {
    setModalType("CastPrepped");
    setSelection(spell);
  }
  return (
    <button className={buttonAndSpellClass} onClick={() => displayInfo(spell)}>
      {spell.name}
    </button>
  );
};

const PreppedSpells = ({
  preppedSpells,
  level,
}: {
  preppedSpells: Array<ISpell[]>;
  level: number;
}) => {
  let n = 0;
  return (
    <>
      {preppedSpells[level].map((ps) => {
        n += 1;
        return <PreppedSpell key={ps.id + n} spell={ps} />;
      })}
    </>
  );
};

const KnownSpell = ({
  spellRef,
  innate,
}: {
  spellRef: string;
  innate: boolean;
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
  level: keyof ICharacter["magic"]["spellRefs"];
}) => {
  const innateSpells = character.magic.spellRefs.filter(
    (sr: ISpellRef) => sr.innate === true
  );
  const spellbook = character.magic.spellRefs.filter(
    (sr: ISpellRef) => sr.innate === false
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
  character: ICharacter;
  primaryModifier: number;
  level: string;
  levelNum: number;
  innateSpellsCast: Array<string[]>;
  preppedSpells: Array<string[]>;
  preppedSpellsCast: Array<string[]>;
  getDifficultyClass: (levelNum: number) => number;
  innate: boolean;
}) => {
  const {
    level,
    levelNum,
    character,
    primaryModifier,
    innateSpellsCast,
    preppedSpells,
    preppedSpellsCast,
    getDifficultyClass,
    innate,
  } = props;
  const levelRoman = romans[levelNum - 1];
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
            <PreppedSpells preppedSpells={preppedSpells} level={levelNum} />
            <PreppedSpellsCast
              preppedSpellsCast={preppedSpellsCast}
              level={levelNum}
            />
          </p>
          <hr className="shortHR" />
        </>
      ) : null}
      <p className="spellList">
        <KnownSpells level={levelNum} character={character} innate={innate} />
      </p>
      <hr />
    </div>
  );
};

const Spells = ({ innate }: { innate: boolean }) => {
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
    <>
      {innate === true ? (
        <button
          className="defaultButton prepSpellsButton"
          onClick={() => setMainContent("Prep")}
        >
          <i className="fas fa-book"></i>
          <span>PREP</span>
        </button>
      ) : (
        <button
          id="returnToSpells"
          className="backButton returnToSpells"
          onClick={() => setMainContent("Spells")}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
      )}
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
                <PreppedSpells level={0} preppedSpells={preppedSpells} />
                <PreppedSpellsCast
                  level={0}
                  preppedSpellsCast={preppedSpellsCast}
                />
              </p>
              <hr className="shortHR" />
            </>
          ) : null}
          <p className="spellList">
            <KnownSpells level={0} character={character} innate={innate} />
          </p>
          <hr />
        </div>
        {romans.map((_, i) => (
          <SpellCodeBlock
            key={i + 1}
            levelNum={i + 1}
            level={numStrings[i]}
            character={character}
            primaryModifier={primaryModifier}
            innateSpellsCast={innateSpellsCast}
            preppedSpells={preppedSpells}
            preppedSpellsCast={preppedSpellsCast}
            getDifficultyClass={getDifficultyClass}
            innate={innate}
          />
        ))}
      </div>
    </>
  );
};

export default Spells;
