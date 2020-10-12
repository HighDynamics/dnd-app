import React from "react";
import { useRecoilValue } from "recoil";

import { diceRollState, characterState } from "../../recoilState.js";
import TopComponent from "../TopComponent/TopComponent.js";
import "./BasicInfo.css";

const BasicInfo = (props) => {
  const character = useRecoilValue(characterState);
  const rollResult = useRecoilValue(diceRollState);
  const welcome = rollResult ? rollResult : "Good Luck,\n" + character.name;
  const health =
    character.hitPoints.total -
    character.hitPoints.damage +
    character.hitPoints.temporaryHitPoints;
  return (
    <div>
      <TopComponent />
      <div id="HPACDiceWrapper">
        <div id="hpacWrapper">
          <p id="hp">hp: {health}</p>
          <p id="ac">ac: {character.armorClass.ac.total}</p>
        </div>
        <div id="diceRollResultWrapper">{welcome}</div>
      </div>
    </div>
  );
};

export default BasicInfo;
