import { useState } from "react";
import { useRecoilState } from "recoil";

import { clone } from "../../../utilities/utilities";
import { updatedCharacterState } from "../../../recoilState";

const SizeForm = (props) => {
  const { size } = props;
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const [sizeName, setSizeName] = useState(size);
  const editedCharacter = clone(updatedCharacter);

  function handleChange(e) {
    setSizeName(e.target.value);
    editedCharacter.size = e.target.value;

    setUpdatedCharacter(editedCharacter);
  }
  return (
    <>
      Size:{" "}
      <select
        name="size"
        className="textInput"
        value={sizeName}
        onChange={handleChange}
      >
        <option value="Fine">Fine</option>
        <option value="Diminutive">Diminutive</option>
        <option value="Tiny">Tiny</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
        <option value="Huge">Huge</option>
        <option value="Gargantuan">Gargantuan</option>
        <option value="Colossal">Colossal</option>
      </select>
    </>
  );
};
export default SizeForm;
