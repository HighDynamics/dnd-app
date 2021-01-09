import { useState } from "react";
import { useRecoilState } from "recoil";

import { clone } from "../../../utilities/utilities";
import { updatedCharacterState } from "../../../recoilState";
const NameForm = (props) => {
  const { name } = props;
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const [nameField, setNameField] = useState(name);
  const editedCharacter = clone(updatedCharacter);

  function handleChange(e) {
    setNameField(e.target.value);
    editedCharacter.name = e.target.value;

    setUpdatedCharacter(editedCharacter);
  }
  return (
    <>
      <label>
        Name:{" "}
        <input
          type="text"
          className="textInput"
          value={nameField}
          onChange={handleChange}
        />
      </label>
    </>
  );
};
export default NameForm;
