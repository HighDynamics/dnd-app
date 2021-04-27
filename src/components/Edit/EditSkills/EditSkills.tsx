import { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";

import {
  characterState,
  mainContentState,
  confirmationTypeState,
  ConfirmationType,
} from "../../../recoilState";
import { clone, persistCharacter } from "../../../utilities/utilities";

import SkillForm from "./SkillForm";
import "./EditSkills.css";

const EditSkills = () => {
  const [character] = useRecoilState(characterState);
  const setMainContent = useSetRecoilState(mainContentState);
  const setConfirmationType = useSetRecoilState(confirmationTypeState);
  const [newSkillForm, setNewSkillForm] = useState(false);

  const renderConfirmation = (confirmationType: ConfirmationType) => {
    setConfirmationType(confirmationType);
    setTimeout(() => setConfirmationType("off"), 3000);
  };

  const handleCreateSkill = (newSkill: ICharacter.Skill) => {
    let updatedCharacter = clone(character);

    updatedCharacter.skills.push(newSkill);

    persistCharacter(updatedCharacter);
    setNewSkillForm(!newSkillForm);
    renderConfirmation("addSkill");
  };

  const handleUpdateSkill = (
    updatedSkill: ICharacter.Skill,
    originalSkill: ICharacter.Skill
  ) => {
    let updatedCharacter = clone(character);

    const index = character.skills.indexOf(originalSkill);
    updatedCharacter.skills[index] = updatedSkill;

    persistCharacter(updatedCharacter);
    renderConfirmation("updateSkill");
  };

  return (
    <>
      <button className="backButton" onClick={() => setMainContent("More")}>
        <i className="fas fa-arrow-left"></i>
      </button>
      <button
        className="defaultButton newSkillButton"
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
