import React, { useState } from "react";
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
import DefenseForm from "./DefenseForm";

import "./EditCore.css";

const DefenseFormParent = ({ character }) => {
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const editedCharacter = clone(updatedCharacter);
  const fieldPath = editedCharacter.defense;
  const handleChange = (setterFunction, fieldPath) => (e) => {
    const value = e.target.value;
    setterFunction(value);
    fieldPath = value;
    setUpdatedCharacter(editedCharacter);
    console.log(editedCharacter.defense);
  };
  const damageReduction = Object.entries(character.defense.damageReduction).map(
    ([field, value]) => (
      <li>
        <DefenseForm
          key={field}
          field={field}
          value={value}
          handleEvent={handleChange}
          fieldPath={fieldPath.damageReduction}
        />
      </li>
    )
  );
  const spellResistance = character.defense.spellResistance;
  const energyResistance = Object.entries(
    character.defense.energyResistance
  ).map(([field, value]) => (
    <li>
      <DefenseForm
        key={field}
        field={field}
        value={value}
        handleEvent={handleChange}
        fieldPath={fieldPath.energyResistance}
      />
    </li>
  ));
  const fortSave = Object.entries(character.defense.saves.fortitude).map(
    ([field, value]) => (
      <li>
        <DefenseForm
          key={field}
          field={field}
          value={value}
          handleEvent={handleChange}
          fieldPath={fieldPath.saves.fortitude}
        />
      </li>
    )
  );
  const reflexSave = Object.entries(character.defense.saves.reflex).map(
    ([field, value]) => (
      <li>
        <DefenseForm
          key={field}
          field={field}
          value={value}
          handleEvent={handleChange}
          fieldPath={fieldPath.saves.reflex}
        />
      </li>
    )
  );
  const willSave = Object.entries(character.defense.saves.will).map(
    ([field, value]) => (
      <li>
        <DefenseForm
          key={field}
          field={field}
          value={value}
          handleEvent={handleChange}
          fieldPath={fieldPath.saves.will}
        />
      </li>
    )
  );

  return (
    <>
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
      <fieldset>
        <legend>Defense</legend>
        <div className="defenseContainer">
          <div className="defenseItem">Spell Resistance: {spellResistance}</div>
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

const ArmorClassFormParent = ({ character }) => {
  const armorClass = Object.entries(
    character.armorClass
  ).map(([field, value]) => (
    <ArmorClassForm key={field} field={field} value={value} />
  ));

  return (
    <fieldset>
      <legend>Armor Class</legend>
      {armorClass}
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

const TypesFormParent = ({ character }) => {
  const type = character.type.map((value) => (
    <TypeForm key={value} type={value} character={character} />
  ));

  return (
    <fieldset>
      <legend>Types</legend>
      {type}
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
        <ArmorClassFormParent character={character} />
        <DefenseFormParent character={character} />
        <input type="submit" />
      </form>
    </>
  );
};

export default EditCore;
