import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  characterState,
  damageState,
  temporaryHitPointsState,
} from "../../../recoilState";
import { textClassToGreenOrRed } from "../../../utilities/utilities";
import "./HitPointInfo.css";

const HitPointInfo = (props) => {
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
  function handleDamageChange(e) {
    setDamageInput(Number(e.target.value));
  }
  function handleDamageSubmit(addOrSubtract) {
    addOrSubtract === "add"
      ? setDamage(damage + damageInput)
      : setDamage(Math.max(0, damage - damageInput));
    setDamageInput(0);
  }
  function handleTempHPChange(e) {
    setTempHPInput(Number(e.target.value));
  }
  function handleTempHPSubmit(addOrSubtract) {
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
        <li>
          Damage: {damage}{" "}
          <div className="inputAndButton">
            <input
              className="numberInput shortNumber"
              type="number"
              value={damageInput}
              onChange={handleDamageChange}
            />
            <button
              className="plusMinusButton"
              onClick={() => handleDamageSubmit("add")}
            >
              +
            </button>
            <button
              className="plusMinusButton"
              onClick={() => handleDamageSubmit("subtract")}
            >
              -
            </button>
          </div>
        </li>
        <li>
          Temporary: {tempHP}{" "}
          <div className="inputAndButton">
            <input
              className="numberInput shortNumber"
              type="number"
              value={tempHPInput}
              onChange={handleTempHPChange}
            />
            <button
              className="plusMinusButton"
              onClick={() => handleTempHPSubmit("add")}
            >
              +
            </button>
            <button
              className="plusMinusButton"
              onClick={() => handleTempHPSubmit("subtract")}
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
