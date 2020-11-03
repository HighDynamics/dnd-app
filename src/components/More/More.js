import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

import { mainContentState } from "../../recoilState";

import "./More.css";

const More = (props) => {
  const setMainContent = useSetRecoilState(mainContentState);
  const [magicToggle, setMagicToggle] = useState(false);
  return (
    <>
      <h2 className="editHeading">Edit</h2>
      <div className="buttonList">
        <button
          className="moreButton"
          onClick={() => setMainContent("EditSkills")}
        >
          Skills
        </button>
        <button
          className="moreButton"
          onClick={() => setMainContent("EditAbilities")}
        >
          Abilities
        </button>
        <button
          className="moreButton"
          onClick={() => setMagicToggle(!magicToggle)}
        >
          Magic
        </button>
        {magicToggle && (
          <div className="subButtonContainer">
            <button
              className="subButton"
              onClick={() => setMainContent("EditSpells")}
            >
              Spells
            </button>
            <button
              className="subButton"
              onClick={() => setMainContent("EditSLAs")}
            >
              SLAs
            </button>
          </div>
        )}
        <button
          className="moreButton"
          onClick={() => setMainContent("EditAttacks")}
        >
          Attacks
        </button>
        <button
          className="moreButton"
          onClick={() => setMainContent("EditItems")}
        >
          Items
        </button>
        <button
          className="moreButton"
          onClick={() => setMainContent("EditCharacter")}
        >
          Character
        </button>
      </div>
      <hr></hr>
      <button
        className="moreButton"
        onClick={() => setMainContent("AddCharacter")}
      >
        Add Character
      </button>
    </>
  );
};
export default More;
