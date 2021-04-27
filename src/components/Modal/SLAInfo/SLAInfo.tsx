import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import {
  slaState,
  selectionState,
  spellCompendiumState,
  modalTypeState,
  confirmationTypeState,
  ConfirmationType,
} from "../../../recoilState";
import { clone, displayCompendiumInfo } from "../../../utilities/utilities";
import "./SLAInfo.css";

const SLAInfo = () => {
  const [usedSLAs, setUsedSLAs] = useRecoilState(slaState);
  const selection = useRecoilValue(selectionState);
  const spellCompendium = useRecoilValue(spellCompendiumState);
  const setModalType = useSetRecoilState(modalTypeState);
  const setConfirmationType = useSetRecoilState(confirmationTypeState);
  const matchedSpell = spellCompendium.spells.find(
    ({ name }) => name === selection.name
  );
  function checkForUseState(name: string) {
    return usedSLAs.findIndex((item) => {
      return item.name === name;
    });
  }

  const renderConfirmation = (confirmationType: ConfirmationType) => {
    setConfirmationType(confirmationType);
    setTimeout(() => setConfirmationType("off"), 3000);
  };

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
    renderConfirmation("castSpell");
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
