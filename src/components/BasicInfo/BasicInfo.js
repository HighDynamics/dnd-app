import React, { useState, useContext } from "react";
import { useRecoilValue } from "recoil";

import { diceRollState } from "../../recoilState.js";
import { Character } from "../dnd.js";
import TopComponent from "../TopComponent/TopComponent.js";
import "./BasicInfo.css";

const BasicInfo = (props) => {
  const character = useContext(Character);
  const rollResult = useRecoilValue(diceRollState);
  //toggle for 'more' button
  const [toggle, setToggle] = useState(false);
  //display conditional more/less
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
        <div id="diceRollResultWrapper">{rollResult}</div>
      </div>
    </div>
  );
};

export default BasicInfo;
