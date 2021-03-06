import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  characterState,
  damageState,
  temporaryHitPointsState,
} from "../../../recoilState";
import { textClassToGreenOrRed } from "../../../utilities/utilities";
import "./HitPointInfo.css";

const HitPointInfo = () => {
  const [tempHP, setTempHP] = useRecoilState(temporaryHitPointsState);
  const [damage, setDamage] = useRecoilState(damageState);
  const character = useRecoilValue(characterState);
  const currentHP = character.hitPoints.total + tempHP - damage;
  const [damageInput, setDamageInput] = useState(0);
  const [tempHPInput, setTempHPInput] = useState(0);
  const textColorClass = textClassToGreenOrRed(
    currentHP,
    character.hitPoints.total
  );
  function handleDamageChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDamageInput(Number(e.target.value));
  }
  // By the way: here is a great opportunity for a higher order function
  function handleDamageSubmit(addOrSubtract: "add" | "subtract") {
    addOrSubtract === "add"
      ? setDamage(damage + damageInput)
      : setDamage(Math.max(0, damage - damageInput));
    setDamageInput(0);
  }
  function handleTempHPChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTempHPInput(Number(e.target.value));
  }
  function handleTempHPSubmit(addOrSubtract: "add" | "subtract") {
    addOrSubtract === "add"
      ? setTempHP(tempHP + tempHPInput)
      : setTempHP(Math.max(0, tempHP - tempHPInput));
    if (tempHP < 0) {
      setTempHP(0);
    }
    setTempHPInput(0);
  }
  return (
    <div>
      <h2 className="HPHeading">Hit Points</h2>
      <ul>
        <li className={"currentHP " + textColorClass}>Current: {currentHP}</li>
        <hr className="blackHR" />
        <li className="damageListItem">
          <span className="damageListItemText">Temporary: {tempHP} </span>
          <div className="inputAndButton">
            <input
              className="numberInput threeDigit damageInput"
              type="number"
              value={tempHPInput}
              onChange={handleTempHPChange}
            />
            <button
              className="defaultButton"
              onClick={() => handleTempHPSubmit("add")}
            >
              +
            </button>
            <button
              className="defaultButton"
              onClick={() => handleTempHPSubmit("subtract")}
            >
              -
            </button>
          </div>
        </li>
        <hr className="blackHR" />
        <li className="damageListItem">
          <span className="damageListItemText">Damage: {damage} </span>
          <div className="inputAndButton">
            <input
              className="numberInput threeDigit damageInput"
              type="number"
              value={damageInput}
              onChange={handleDamageChange}
            />
            <button
              className="defaultButton"
              onClick={() => handleDamageSubmit("add")}
            >
              +
            </button>
            <button
              className="defaultButton"
              onClick={() => handleDamageSubmit("subtract")}
            >
              -
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default HitPointInfo;
