import { useSetRecoilState } from "recoil";

import { mainContentState } from "../../recoilState";

import "./More.css";

const More = () => {
  const setMainContent = useSetRecoilState(mainContentState);
  return (
    <>
      <h2 className="editHeading">Edit</h2>
      <div className="buttonList">
        <button
          className="moreButton"
          onClick={() => setMainContent("EditCore")}
        >
          Core
        </button>
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
          onClick={() => setMainContent("EditItems")}
        >
          Items
        </button>
      </div>
      <hr></hr>
      <div className="buttonList">
        <button
          className="moreButton"
          onClick={() => setMainContent("AddCharacter")}
        >
          Add Character
        </button>
        <button
          className="moreButton"
          onClick={() => setMainContent("ChangeCharacter")}
        >
          Change Character
        </button>
      </div>
    </>
  );
};
export default More;
