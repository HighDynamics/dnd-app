import React from "react";
import { useSetRecoilState } from "recoil";

import { mainContentState } from "../../../recoilState";

const EditSkills = (props) => {
  const setMainContent = useSetRecoilState(mainContentState);
  return (
    <>
      <button onClick={() => setMainContent("More")}>
        {" "}
        <i className="fas fa-arrow-left"></i>
      </button>
    </>
  );
};
export default EditSkills;
