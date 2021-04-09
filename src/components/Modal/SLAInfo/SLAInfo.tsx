import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import {
  slaState,
  selectionState,
  spellCompendiumState,
  modalTypeState,
} from "../../../recoilState";
import { clone, displayCompendiumInfo } from "../../../utilities/utilities";
import "./SLAInfo.css";

const SLAInfo = () => {
  const [usedSLAs, setUsedSLAs] = useRecoilState(slaState);
  const selection = useRecoilValue(selectionState);
  const spellCompendium = useRecoilValue(spellCompendiumState);
  const setModalType = useSetRecoilState(modalTypeState);
  const matchedSpell = spellCompendium.spells.find(
    ({ name }) => name === selection.name
  );
  function checkForUseState(name: string) {
    return usedSLAs.findIndex((item) => {
      return item.name === name;
    });
  }
  function logUsedSLA(name: string) {
    const newArray = clone(usedSLAs);
    const indexOfMatch = checkForUseState(name);
    if (indexOfMatch < 0) {
      newArray.push({ name: name, uses: 1 });
      setUsedSLAs(newArray);
    }
    if (indexOfMatch >= 0) {
      newArray[indexOfMatch].uses += 1;
      setUsedSLAs(newArray);
    }
    setModalType("Off");
  }

  return (
    <>
      <button
        className="useSLAButton"
        onClick={() => logUsedSLA(selection.name)}
      >
        Use SLA
      </button>
      {matchedSpell !== undefined && (
        <div>{displayCompendiumInfo(matchedSpell)}</div>
      )}
    </>
  );
};
export default SLAInfo;
