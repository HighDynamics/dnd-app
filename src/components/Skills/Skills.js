import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { mutate } from "swr";

import { diceRollState, characterState } from "../../recoilState.js";
import { roll20, getAbilityMod } from "../../utilities/utilities";
import "./Skills.css";

const SkillsListItem = (props) => {
  const { character, skill } = props;
  const abilityMod = getAbilityMod(character);
  const setRollResult = useSetRecoilState(diceRollState);
  // replace underscore with space and store
  let formattedSkill = skill[0].replace(/_/g, " ");
  // update variable replacing (Know)ledge with :
  formattedSkill = formattedSkill.replace(/ledge/g, ":");
  // store skill points separately, add modifier
  const skillPoints = skill[1] + abilityMod(character.skills[skill[0]].ability);
  // confirm class skill to add css class
  function renderClassSkillsClassName(skill) {
    if (character.skills[skill].classSkill) {
      return "classSkills";
    } else {
      return "";
    }
  }

  const handleClick = () => {
    if (formattedSkill === "Intimidate") {
      // Give character intimidating name
      fetch("/api/characters/1", {
        method: "PATCH",
        body: JSON.stringify({ name: "Arn Hatchet" }),
      }).then(() => {
        mutate("/api/characters");
      });
    }
    setRollResult(roll20(skillPoints, formattedSkill));
  };
  return (
    <button
      className={`skills ${renderClassSkillsClassName(skill[0])} ${skill[0]}`}
      onClick={handleClick}
    >
      <i className="fas fa-dice-d20 skillDice" style={{ float: "left" }}></i>{" "}
      {formattedSkill} | <span className="skillPoints">{skillPoints}</span>{" "}
      <i className="fas fa-dice-d20 skillDice" style={{ float: "right" }}></i>
    </button>
  );
};
const Skills = (props) => {
  const character = useRecoilValue(characterState);
  //store character's skills in [key, value] array
  let skillArray = Object.keys(character.skills)
    .filter((skill) => {
      return character.skills[skill].display;
    })
    .map((skill) => {
      const skillKeyValue = [
        skill,
        character.skills[skill].ranks + character.skills[skill].miscModifier,
      ];
      return skillKeyValue;
    });
  // pass skills to child component
  const skillsBlock = skillArray.map((s) => (
    <SkillsListItem key={s} skill={s} character={character} />
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
