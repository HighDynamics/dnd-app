import React, { useState } from "react";

const TypeForm = ({ type, character, handleEvent }) => {
  const [typeName, setTypeName] = useState(type);

  const index = () => {
    if (character.type.indexOf(type) !== -1) {
      return character.type.indexOf(type);
    } else {
      return Object.keys(character.type).length;
    }
  };

  const handleChange = handleEvent(setTypeName, index());

  return (
    <>
      <input type="text" name="type" value={typeName} onChange={handleChange} />
      <br />
    </>
  );
};
export default TypeForm;
