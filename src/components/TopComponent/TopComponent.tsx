import { useState } from "react";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";

import {
  innateSpellsCastState,
  preppedSpellsState,
  preppedSpellsCastState,
  slaState,
  emptySpellsArray,
  characterState,
  damageState,
  confirmationTypeState,
  ConfirmationType,
} from "../../recoilState";
import "./TopComponent.css";

const CharacterType = (props: { value: React.ReactNode }) => {
  return <span>{props.value} / </span>;
};
const CharacterClasses = (props: {
  value: { name: React.ReactNode; level: React.ReactNode };
}) => {
  return (
    <li>
      {props.value.name}({props.value.level})
    </li>
  );
};

const TopComponent = () => {
  const character = useRecoilValue(characterState);
  const [toggle, setToggle] = useState(false);
  const [damage, setDamage] = useRecoilState(damageState);
  const setInnateSpellsCast = useSetRecoilState(innateSpellsCastState);
  const setpreppedSpells = useSetRecoilState(preppedSpellsState);
  const setPreppedSpellsCast = useSetRecoilState(preppedSpellsCastState);
  const setSLAs = useSetRecoilState(slaState);
  const setConfirmationType = useSetRecoilState(confirmationTypeState);
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

  const renderConfirmation = (confirmationType: ConfirmationType) => {
    setConfirmationType(confirmationType);
    setTimeout(() => setConfirmationType("off"), 3000);
  };

  function fullRest() {
    resetAllSpells();
    healDamageOnRest();
    setToggle(false);
    renderConfirmation("fullRest");
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
