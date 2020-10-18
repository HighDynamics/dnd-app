import React, { useState } from "react";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";

import {
  innateSpellsCastState,
  preppedSpellsState,
  preppedSpellsCastState,
  emptySpellsArray,
  characterState,
  damageState,
} from "../../recoilState.js";
import "./TopComponent.css";

const CharacterType = (props) => {
  return <span>{props.value} / </span>;
};
const CharacterClasses = (props) => {
  return <li>{props.value}</li>;
};

const TopComponent = (props) => {
  const character = useRecoilValue(characterState);
  const [toggle, setToggle] = useState(false);
  const setInnateSpellsCast = useSetRecoilState(innateSpellsCastState);
  const setpreppedSpells = useSetRecoilState(preppedSpellsState);
  const setPreppedSpellsCast = useSetRecoilState(preppedSpellsCastState);
  const [damage, setDamage] = useRecoilState(damageState);
  function resetAllSpells() {
    setInnateSpellsCast(emptySpellsArray);
    setpreppedSpells(emptySpellsArray);
    setPreppedSpellsCast(emptySpellsArray);
  }
  function healDamageOnRest() {
    setDamage(Math.max(0, damage - character.level));
  }
  function fullRest() {
    resetAllSpells();
    healDamageOnRest();
  }
  const type = character.type.map((t) => <CharacterType key={t} value={t} />);
  const classList = character.class.map((c) => (
    <CharacterClasses key={c} value={c} />
  ));
  return (
    <div className="topContainer">
      <button
        className={toggle ? "moreButtonOn" : "moreButtonOff"}
        onClick={() => setToggle(!toggle)}
      >
        <h1 id="nameAndLevel">
          {character.name} ({character.level})
        </h1>
        <em id="moreLess">
          <i className="fas fa-angle-double-down"></i>
        </em>
      </button>

      {toggle === true && (
        <div id="characterInfo">
          <div id="characterType">
            type: <br /> {type}
          </div>
          <ul id="classList">
            class: <br /> {classList}
          </ul>
          <button className="fullRestButton" onClick={() => fullRest()}>
            Full Rest
          </button>
        </div>
      )}
    </div>
  );
};

export default TopComponent;
