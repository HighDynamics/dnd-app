import React, { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { mutate } from "swr";

import { characterState, mainContentState } from "../../../recoilState";
import { clone } from "../../../utilities/utilities";

import SkillForm from "./SkillForm";
import "./EditSkills.css";

const EditSkills = () => {
  const [character] = useRecoilState(characterState);
  const setMainContent = useSetRecoilState(mainContentState);
  const [newSkillForm, setNewSkillForm] = useState(false);

  const persistCharacter = (updatedCharacter) => {
    fetch("/api/characters/1", {
      method: "PUT",
      body: JSON.stringify(updatedCharacter),
    }).then(() => {
      mutate("/api/characters", { characters: [updatedCharacter] });
    });
  };

  const handleCreateSkill = (newSkill) => {
    let updatedCharacter = clone(character);

    updatedCharacter.skills.push(newSkill);

    persistCharacter(updatedCharacter);
    setNewSkillForm(!newSkillForm);
  };

  const handleUpdateSkill = (updatedSkill, originalSkill) => {
    let updatedCharacter = clone(character);

    const index = character.skills.indexOf(originalSkill);
    updatedCharacter.skills[index] = updatedSkill;

    persistCharacter(updatedCharacter);
  };

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
      {newSkillForm && <SkillForm onSubmit={handleCreateSkill} />}

      {character.skills.map((skill) => (
        <SkillForm
          key={skill.name}
          initialSkill={skill}
          onSubmit={handleUpdateSkill}
        />
      ))}
    </>
  );
};
export default EditSkills;
