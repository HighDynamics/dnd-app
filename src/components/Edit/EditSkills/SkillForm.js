import React, { useState } from "react";

const blankSkill = {
  classSkill: false,
  ability: "strength",
  ranks: 0,
  miscModifier: 0,
  display: true,
  armorCheck: false,
  name: "",
};

const SkillForm = ({ initialSkill = blankSkill, onSubmit }) => {
  const [classSkill, setClassSkill] = useState(initialSkill.classSkill);
  const [ability, setAbility] = useState(initialSkill.ability);
  const [ranks, setRanks] = useState(initialSkill.ranks);
  const [miscModifier, setMiscModifier] = useState(initialSkill.miscModifier);
  const [display, setDisplay] = useState(initialSkill.display);
  const [armorCheck, setArmorCheck] = useState(initialSkill.armorCheck);
  const [name, setName] = useState(initialSkill.name);

  function handleChange(e) {
    switch (e.target.name) {
      case "ability":
        setAbility(e.target.value);
        break;
      case "classSkill":
        setClassSkill(!classSkill);
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
      case "skillName":
        setName(e.target.value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(
      {
        name,
        ability,
        ranks,
        miscModifier,
        classSkill,
        armorCheck,
        display,
      },
      initialSkill
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className="formItemsContainer">
          <input
            className="skillName"
            name="skillName"
            type="text"
            value={name}
            placeholder="New Skill Name"
            onChange={handleChange}
          />

          <div className="skillDetailContainer">
            <div className="skillDetailItem">
              <label htmlFor="ability">Ability:</label>
              <select name="ability" value={ability} onChange={handleChange}>
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
                checked={classSkill}
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
                checked={armorCheck}
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
                checked={display}
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

export default SkillForm;
