import React, { useState } from "react";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";

import {
  innateSpellsCastState,
  preppedSpellsState,
  preppedSpellsCastState,
  slaState,
  emptySpellsArray,
  characterState,
  damageState,
} from "../../recoilState.js";
import "./TopComponent.css";

const CharacterType = (props) => {
  return <span>{props.value} / </span>;
};
const CharacterClasses = (props) => {
  return (
    <li>
      {props.value.name}({props.value.level})
    </li>
  );
};

const TopComponent = (props) => {
  const character = useRecoilValue(characterState);
  const [toggle, setToggle] = useState(false);
  const setInnateSpellsCast = useSetRecoilState(innateSpellsCastState);
  const setpreppedSpells = useSetRecoilState(preppedSpellsState);
  const setPreppedSpellsCast = useSetRecoilState(preppedSpellsCastState);
  const setSLAs = useSetRecoilState(slaState);
  const [damage, setDamage] = useRecoilState(damageState);
  function getCareerLevel() {
    return character.class.reduce((s, c) => Number(s + c.level), 0);
  }
  function resetAllSpells() {
    setInnateSpellsCast(emptySpellsArray);
    setpreppedSpells(emptySpellsArray);
    setPreppedSpellsCast(emptySpellsArray);
    setSLAs([]);
  }
  function healDamageOnRest() {
    setDamage(Math.max(0, damage - getCareerLevel()));
  }
  function fullRest() {
    resetAllSpells();
    healDamageOnRest();
  }
  const type = character.type.map((t) => <CharacterType key={t} value={t} />);
  const classList = character.class.map((c) => (
    <CharacterClasses key={c.name} value={c} />
  ));
  return (
    <div className="topContainer">
      <button
        className={toggle ? "moreButtonOn" : "moreButtonOff"}
        onClick={() => setToggle(!toggle)}
      >
        <h1 id="nameAndLevel">
          {character.name} ({getCareerLevel()})
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
