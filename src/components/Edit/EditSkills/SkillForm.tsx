import { useState } from "react";

import "./SkillForm.css";

const blankSkill: ICharacter.Skill = {
  classSkill: false,
  ability: "strength",
  ranks: 0,
  miscModifier: 0,
  display: true,
  armorCheck: false,
  name: "",
};

const SkillForm = ({
  initialSkill = blankSkill,
  onSubmit,
}: {
  initialSkill?: ICharacter.Skill;
  onSubmit: (updated: ICharacter.Skill, original: ICharacter.Skill) => any;
}) => {
  const [classSkill, setClassSkill] = useState(initialSkill.classSkill);
  const [ability, setAbility] = useState(initialSkill.ability);
  const [ranks, setRanks] = useState(initialSkill.ranks);
  const [miscModifier, setMiscModifier] = useState(initialSkill.miscModifier);
  const [display, setDisplay] = useState(initialSkill.display);
  const [armorCheck, setArmorCheck] = useState(initialSkill.armorCheck);
  const [name, setName] = useState(initialSkill.name);

  function handleChange(e: React.ChangeEvent) {
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
            className="legendHeader skillLegendHeader"
            name="skillName"
            type="text"
            value={name}
            placeholder="New Skill Name"
            onChange={handleChange}
          />

          <div className="skillDetailContainer">
            <div className="skillDetailItem">
              <label>
                Ability:{" "}
                <select
                  name="ability"
                  className="textInput skillSelect"
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
              </label>
            </div>

            <div className="skillDetailItem">
              <label>
                Class Skill:
                <input
                  type="checkbox"
                  name="classSkill"
                  checked={classSkill}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="skillDetailItem">
              <label>
                Ranks:{" "}
                <input
                  type="number"
                  name="ranks"
                  min="0"
                  className="numberInput twoDigit skillNumberInput"
                  value={ranks}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="skillDetailItem">
              <label>
                Armor Check:{" "}
                <input
                  type="checkbox"
                  name="armorCheck"
                  checked={armorCheck}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="skillDetailItem">
              <label>
                Misc Modifier:{" "}
                <input
                  type="number"
                  name="miscModifier"
                  min="0"
                  className="numberInput twoDigit skillNumberInput"
                  value={miscModifier}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="skillDetailItem">
              <label>
                Display:{" "}
                <input
                  type="checkbox"
                  name="display"
                  checked={display}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>

          <div className="updateCharacter">
            <input
              className="updateCharacterButton defaultButton"
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
