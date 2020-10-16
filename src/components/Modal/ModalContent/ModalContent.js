import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  temporaryHitPointsState,
  damageState,
  characterState,
} from "../../../recoilState";
import { getAC, textClassToGreenOrRed } from "../../../utilities/utilities";
import "./ModalContent.css";

export const HitPointInfo = (props) => {
  const [tempHP, setTempHP] = useRecoilState(temporaryHitPointsState);
  const [damage, setDamage] = useRecoilState(damageState);
  const character = useRecoilValue(characterState);
  const currentHP = character.hitPoints.total + tempHP - damage;
  const [damageInput, setDamageInput] = useState(0);
  const [tempHPInput, setTempHPInput] = useState(0);
  const textColorClass = textClassToGreenOrRed(
    currentHP,
    character.hitPoints.total
  );
  function handleDamageChange(e) {
    setDamageInput(Number(e.target.value));
  }
  function handleDamageSubmit(addOrSubtract) {
    addOrSubtract === "add"
      ? setDamage(damage + damageInput)
      : setDamage(damage - damageInput);
    if (damage < 0) {
      setDamage(0);
    }
    setDamageInput(0);
  }
  function handleTempHPChange(e) {
    setTempHPInput(Number(e.target.value));
  }
  function handleTempHPSubmit(addOrSubtract) {
    addOrSubtract === "add"
      ? setTempHP(tempHP + tempHPInput)
      : setTempHP(tempHP - tempHPInput);
    if (tempHP < 0) {
      setTempHP(0);
    }
    setTempHPInput(0);
  }
  return (
    <div>
      <h2 className="HPACHeading HPHeading">Hit Points</h2>
      <ul>
        <li className={"currentHP " + textColorClass}>Current: {currentHP}</li>
        <li>
          Damage: {damage}{" "}
          <div className="inputAndButton">
            <input
              className="numberInput"
              type="number"
              value={damageInput}
              onChange={handleDamageChange}
            />
            <button onClick={() => handleDamageSubmit("add")}>+</button>
            <button onClick={() => handleDamageSubmit("subtract")}>-</button>
          </div>
        </li>
        <li>
          Temporary: {tempHP}{" "}
          <div className="inputAndButton">
            <input
              className="numberInput"
              type="number"
              value={tempHPInput}
              onChange={handleTempHPChange}
            />
            <button onClick={() => handleTempHPSubmit("add")}>+</button>
            <button onClick={() => handleTempHPSubmit("subtract")}>-</button>
          </div>
        </li>
      </ul>
    </div>
  );
};
export const ArmorClassInfo = (props) => {
  const character = useRecoilValue(characterState);
  const currentAC = getAC(character);
  const ac = character.armorClass.ac;
  return (
    <>
      <h2 className="HPACHeading">Armor Class</h2>
      <div>
        <ul>
          <li className="currentAC">Total: {currentAC}</li>
          <li>Armor: {ac.armor}</li>
          <li>Shield: {ac.shield}</li>
          <li>Dexterity: {ac.dexterity}</li>
          <li>Size: {ac.size}</li>
          <li>Natural: {ac.naturalArmor}</li>
          <li>Deflection: {ac.deflection}</li>
          <li>Misc: {ac.misc}</li>
        </ul>
      </div>
    </>
  );
};
export const Defense = (props) => {
  return (
    <>
      <h2 className="HPACHeading defenseHeading">Defense</h2>
      <div>
        <ul></ul>
      </div>
    </>
  );
};
export const CastingSpell = (props) => {
  const {
    selection,
    matchedSpell,
    addUsedSpell,
    displayCompendiumInfo,
  } = props;
  return (
    <>
      <button
        id="castSpell"
        className="confirmSpellButton"
        onClick={() => addUsedSpell(selection, "innate")}
      >
        Cast Spell
      </button>
      {matchedSpell !== undefined && (
        <div>{displayCompendiumInfo(matchedSpell)}</div>
      )}
    </>
  );
};
export const PreppingSpell = (props) => {
  const {
    selection,
    matchedSpell,
    addUsedSpell,
    displayCompendiumInfo,
  } = props;
  return (
    <>
      <button
        id="prepSpell"
        className="confirmSpellButton"
        onClick={() => addUsedSpell(selection, "prep")}
      >
        Prep Spell
      </button>
      {matchedSpell !== undefined && (
        <div>{displayCompendiumInfo(matchedSpell)}</div>
      )}
    </>
  );
};
export const CastingPreppedSpell = (props) => {
  const {
    selection,
    matchedSpell,
    addUsedSpell,
    removeUsedSpell,
    displayCompendiumInfo,
  } = props;
  function disableSpell(selection) {
    addUsedSpell(selection, "PreppedCast");
    removeUsedSpell(selection, "prep");
  }
  return (
    <>
      <button
        className="confirmSpellButton"
        onClick={() => disableSpell(selection)}
      >
        Use Prepped Spell
      </button>{" "}
      ||{" "}
      <button
        id="removePrepSpell"
        className="confirmSpellButton"
        onClick={() => removeUsedSpell(selection, "prep")}
      >
        Cancel Prep
      </button>
      {matchedSpell !== undefined && (
        <div>{displayCompendiumInfo(matchedSpell)}</div>
      )}
    </>
  );
};
export const UsedPreppedSpell = (props) => {
  const {
    selection,
    matchedSpell,
    addUsedSpell,
    removeUsedSpell,
    displayCompendiumInfo,
  } = props;
  function disableSpell(selection) {
    addUsedSpell(selection, "preppedCast");
    removeUsedSpell(selection, "prep");
  }
  return (
    <>
      <button
        className="confirmSpellButton"
        onClick={() => disableSpell(selection)}
        disabled
      >
        Already Used
      </button>
      {matchedSpell !== undefined && (
        <div>{displayCompendiumInfo(matchedSpell)}</div>
      )}
    </>
  );
};
