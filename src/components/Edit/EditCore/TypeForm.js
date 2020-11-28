import React, { useState } from "react";
import { useRecoilState } from "recoil";

import { clone } from "../../../utilities/utilities";
import { updatedCharacterState } from "../../../recoilState";

const TypeForm = (props) => {
  const { type, character } = props;
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const [typeName, setTypeName] = useState(type);
  const index = character.type.indexOf(type);
  const editedCharacter = clone(updatedCharacter);

  function handleChange(e) {
    setTypeName(e.target.value);
    editedCharacter.type[index] = e.target.value;

    setUpdatedCharacter(editedCharacter);
  }

  return (
    <>
      <input type="text" name="type" value={typeName} onChange={handleChange} />
    </>
  );
};
export default TypeForm;
