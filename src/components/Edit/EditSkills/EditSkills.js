import React, { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";

import { characterState, mainContentState } from "../../../recoilState";
import EditSkillForm from "./EditSkillForm";
import NewSkillForm from "./NewSkillForm";
import "./EditSkills.css";

const EditSkills = () => {
  const [character] = useRecoilState(characterState);
  const setMainContent = useSetRecoilState(mainContentState);
  const [newSkillForm, setNewSkillForm] = useState(false);
  const skillForm = character.skills.map((s, i) => (
    <EditSkillForm key={s.name} skill={s} character={character} />
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
          newSkillForm={newSkillForm}
          setNewSkillForm={setNewSkillForm}
        />
      )}
      {skillForm}
    </>
  );
};
export default EditSkills;
