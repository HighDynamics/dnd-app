import React, { useState } from "react";

import "./ClassForm.css";

const newClass = { name: "", level: 0 };

const ClassForm = ({ classItem = newClass, character, handleEvent }) => {
  const [classTitle, setClassTitle] = useState(classItem.name);
  const [classLevel, setClassLevel] = useState(classItem.level);
  const index = () => {
    if (character.class.indexOf(classItem) !== -1) {
      return character.class.indexOf(classItem);
    } else {
      return Object.keys(character.class).length;
    }
  };
  const handleTitleChange = handleEvent(setClassTitle, index());
  const handleLevelChange = handleEvent(setClassLevel, index());
  return (
    <>
      Class:{" "}
      <input
        className="classTitle"
        type="text"
        name="classTitle"
        value={classTitle}
        onChange={handleTitleChange}
      />{" "}
      Level:{" "}
      <input
        className="classLevel"
        type="number"
        name="level"
        value={classLevel}
        onChange={handleLevelChange}
      />
      <br />
    </>
  );
};
export default ClassForm;
