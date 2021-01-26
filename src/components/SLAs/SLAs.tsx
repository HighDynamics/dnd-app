import { useSetRecoilState, useRecoilValue } from "recoil";

import {
  modalTypeState,
  characterState,
  selectionState,
  slaState,
} from "../../recoilState";
import type { ModalType } from "../../recoilState";

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

const KnownSLAs = ({ slaRef }) => {
  const setModalType = useSetRecoilState(modalTypeState);
  const setSelection = useSetRecoilState(selectionState);
  const usedSLAs = useRecoilValue(slaState);
  const formattedName = name.replace(/_/g, " ");
  const buttonAndSpellClass = "spellButtons " + name;
  function displayInfo(modalDestination: ModalType) {
    setSelection(name);
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
      return uses - timesUsed;
    } else {
      return uses;
    }
  }
  return (
    <button className={buttonAndSpellClass} onClick={() => displayInfo("SLA")}>
      {formattedName} {displayUsesLeft()}/{frequency}
    </button>
  );
};
const SLACodeBlock = (props: {
  levelNum: number;
  character: ICharacter;
  displaySLAs: (level: typeof numStrings[number]) => React.ReactNode;
}) => {
  const { levelNum, character, displaySLAs } = props;
  const levelRoman = romans[levelNum - 1];
  const level = numStrings[levelNum - 1];

  return (
    <>
      {Array.isArray(character.magic.slas[level]) ? (
        <div className="spellItems">
          <div className="spellLevelWrapper">
            <h2 className="spellLevelHeader">Level {levelRoman}</h2>
          </div>
          <p className="spellList">{displaySLAs(level)}</p>
          <hr />
        </div>
      ) : null}
    </>
  );
};

const SLAs = () => {
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
  function displaySLAs(level: keyof typeof character.magic.slas) {
    const slas = Object.values(character.magic.sla_refs).map((s) => (
      <KnownSLAs key={s.name} slaRef={s} />
    ));
    return slas;
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
        {romans.map((_, i) => (
          <SLACodeBlock
            key={i + 1}
            levelNum={i + 1}
            character={character}
            displaySLAs={displaySLAs}
          />
        ))}
      </div>
    </div>
  );
};

export default SLAs;
