import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { slaState, selectionState } from "../../../recoilState";
import { clone } from "../../../utilities/utilities";

const SLAInfo = (props) => {
  const [usedSLAs, setUsedSLAs] = useRecoilState(slaState);
  const selection = useRecoilValue(selectionState);
  function checkForMatch(name) {
    return usedSLAs.findIndex((item) => {
      return item.name === name;
    });
  }
  function logUsedSLA(name) {
    const newArray = clone(usedSLAs);
    const indexOfMatch = checkForMatch(name);
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
      <button onClick={() => logUsedSLA(selection)}>Use SLA</button>
    </>
  );
};
export default SLAInfo;
