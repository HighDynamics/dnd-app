import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { diceRollState, characterState } from "../../recoilState.js";
import { rollDice } from "../dnd.js";
import "./Skills.css";

const SkillsListItem = (props) => {
  const character = props.character;
  const setRollResult = useSetRecoilState(diceRollState);
  // store props to make code simpler
  const skills = props.skills;
  // replace underscore with space and store
  let formattedSkill = skills[0].replace(/_/g, " ");
  // update variable replacing (Know)ledge with :
  formattedSkill = formattedSkill.replace(/ledge/g, ":");
  // store skill points separately
  const skillPoints = skills[1];
  // confirm class skill to add css class
  function findClassSkills(skill) {
    if (character.classSkills.hasOwnProperty(skill)) {
      return "classSkills";
    } else {
      return "";
    }
  }
  return (
    <button
      className={`skills ${findClassSkills(skills[0])} ${skills[0]}`}
      onClick={() => setRollResult(rollDice(20, skillPoints, formattedSkill))}
    >
      {formattedSkill} | <span className="skillPoints">{skillPoints}</span>
    </button>
  );
};
const Skills = (props) => {
  const character = useRecoilValue(characterState);
  //put character's skills into array as [key, value]
  let skillsArray = Object.keys(character.skills).map((skill) => {
    return [skill, character.skills[skill]];
  });
  // put character's class skills into array as [key, value]
  let classSkillsArray = Object.keys(character.classSkills).map((skill) => {
    return [skill, character.classSkills[skill]];
  });
  // combine both arrays into new array, sorted alphabetically
  let allSkills = [...skillsArray, ...classSkillsArray].sort();
  // pass skills to child component
  const skillsBlock = allSkills.map((s) => (
    <SkillsListItem key={s} skills={s} character={character} />
  ));
  return (
    <>
      <h1 id="skillsHeader">Skills</h1>
      <ul id="skillsListWrapper">
        <div id="skillsWrapper">{skillsBlock}</div>
      </ul>
    </>
  );
};

export default Skills;
