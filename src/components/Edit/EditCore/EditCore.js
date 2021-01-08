import React, { useState } from "react";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";

import {
  mainContentState,
  characterState,
  updatedCharacterState,
  primaryModifierState,
} from "../../../recoilState";

import { clone, persistCharacter } from "../../../utilities/utilities";
import NameForm from "./NameForm";
import ClassForm from "./ClassForm";
import TypeForm from "./TypeForm";
import SizeForm from "./SizeForm";
import SpeedForm from "./SpeedForm";
import HitPointsForm from "./HitPointsForm";
import ArmorClassForm from "./ArmorClassForm";
import SavesForm from "./SavesForm";
import DefenseForm from "./DefenseForm";
import AbilityScoreForm from "./AbilityScoreForm";

import "./EditCore.css";

const DefenseFormParent = ({ character }) => {
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const [spellResistanceValue, setSpellResistanceValue] = useState(
    character.defense.spellResistance
  );
  const editedCharacter = clone(updatedCharacter);
  const fieldPath = editedCharacter.defense;

  const handleChange = (setterFunction) => (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const type = e.target.type;
    setterFunction(value);
    switch (e.target.name) {
      case "spellResistance":
        fieldPath[field] = Number(value);
        break;
      case "amount":
        fieldPath.damageReduction.amount = Number(value);
        break;
      case "weakness":
        fieldPath.damageReduction.weakness = value;
        break;
      case "acid":
        if (e.target.checked === true) {
          fieldPath.energyResistance.acid = null;
        } else {
          fieldPath.energyResistance.acid = Number(value);
        }
        break;
      case "cold":
        fieldPath.energyResistance.cold = Number(value);
        break;
      case "electricity":
        fieldPath.energyResistance.electricity = Number(value);
        break;
      case "fire":
        fieldPath.energyResistance.fire = Number(value);
        break;
      case "sonic":
        fieldPath.energyResistance.sonic = Number(value);
        break;
      default:
        break;
    }
    setUpdatedCharacter(editedCharacter);
  };

  const handleSpellResistanceChange = handleChange(setSpellResistanceValue);

  const damageReduction = Object.entries(character.defense.damageReduction).map(
    ([field, value]) => (
      <li key={field}>
        <DefenseForm
          field={field}
          value={value}
          handleEvent={handleChange}
          fieldPath="damageReduction"
        />
      </li>
    )
  );
  const energyResistance = Object.entries(
    character.defense.energyResistance
  ).map(([field, value]) => {
    const renderedValue = value === null ? "immune" : value;
    return (
      <li key={field}>
        <DefenseForm
          field={field}
          value={renderedValue}
          handleEvent={handleChange}
          fieldPath="energyResistance"
        />
      </li>
    );
  });

  return (
    <>
      <fieldset>
        <legend>Defense</legend>
        <div className="defenseContainer">
          <div className="defenseItem">
            Spell Resistance{" "}
            <input
              className="numberInput twoDigit"
              type="number"
              name="spellResistance"
              value={spellResistanceValue}
              onChange={handleSpellResistanceChange}
            />
          </div>
          <div className="defenseItem">
            Damage Reduction: <ul>{damageReduction}</ul>
          </div>
          <div className="defenseItem">
            Energy Resistance: <ul>{energyResistance}</ul>
          </div>
        </div>
      </fieldset>
    </>
  );
};

const SavesFormParent = ({ character }) => {
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const editedCharacter = clone(updatedCharacter);
  const fieldPath = editedCharacter.defense.saves;
  const handleChange = (setterFunction, fieldParent) => (e) => {
    const value = e.target.value;
    setterFunction(value);
    switch (e.target.name) {
      case "base":
        fieldPath[fieldParent].base = Number(value);
        break;
      case "magic":
        fieldPath[fieldParent].magic = Number(value);
        break;
      case "misc":
        fieldPath[fieldParent].misc = Number(value);
        break;
      default:
        break;
    }
    setUpdatedCharacter(editedCharacter);
  };

  const fortSave = Object.entries(character.defense.saves.fortitude).map(
    ([field, value]) => (
      <li key={field + "Fortitude"}>
        <SavesForm
          field={field}
          value={value}
          handleEvent={handleChange}
          fieldParent="fortitude"
        />
      </li>
    )
  );
  const reflexSave = Object.entries(character.defense.saves.reflex).map(
    ([field, value]) => (
      <li key={field + "Reflex"}>
        <SavesForm
          field={field}
          value={value}
          handleEvent={handleChange}
          fieldParent="reflex"
        />
      </li>
    )
  );
  const willSave = Object.entries(character.defense.saves.will).map(
    ([field, value]) => (
      <li key={field + "Will"}>
        <SavesForm
          field={field}
          value={value}
          handleEvent={handleChange}
          fieldParent="will"
        />
      </li>
    )
  );
  return (
    <fieldset>
      <legend>Saves</legend>
      <div className="savesContainer">
        <div className="savesItem">
          Fortitude: <ul>{fortSave}</ul>
        </div>
        <div className="savesItem">
          Reflex: <ul>{reflexSave}</ul>
        </div>
        <div className="savesItem">
          Will: <ul>{willSave}</ul>
        </div>
      </div>
    </fieldset>
  );
};

