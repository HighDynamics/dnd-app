import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { mainContentState, characterState } from "../../../recoilState";

import { clone, persistCharacter } from "../../../utilities/utilities";
import {
  Name,
  Type,
  Size,
  Speed,
  HitPoints,
  ArmorClass,
  Defense,
  Classes,
} from "./CoreForm";

const EditCore = (props) => {
  const setMainContent = useSetRecoilState(mainContentState);
  const character = useRecoilValue(characterState);

  const handleUpdate = (updatedField, fieldPath, originalField) => {
    const updatedCharacter = clone(character);

    if (Array.isArray(character[fieldPath])) {
      const index = character[fieldPath].indexOf(originalField);
      updatedCharacter[fieldPath][index] = updatedField;
      persistCharacter(updatedCharacter);
    } else {
      updatedCharacter[fieldPath] = updatedField;
      persistCharacter(updatedCharacter);
    }
  };

  const armorClass = Object.entries(
    character.armorClass
  ).map(([field, value]) => (
    <ArmorClass
      key={field}
      field={field}
      value={value}
      handleUpdate={handleUpdate}
    />
  ));

  const defense = Object.entries(character.defense).map(([field, value]) => (
    <Defense
      key={field}
      field={field}
      value={value}
      handleUpdate={handleUpdate}
    />
  ));
  const classes = Object.values(character.class).map((value) => (
    <Classes key={value.name} classItem={value} handleUpdate={handleUpdate} />
  ));
  return (
    <>
      <button onClick={() => setMainContent("More")}>
        {" "}
        <i className="fas fa-arrow-left"></i>
      </button>
      <Name name={character.name} handleUpdate={handleUpdate} />
      {classes}
      <Type type={character.type} handleUpdate={handleUpdate} />
      <Size size={character.size} handleUpdate={handleUpdate} />
      <Speed speed={character.speed} handleUpdate={handleUpdate} />
      <HitPoints
        hitPoints={character.hitPoints.total}
        dieSize={character.hitPoints.dieSize}
        handleUpdate={handleUpdate}
      />
      {armorClass}
      {defense}
    </>
  );
};

export default EditCore;
