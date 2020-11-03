import React, { useState } from "react";
import { mutate } from "swr";

import { clone } from "../../../utilities/utilities";

const NewSkillForm = (props) => {
  const { character, setCharacter, newSkillForm, setNewSkillForm } = props;
  const [isClassSkill, setIsClassSkill] = useState(false);
  const [ability, setAbility] = useState("strength");
  const [ranks, setRanks] = useState(0);
  const [miscModifier, setMiscModifier] = useState(0);
  const [display, setDisplay] = useState(true);
  const [armorCheck, setArmorCheck] = useState(false);
  const [newName, setNewName] = useState("new skill name");
  const handleChange = (e) => {
    switch (e.target.name) {
      case "ability":
        setAbility(e.target.value);
        break;
      case "classSkill":
        setIsClassSkill(!isClassSkill);
        break;
      case "display":
        setDisplay(!display);
        break;
      case "ranks":
        setRanks(Number(e.target.value));
        break;
      case "miscModifier":
        setMiscModifier(Number(e.target.value));
        break;
      case "armorCheck":
        setArmorCheck(!armorCheck);
        break;
      case "newSkillName":
        setNewName(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedCharacter = clone(character);
    const newIndex = updatedCharacter.skills.length;
    updatedCharacter.skills[newIndex] = {
      name: newName,
      ability: ability,
      ranks: ranks,
      miscModifier: miscModifier,
      classSkill: isClassSkill,
      armorCheck: armorCheck,
      display: display,
    };
    setCharacter(updatedCharacter);
    fetch("/api/characters/1", {
      method: "POST",
      body: JSON.stringify(updatedCharacter),
    }).then(() => {
      mutate("/api/characters");
    });
    setNewSkillForm(!newSkillForm);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className="formItemsContainer">
          <input
            className="newSkillName"
            name="newSkillName"
            type="text"
            value={newName}
            onChange={handleChange}
          />
          <div className="skillDetailContainer">
            <div className="skillDetailItem">
              <label htmlFor="ability">Ability:</label>
              <select
                name="ability"
                size="1"
                value={ability}
                onChange={handleChange}
              >
                <option value="strength">strength</option>
                <option value="constitution">constitution</option>
                <option value="dexterity">dexterity</option>
                <option value="intelligence">intelligence</option>
                <option value="wisdom">wisdom</option>
                <option value="charisma">charisma</option>
              </select>
            </div>
            <div className="skillDetailItem">
              <label htmlFor="classSkill">Class Skill:</label>
              <input
                type="checkbox"
                name="classSkill"
                defaultChecked={isClassSkill}
                onChange={handleChange}
              />
            </div>
            <div className="skillDetailItem">
              <label htmlFor="ranks">Ranks:</label>
              <input
                type="number"
                name="ranks"
                min="0"
                className="skillNumberInput"
                value={ranks}
                onChange={handleChange}
              />
            </div>
            <div className="skillDetailItem">
              <label htmlFor="armorCheck">Armor Check:</label>
              <input
                type="checkbox"
                name="armorCheck"
                defaultChecked={armorCheck}
                onChange={handleChange}
              />
            </div>
            <div className="skillDetailItem">
              <label htmlFor="miscModifier">Misc Modifier:</label>
              <input
                type="number"
                name="miscModifier"
                min="0"
                className="skillNumberInput"
                value={miscModifier}
                onChange={handleChange}
              />
            </div>
            <div className="skillDetailItem">
              <label htmlFor="display">Display:</label>
              <input
                type="checkbox"
                name="display"
                value="display"
                defaultChecked={display}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="updateCharacter">
            <input
              className="updateCharacterButton"
              type="submit"
              value="Update Character"
            />
          </div>
        </fieldset>
      </form>
    </>
  );
};
export default NewSkillForm;
