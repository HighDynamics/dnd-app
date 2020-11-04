import React, { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";

import { characterState, mainContentState } from "../../../recoilState";
import EditSkillForm from "./EditSkillForm";
import NewSkillForm from "./NewSkillForm";
import "./EditSkills.css";

const EditSkills = (props) => {
  const [character, setCharacter] = useRecoilState(characterState);
  const setMainContent = useSetRecoilState(mainContentState);
  const [newSkillForm, setNewSkillForm] = useState(false);
  const skillForm = character.skills.map((s, i) => (
    <EditSkillForm
      key={s.name}
      skill={s}
      character={character}
      setCharacter={setCharacter}
    />
  ));
  return (
    <>
      <button className="back" onClick={() => setMainContent("More")}>
        <i className="fas fa-arrow-left"></i>
      </button>
      <button
        className="newSkillButton"
        onClick={() => setNewSkillForm(!newSkillForm)}
      >
        Add New Skill
      </button>
      {newSkillForm && (
        <NewSkillForm
          character={character}
          setCharacter={setCharacter}
          newSkillForm={newSkillForm}
          setNewSkillForm={setNewSkillForm}
        />
      )}
      {skillForm}
    </>
  );
};
export default EditSkills;