const ArmorClassFormParent = ({ character }) => {
  const armorClass = Object.entries(
    character.armorClass
  ).map(([field, value]) => (
    <ArmorClassForm key={field} field={field} value={value} />
  ));

  return (
    <fieldset>
      <legend>Armor Class</legend>
      <div className="armorClassFormContainer">{armorClass}</div>
    </fieldset>
  );
};

const HitPointsFormParent = ({ character }) => {
  return (
    <fieldset>
      <legend>Hit Points</legend>
      <HitPointsForm
        hitPoints={character.hitPoints.total}
        dieSize={character.hitPoints.dieSize}
      />
    </fieldset>
  );
};

const AbilityScoreFormParent = ({ character }) => {
  const primaryMod = character.abilities.primary;
  const [primaryModifier, setPrimaryModifier] = useState(primaryMod);
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const editedCharacter = clone(updatedCharacter);

  const abilityScore = Object.entries(character.abilities.score).map(
    ([field, value]) => {
      if (value === null) {
        value = 0;
      }
      return <AbilityScoreForm key={field} field={field} value={value} />;
    }
  );

  function handleChange(e) {
    setPrimaryModifier(e.target.value);
    editedCharacter.abilities.primary = e.target.value;
    setUpdatedCharacter(editedCharacter);
  }
  return (
    <fieldset>
      <legend>Ability Scores</legend>
      <div className="abilityScoreFormContainer">{abilityScore}</div>
      <br />
      <div className="primaryModifier">
        Primary Modifier:{" "}
        <select
          name="primaryModifier"
          className="textInput"
          value={primaryModifier}
          onChange={handleChange}
        >
          <option value="strength">Strength</option>
          <option value="dexterity">Dexterity</option>
          <option value="constitution">Constitution</option>
          <option value="intelligence">Intelligence</option>
          <option value="wisdom">Wisdom</option>
          <option value="charisma">Charisma</option>
        </select>
      </div>
    </fieldset>
  );
};

const TypesFormParent = ({ character }) => {
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const editedCharacter = clone(updatedCharacter);

  const handleChange = (setterFunction, index) => (e) => {
    const value = e.target.value;
    setterFunction(value);
    editedCharacter.type[index] = value;
    setUpdatedCharacter(editedCharacter);
  };

  const handleNewType = (e) => {
    editedCharacter.type.push("");
    setUpdatedCharacter(editedCharacter);
  };

  const type = character.type.map((value) => (
    <TypeForm
      key={value}
      type={value}
      character={character}
      handleEvent={handleChange}
    />
  ));

  return (
    <fieldset>
      <legend>Types</legend>
      {type}
      <button onClick={handleNewType}>New Type</button>
    </fieldset>
  );
};

const ClassFormParent = ({ character }) => {
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const editedCharacter = clone(updatedCharacter);

  const handleChange = (setterFunction, index) => (e) => {
    const value = e.target.value;
    switch (e.target.name) {
      case "classTitle":
        setterFunction(value);
        editedCharacter.class[index].name = value;
        break;
      case "level":
        setterFunction(value);
        editedCharacter.class[index].level = Number(value);
        break;
      default:
        break;
    }
    setUpdatedCharacter(editedCharacter);
  };

  const handleNewClass = (e) => {
    editedCharacter.class.push({ name: "", level: 0 });
    setUpdatedCharacter(editedCharacter);
  };
  const classes = Object.values(character.class).map((value) => {
    return (
      <ClassForm
        key={value.name}
        classItem={value}
        handleEvent={handleChange}
        character={character}
      />
    );
  });

  return (
    <>
      <fieldset>
        <legend>Classes</legend>
        {classes}
        <button onClick={handleNewClass}>New Class</button>
      </fieldset>
    </>
  );
};

const EditCore = (props) => {
  const setMainContent = useSetRecoilState(mainContentState);
  const character = useRecoilValue(characterState);
  const updatedCharacter = useRecoilValue(updatedCharacterState);
  function handleSubmit(e) {
    e.preventDefault();
    const primary = updatedCharacter.abilities.primary;
    if (updatedCharacter.abilities.score[primary] === null) {
      alert("Primary modifier can not be equal to 0");
      return "Primary Modifier Error";
    }
    persistCharacter(updatedCharacter);
  }

  return (
    <>
      <button onClick={() => setMainContent("More")}>
        {" "}
        <i className="fas fa-arrow-left"></i>
      </button>
      <form onSubmit={handleSubmit}>
        <NameForm name={character.name} />
        <br />
        <SizeForm size={character.size} />
        <br />
        <SpeedForm speed={character.speed} />
        <ClassFormParent character={character} />
        <TypesFormParent character={character} />
        <HitPointsFormParent character={character} />
        <AbilityScoreFormParent character={character} />
        <ArmorClassFormParent character={character} />
        <SavesFormParent character={character} />
        <DefenseFormParent character={character} />
        <input type="submit" />
      </form>
    </>
  );
};

export default EditCore;
