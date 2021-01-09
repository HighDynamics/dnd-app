import { useRecoilState, useRecoilValue } from "recoil";

import {
  slaState,
  selectionState,
  compendiumState,
} from "../../../recoilState";
import { clone, displayCompendiumInfo } from "../../../utilities/utilities";
import "./SLAInfo.css";

const SLAInfo = (props) => {
  const [usedSLAs, setUsedSLAs] = useRecoilState(slaState);
  const selection = useRecoilValue(selectionState);
  const compendium = useRecoilValue(compendiumState);
  const matchedSpell = compendium.spells.find(({ name }) => name === selection);
  function checkForUseState(name) {
    return usedSLAs.findIndex((item) => {
      return item.name === name;
    });
  }
  function logUsedSLA(name) {
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
  }

  return (
    <>
      <button className="useSLAButton" onClick={() => logUsedSLA(selection)}>
        Use SLA
      </button>
      {matchedSpell !== undefined && (
        <div>{displayCompendiumInfo(matchedSpell)}</div>
      )}
    </>
  );
};
export default SLAInfo;
