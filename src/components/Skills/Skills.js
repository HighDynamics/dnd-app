import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { diceRollState, characterState } from "../../recoilState.js";
import { roll20, getAbilityMod } from "../../utilities/utilities";
import "./Skills.css";

const SkillsListItem = (props) => {
  const { character, skill } = props;
  const abilityMod = getAbilityMod(character);
  const setRollResult = useSetRecoilState(diceRollState);

  // update variable replacing (Know)ledge with :
  let formattedSkill = skill.name.replace(/ledge/g, ":");

  // store skill points separately, add modifier
  const skillPoints =
    skill.ranks + skill.miscModifier + abilityMod(skill.ability);

  // confirm class skill to add css class
  function renderClassSkillsClassNames(skill) {
    return (
      skill.name.replace(/ /g, "_") + (skill.classSkill ? " classSkills" : "")
    );
  }
  return (
    <button
      className={`skills ${renderClassSkillsClassNames(skill)}`}
      onClick={() => setRollResult(roll20(skillPoints, formattedSkill))}
    >
      <i className="fas fa-dice-d20 skillDice" style={{ float: "left" }}></i>{" "}
      {formattedSkill} | <span className="skillPoints">{skillPoints}</span>{" "}
      <i className="fas fa-dice-d20 skillDice" style={{ float: "right" }}></i>
    </button>
  );
};

const Skills = () => {
  const character = useRecoilValue(characterState);
  // pass skills to child component
  const skillsBlock = character.skills
    .filter((skill) => skill.display)
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map((s) => (
      <SkillsListItem key={s.name} skill={s} character={character} />
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
