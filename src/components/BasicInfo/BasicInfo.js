import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

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
  //get the stuff
  const character = useRecoilValue(characterState);
  const rollResult = useRecoilValue(diceRollState);
  const damage = useRecoilValue(damageState);
  const temporaryHitPoints = useRecoilValue(temporaryHitPointsState);
  const setModalType = useSetRecoilState(modalTypeState);
  //starts as welcome, changes to dice roll
  const welcome = rollResult ? rollResult : "Good Luck,\n" + character.name;
  //store HitPoints in variable
  const currentHP = character.hitPoints.total + temporaryHitPoints - damage;
  //imported from utilities
  const currentAC = getAC(character);
  const textColorClass = textClassToGreenOrRed(
    currentHP,
    character.hitPoints.total
  );
  function toggleModal(modalType) {
    switch (modalType) {
      case !"Off":
        setModalType("Off");
        break;
      case "HP":
        setModalType(modalType);
        break;
      case "Defense":
        setModalType(modalType);
        break;
      default:
        setModalType("Off");
    }
  }
  return (
    <div>
      <TopComponent />
      <div id="HPACDiceWrapper">
        <div id="hpacWrapper">
          <button className="HPACButton" onClick={() => toggleModal("HP")}>
            <i className="fas fa-heart"></i>{" "}
            <span className={textColorClass}>{currentHP}</span>{" "}
            <i className="fas fa-angle-double-down HPACMore"></i>
          </button>
          <button className="HPACButton" onClick={() => toggleModal("Defense")}>
            <i className="fas fa-shield-alt"></i> {currentAC + " "}
            <i className="fas fa-angle-double-down HPACMore"></i>
          </button>
        </div>
        <div id="diceRollResultWrapper">{welcome}</div>
      </div>
    </div>
  );
};

export default BasicInfo;
