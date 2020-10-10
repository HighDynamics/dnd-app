import React, { useState, useContext } from "react";
import { useSetRecoilState } from "recoil";

import {
  emptySpellsCast,
  innateSpellsCastState,
  preppedSpellsState,
  preppedSpellsCastState,
  emptySpellsArray,
} from "../../recoilState.js";
import { Character } from "../dnd.js";
import "./TopComponent.css";

const CharacterType = (props) => {
  return <span>{props.value} / </span>;
};
const CharacterClasses = (props) => {
  return <li>{props.value}</li>;
};

const TopComponent = (props) => {
  const character = useContext(Character);
  const [toggle, setToggle] = useState(false);
  const setInnateSpellsCast = useSetRecoilState(innateSpellsCastState);
  const setpreppedSpells = useSetRecoilState(preppedSpellsState);
  const setPreppedSpellsCast = useSetRecoilState(preppedSpellsCastState);
  function resetAllSpells() {
    setInnateSpellsCast(emptySpellsArray);
    setpreppedSpells(emptySpellsArray);
    setPreppedSpellsCast(emptySpellsArray);
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
          <i className="fas fa-bars"></i>
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
          <button className="fullRestButton" onClick={() => resetAllSpells()}>
            Full Rest
          </button>
        </div>
      )}
    </div>
  );
};

export default TopComponent;
