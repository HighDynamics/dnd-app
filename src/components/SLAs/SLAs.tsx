import { useSetRecoilState, useRecoilValue } from "recoil";

import {
  modalTypeState,
  characterState,
  selectionState,
  slaState,
  spellCompendiumState,
  primaryModifierState,
} from "../../recoilState";
import type { ModalType } from "../../recoilState";

import { getInfoById } from "../../utilities/utilities";

import "./SLAs.css";

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

const KnownSLAs = ({ slaRef }: { slaRef: ISLARef }) => {
  const setModalType = useSetRecoilState(modalTypeState);
  const setSelection = useSetRecoilState(selectionState);
  const spellCompendium = useRecoilValue(spellCompendiumState);
  const usedSLAs = useRecoilValue(slaState);
  const getSlaInfoById = getInfoById(spellCompendium);
  const sla = getSlaInfoById(slaRef.id);
  const formattedName = sla.name.replace(/_/g, " ");
  const buttonAndSpellClass = "spellButtons " + sla.name;
  function displayInfo(modalDestination: ModalType) {
    setSelection(sla);
    setModalType(modalDestination);
  }
  function checkForMatch(name: string) {
    return usedSLAs.findIndex((item) => {
      return item.name === name;
    });
  }
  function displayUsesLeft() {
    let indexOfMatch = checkForMatch(formattedName);
    if (indexOfMatch >= 0) {
      const timesUsed = usedSLAs[indexOfMatch].uses;
      return slaRef.uses - timesUsed;
    } else {
      return slaRef.uses;
    }
  }
  return (
    <button className={buttonAndSpellClass} onClick={() => displayInfo("SLA")}>
      {sla.name} {displayUsesLeft()}/{slaRef.frequency}
    </button>
  );
};
const SLACodeBlock = (props: {
  levelNum: number;
  character: ICharacter;
  displaySLAs: (level: number) => React.ReactNode;
  getDifficultyClass: (levelNum: number) => number;
}) => {
  const { levelNum, displaySLAs, getDifficultyClass } = props;
  const levelRoman = romans[levelNum - 1];

  return (
    <>
      <div className="spellItems">
        <div className="spellLevelWrapper">
          <h2 className="spellLevelHeader">
            Level {levelRoman} (DC {getDifficultyClass(levelNum)})
          </h2>
        </div>
        <p className="spellList">{displaySLAs(levelNum)}</p>
        <hr />
      </div>
    </>
  );
};

const SLAs = () => {
  const character = useRecoilValue(characterState);
  const primaryModifier = useRecoilValue(primaryModifierState);
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
  function displaySLAs(level: number) {
    const slas = Object.values(character.magic.slaRefs)
      .filter((ref) => ref.level === level)
      .map((ref) => <KnownSLAs key={ref.id} slaRef={ref} />);
    return slas;
  }
  function getDifficultyClass(levelNum: number) {
    return 10 + levelNum + primaryModifier;
  }

  return (
    <div>
      <div className="slasContainer">
        <div className="spellItems">
          <div className="spellLevelWrapper">
            <h2 className="spellLevelHeader">
              {casterType()} (DC {getDifficultyClass(0)})
            </h2>
          </div>
          <p className="spellList">{displaySLAs(0)}</p>
          <hr />
        </div>
        {romans.map((_, i) => (
          <SLACodeBlock
            key={i + 1}
            levelNum={i + 1}
            character={character}
            displaySLAs={displaySLAs}
            getDifficultyClass={getDifficultyClass}
          />
        ))}
      </div>
    </div>
  );
};

export default SLAs;
