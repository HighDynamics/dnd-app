import { useState } from "react";

import "./ClassForm.css";

const newClass = { name: "", level: 0 };

const ClassForm = ({
  classItem = newClass,
  character,
  handleEvent,
}: {
  classItem: typeof newClass;
  character: ICharacter;
  handleEvent: (
    setter: ((input: string) => void) | ((input: number) => void),
    index: number
  ) => React.ChangeEventHandler;
}) => {
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
      <label>
        Class:{" "}
        <input
          className="textInput"
          type="text"
          name="classTitle"
          value={classTitle}
          onChange={handleTitleChange}
        />{" "}
      </label>
      <label>
        Level:{" "}
        <input
          className="numberInput twoDigit"
          type="number"
          name="level"
          value={classLevel}
          onChange={handleLevelChange}
        />
      </label>
      <br />
    </>
  );
};
export default ClassForm;
