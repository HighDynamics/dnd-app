import { useState } from "react";
import { useRecoilState } from "recoil";

import { updatedCharacterState } from "../../../store/recoilState";
import { clone } from "../../../utilities/utilities";
import "./SpeedForm.css";

const SpeedForm = (props: { speed: number }) => {
  const { speed } = props;
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState,
  );
  const [speedValue, setSpeedValue] = useState(speed);
  const editedCharacter = clone(updatedCharacter);

  function handleChange(e: React.ChangeEvent) {
    setSpeedValue(e.target.value);
    editedCharacter.speed = e.target.value;

    setUpdatedCharacter(editedCharacter);
  }

  return (
    <>
      <label>
        Speed:{" "}
        <input
          type="number"
          className="numberInput twoDigit"
          value={speedValue}
          onChange={handleChange}
        />
      </label>
    </>
  );
};
export default SpeedForm;
