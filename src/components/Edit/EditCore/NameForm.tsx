import { useState } from "react";
import { useRecoilState } from "recoil";

import { clone } from "../../../utilities/utilities";
import { updatedCharacterState } from "../../../recoilState";
const NameForm = (props: { name: string }) => {
  const { name } = props;
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const [nameField, setNameField] = useState(name);
  const editedCharacter = clone(updatedCharacter);

  function handleChange(e: React.ChangeEvent) {
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
