import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";

import { diceRollState, characterState } from "../../recoilState.js";
import "./BasicInfo.css";

const CharacterType = (props) => {
  return <span>{props.value} / </span>;
};
const CharacterClasses = (props) => {
  return <li>{props.value}</li>;
};
const BasicInfo = (props) => {
  const character = useRecoilValue(characterState);
  const rollResult = useRecoilValue(diceRollState);
  //toggle for 'more' button
  const [toggle, setToggle] = useState(false);
  //display conditional more/less
  const moreLess = () => {
    if (toggle) {
      return "(less)";
    } else {
      return "(more)";
    }
  };
  const health =
    character.hitPoints.total -
    character.hitPoints.damage +
    character.hitPoints.temporaryHitPoints;
  const type = character.type.map((t) => <CharacterType key={t} value={t} />);
  const classList = character.class.map((c) => (
    <CharacterClasses key={c} value={c} />
  ));
  return (
    <div>
      <div className="topContainer">
        <button
          className={toggle ? "moreButtonOn" : "moreButtonOff"}
          onClick={() => setToggle(!toggle)}
        >
          <h1 id="nameAndLevel">
            {character.name} ({character.level})
          </h1>
          <em id="moreLess">{moreLess()}</em>
        </button>

        {toggle === true && (
          <div id="characterInfo">
            <div id="characterType">
              type: <br /> {type}
            </div>
            <ul id="classList">
              class: <br /> {classList}
            </ul>
          </div>
        )}
        <div id="HPACDiceWrapper">
          <div id="hpacWrapper">
            <p id="hp">hp: {health}</p>
            <p id="ac">ac: {character.armorClass.ac.total}</p>
          </div>
          <div id="diceRollResultWrapper">{rollResult}</div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
