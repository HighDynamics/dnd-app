import { useRecoilValue, useRecoilState } from "recoil";

import {
  diceRollState,
  characterState,
  damageState,
  temporaryHitPointsState,
  modalTypeState,
} from "../../recoilState";
import { getAC, textClassToGreenOrRed } from "../../utilities/utilities";
import TopComponent from "../TopComponent/TopComponent";
import "./BasicInfo.css";

const BasicInfo = (props) => {
  //get the stuff
  const character = useRecoilValue(characterState);
  const rollResult = useRecoilValue(diceRollState);
  const damage = useRecoilValue(damageState);
  const temporaryHitPoints = useRecoilValue(temporaryHitPointsState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
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
  function toggleModal(modalInput: string) {
    if (modalType === modalInput) {
      setModalType("Off");
      return "close modal";
    }
    switch (modalInput) {
      case "HP":
        setModalType(modalInput);
        break;
      case "Defense":
        setModalType(modalInput);
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
