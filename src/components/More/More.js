import React from "react";
import { useSetRecoilState } from "recoil";

import { mainContentState } from "../../recoilState";

import "./More.css";

const More = (props) => {
  const setMainContent = useSetRecoilState(mainContentState);
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
          onClick={() => setMainContent("EditMagic")}
        >
          Magic
        </button>
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
