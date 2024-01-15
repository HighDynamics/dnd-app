import { useRecoilValue, useRecoilState } from "recoil";

import {
  diceRollState,
  characterState,
  damageState,
  temporaryHitPointsState,
  modalTypeState,
} from "../../recoilState";
import { getAC } from "../../utilities/utilities";
import { getTextColor } from "../../lib";

import TopComponent from "../TopComponent/TopComponent";

function Welcome() {
  const roll = useRecoilValue(diceRollState);
  const character = useRecoilValue(characterState);

  if (!roll) {
    return (
      <>
        <div>Good Luck,</div>
        <div>{character.name}</div>
      </>
    );
  }

  const edgeRollClass =
    roll.size === 20 && roll.result === 1
      ? "text-red-500"
      : roll.size === 20 && roll.result === 20
        ? "text-green-500"
        : "";

  return (
    <>
      <span className="text-sm">
        {roll.use} +{roll.mod}
      </span>
      <div className="text-3xl">
        + <span className={edgeRollClass}>{roll.result}</span>{" "}
        <span className="rollModTotal">= {roll.result + roll.mod}</span>
      </div>
    </>
  );
}

const BasicInfo = () => {
  //get the stuff
  const character = useRecoilValue(characterState);
  const damage = useRecoilValue(damageState);
  const temporaryHitPoints = useRecoilValue(temporaryHitPointsState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  //starts as welcome, changes to dice roll
  //store HitPoints in variable
  const currentHP = character.hitPoints.total + temporaryHitPoints - damage;
  //imported from utilities
  const currentAC = getAC(character);
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
      <div className="flex divide-x border border-white">
        <div className="flex shrink-0 basis-1/2 flex-col justify-around gap-2 py-2">
          <button
            className="m-auto flex gap-2 text-5xl"
            onClick={() => toggleModal("HP")}
          >
            <i className="fas fa-heart"></i>
            <span
              className={getTextColor(currentHP, character.hitPoints.total)}
            >
              {currentHP}
            </span>
            <i className="fas fa-angle-double-down"></i>
          </button>
          <button
            className="m-auto flex gap-2 text-5xl"
            onClick={() => toggleModal("Defense")}
          >
            <i className="fas fa-shield-alt"></i>
            <span>{currentAC}</span>
            <i className="fas fa-angle-double-down"></i>
          </button>
        </div>
        <div className="m-auto shrink-0 basis-1/2 whitespace-pre-wrap text-center">
          <Welcome />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
