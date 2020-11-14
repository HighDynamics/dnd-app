import React, { useState } from "react";

import "./CoreForm.css";

const Name = (props) => {
  const { name, handleUpdate } = props;
  const [nameField, setNameField] = useState(name);

  function handleChange(e) {
    setNameField(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    handleUpdate(nameField, "name");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={nameField} onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};
const Classes = (props) => {
  const { classItem, handleUpdate } = props;
  const [classTitle, setClassTitle] = useState(classItem.name);
  const [classLevel, setClassLevel] = useState(classItem.level);
  const newClassItem = { name: classTitle, level: classLevel };

  function handleChange(e) {
    switch (e.target.name) {
      case "classTitle":
        setClassTitle(e.target.value);
        break;
      case "level":
        setClassLevel(e.target.value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdate(newClassItem, "class", classItem);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        Class:
        <input
          className="classTitle"
          type="text"
          name="classTitle"
          value={classTitle}
          onChange={handleChange}
        />
        Level:
        <input
          className="classLevel"
          type="number"
          name="level"
          value={classLevel}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </>
  );
};
const Type = (props) => {
  const { type, handleUpdate } = props;
  return <></>;
};
const Size = (props) => {
  const { size, handleUpdate } = props;
  return <></>;
};
const Speed = (props) => {
  const { speed, handleUpdate } = props;
  return <></>;
};
const HitPoints = (props) => {
  const { hitPoints, dieSize, handleUpdate } = props;
  return <></>;
};
const ArmorClass = (props) => {
  const { field, handleUpdate } = props;
  return <></>;
};
const Defense = (props) => {
  const { field, handleUpdate } = props;
  return <></>;
};
export { Name, Classes, Type, Size, Speed, HitPoints, ArmorClass, Defense };
