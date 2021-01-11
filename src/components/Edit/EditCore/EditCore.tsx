import { useState } from "react";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";

import {
  mainContentState,
  characterState,
  updatedCharacterState,
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

const ClassFormParent = ({ character }: { character: ICharacter }) => {
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const editedCharacter = clone(updatedCharacter);

  const handleChange = (
    setterFunction: (value: any) => void,
    index: number
  ): React.ChangeEventHandler => (e) => {
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

  const handleNewClass: React.MouseEventHandler = (e) => {
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
      <fieldset className="formItemsContainer">
        <legend className="legendHeader">Classes</legend>
        {classes}
        <br />
        <button
          onClick={handleNewClass}
          className="defaultButton coreFormButton"
        >
          New Class
        </button>
      </fieldset>
    </>
  );
};

const TypesFormParent = ({ character }: { character: ICharacter }) => {
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const editedCharacter = clone(updatedCharacter);

  const handleChange = (
    setterFunction: (value: string) => void,
    index: number
  ): React.ChangeEventHandler => (e) => {
    const value = e.target.value;
    setterFunction(value);
    editedCharacter.type[index] = value;
    setUpdatedCharacter(editedCharacter);
  };

  const handleNewType: React.MouseEventHandler = (e) => {
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
    <fieldset className="formItemsContainer">
      <legend className="legendHeader">Types</legend>
      {type}
      <br />
      <button className="defaultButton coreFormButton" onClick={handleNewType}>
        New Type
      </button>
    </fieldset>
  );
};

const HitPointsFormParent = ({ character }: { character: ICharacter }) => {
  return (
    <fieldset className="formItemsContainer">
      <legend className="legendHeader">Hit Points</legend>
      <HitPointsForm
        hitPoints={character.hitPoints.total}
        dieSize={character.hitPoints.dieSize}
      />
    </fieldset>
  );
};

const AbilityScoreFormParent = ({ character }: { character: ICharacter }) => {
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
      return (
        <AbilityScoreForm
          key={field}
          field={field as keyof typeof character.abilities.score}
          value={value}
        />
      );
    }
  );

  function handleChange(e: React.ChangeEvent) {
    setPrimaryModifier(e.target.value);
    editedCharacter.abilities.primary = e.target.value;
    setUpdatedCharacter(editedCharacter);
  }
  return (
    <fieldset className="formItemsContainer">
      <legend className="legendHeader">Ability Scores</legend>
      <div className="abilityScoreFormContainer">{abilityScore}</div>
      <br />
      <div className="primaryModifier">
        <label>
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
        </label>
      </div>
    </fieldset>
  );
};

const ArmorClassFormParent = ({ character }: { character: ICharacter }) => {
  const armorClass = Object.entries(
    character.armorClass
  ).map(([field, value]) => (
    <ArmorClassForm
      key={field}
      field={field as keyof typeof character.armorClass}
      value={value}
    />
  ));

  return (
    <fieldset className="formItemsContainer">
      <legend className="legendHeader">Armor Class</legend>
      <div className="armorClassFormContainer">{armorClass}</div>
    </fieldset>
  );
};

const SavesFormParent = ({ character }: { character: ICharacter }) => {
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const editedCharacter = clone(updatedCharacter);
  const fieldPath = editedCharacter.defense.saves;
  const handleChange = (
    setterFunction:
      | ((value: string | null) => void)
      | ((value: number | null) => void),
    fieldParent: keyof ICharacter["defense"]["saves"]
  ): React.ChangeEventHandler => (e) => {
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
    <fieldset className="formItemsContainer">
      <legend className="legendHeader">Saves</legend>
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

const DefenseFormParent = () => {
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const editedCharacter = clone(updatedCharacter);
  const fieldPath = editedCharacter.defense;

  const handleChange: React.ChangeEventHandler = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const type = e.target.type;

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
      case "cold":
      case "electricity":
      case "fire":
      case "sonic":
        if (type === "checkbox") {
          fieldPath.energyResistance[e.target.name] = e.currentTarget.checked
            ? null
            : 0;
        } else {
          fieldPath.energyResistance[e.target.name] = Number(value);
        }
        break;
      default:
        console.error(`Unknown field update. Name: ${field}`);
        break;
    }
    setUpdatedCharacter(editedCharacter);
  };

  const damageReduction = Object.entries(
    editedCharacter.defense.damageReduction
  ).map(([field, value]) => (
    <li key={field}>
      <DefenseForm
        field={field}
        value={value}
        handleEvent={handleChange}
        fieldPath="damageReduction"
      />
    </li>
  ));

  const energyResistance = Object.entries(
    editedCharacter.defense.energyResistance
  ).map(([field, value]) => {
    return (
      <li key={field}>
        <DefenseForm
          field={field}
          value={value}
          handleEvent={handleChange}
          fieldPath="energyResistance"
        />
      </li>
    );
  });

  return (
    <>
      <fieldset className="formItemsContainer">
        <legend className="legendHeader">Defense</legend>
        <div className="defenseContainer">
          <div className="defenseItem">
            <label>
              Spell Resistance:{" "}
              <input
                className="numberInput twoDigit"
                type="number"
                name="spellResistance"
                value={editedCharacter.defense.spellResistance}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="defenseItem">
            <fieldset>
              {" "}
              <legend>Damage Reduction</legend> <ul>{damageReduction}</ul>
            </fieldset>
          </div>
          <div className="defenseItem">
            <fieldset>
              <legend>Energy Resistance</legend> <ul>{energyResistance}</ul>
            </fieldset>
          </div>
        </div>
      </fieldset>
    </>
  );
};

const EditCore = (props) => {
  const setMainContent = useSetRecoilState(mainContentState);
  const character = useRecoilValue(characterState);
  const updatedCharacter = useRecoilValue(updatedCharacterState);
  function handleSubmit(e: React.FormEvent) {
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
      <button onClick={() => setMainContent("More")} className="backButton">
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
        <DefenseFormParent />
        <input className="defaultButton coreFormButton" type="submit" />
      </form>
    </>
  );
};

export default EditCore;
