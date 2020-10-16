import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import {
  diceRollState,
  characterState,
  damageState,
  temporaryHitPointsState,
  modalTypeState,
} from "../../recoilState.js";
import { getAC, textClassToGreenOrRed } from "../../utilities/utilities";
import TopComponent from "../TopComponent/TopComponent.js";
import "./BasicInfo.css";

const BasicInfo = (props) => {
  const character = useRecoilValue(characterState);
  const rollResult = useRecoilValue(diceRollState);
  const damage = useRecoilValue(damageState);
  const temporaryHitPoints = useRecoilValue(temporaryHitPointsState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const welcome = rollResult ? rollResult : "Good Luck,\n" + character.name;
  const currentHP = character.hitPoints.total + temporaryHitPoints - damage;
  const currentAC = getAC(character);
  const textColorClass = textClassToGreenOrRed(
    currentHP,
    character.hitPoints.total
  );
  function toggleModal(modalType) {
    if (modalType === "Off") {
      setModalType("HPAC");
    } else {
      setModalType("Off");
    }
  }
  return (
    <div>
      <TopComponent />
      <div id="HPACDiceWrapper">
        <div id="hpacWrapper">
          <div className="scores">
            <p id="hp">
              hp: <span className={textColorClass}>{currentHP}</span>
            </p>
            <p id="ac">ac: {currentAC}</p>
          </div>
          <button className="HPACButton" onClick={() => toggleModal(modalType)}>
            <i className="fas fa-angle-double-down HPACMore"></i>
          </button>
        </div>
        <div id="diceRollResultWrapper">{welcome}</div>
      </div>
    </div>
  );
};

export default BasicInfo;
