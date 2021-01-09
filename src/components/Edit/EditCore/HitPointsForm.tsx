import { useState } from "react";
import { useRecoilState } from "recoil";

import { updatedCharacterState } from "../../../recoilState";
import { clone } from "../../../utilities/utilities";

import "./HitPointsForm.css";

const HitPointsForm = (props) => {
  const { hitPoints, dieSize } = props;
  const [updatedCharacter, setUpdatedCharacter] = useRecoilState(
    updatedCharacterState
  );
  const [hp, setHp] = useState(hitPoints);
  const [dieSizeNum, setDieSizeNum] = useState(dieSize);
  const editedCharacter = clone(updatedCharacter);

  function handleChange(e) {
    switch (e.target.name) {
      case "hp":
        setHp(e.target.value);
        editedCharacter.hitPoints.total = Number(e.target.value);
        break;
      case "dieSize":
        setDieSizeNum(e.target.value);
        editedCharacter.hitPoints.dieSize = e.target.value;
        break;
      default:
        break;
    }
    setUpdatedCharacter(editedCharacter);
  }

  return (
    <>
      HD size:{" "}
      <select
        name="dieSize"
        className="numberInput threeDigit"
        value={dieSizeNum}
        onChange={handleChange}
      >
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="10">10</option>
        <option value="12">12</option>
      </select>{" "}
      HP:{" "}
      <input
        type="number"
        className="numberInput threeDigit"
        name="hp"
        onChange={handleChange}
        value={hp}
      />
    </>
  );
};
export default HitPointsForm;
