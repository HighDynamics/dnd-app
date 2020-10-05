import React, { useContext } from "react";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

import {
  mainContentState,
  toggleInfoState,
  selectionState,
  preppedSpellsState,
  innateSpellsCastState,
} from "../../recoilState.js";
import { Modal } from "../Modal/Modal";
import { Character, Compendium } from "../dnd.js";
import "./SpellInfo.css";

const CompendiumSpell = (props) => {
  const property = props.property;
  const value = props.value;
  function formatProperty(input) {
    switch (input) {
      case "name:":
      case "type:":
        return "";
      case "description:":
        return <hr id="spellSheetHR" />;
      default:
        const spacedProperty = input.replace(/([A-Z])/g, " $1").trim();
        return spacedProperty;
    }
  }
  const formattedValue = value.replace(/_/g, " ");

  return (
    <div className="infoSheetContent" id={property}>
      <span className="property">{formatProperty(property + ":")} </span>
      <span className="value">{formattedValue}</span>
    </div>
  );
};

const SpellInfo = (props) => {
  //bring in react/recoil context
  const compendium = useContext(Compendium);
  const character = useContext(Character);
  const setToggleInfo = useSetRecoilState(toggleInfoState);
  const selection = useRecoilValue(selectionState);
  const mainContent = useRecoilValue(mainContentState);
  const [innateSpellsCast, setInnateSpellsCast] = useRecoilState(
    innateSpellsCastState
  );
  const [preppedSpells, setPreppedSpells] = useRecoilState(preppedSpellsState);
  //edit string for render
  const formattedSpell = selection.replace(/_/g, " ");
  function getSpellLevel(selection, innateOrPrep) {
    let foundLevel = null;
    if (innateOrPrep === "innate") {
      Object.keys(character.magic.spells).forEach((level) => {
        if (Object.values(character.magic.spells[level]).includes(selection)) {
          foundLevel = level;
        }
      });
    } else {
      Object.keys(character.magic.spellbook).forEach((level) => {
        if (
          Object.values(character.magic.spellbook[level]).includes(selection)
        ) {
          foundLevel = level;
        }
      });
    }
    return foundLevel;
  }
  const matchedSpell = compendium.spells.find(({ name }) => name === selection);
  function displayCompendiumInfo(spellObject) {
    const spellKeys = Object.keys(spellObject);
    const compendiumInfo = spellKeys.map((key) => {
      return (
        <CompendiumSpell key={key} property={key} value={matchedSpell[key]} />
      );
    });
    return compendiumInfo;
  }
  const lvlConversion = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  function addUsedSpell(selection, innateOrPrep) {
    const levelString = getSpellLevel(selection, innateOrPrep);
    //assign a number from string
    const level = lvlConversion[levelString];
    if (innateOrPrep === "innate") {
      const newArray = innateSpellsCast.map((s) => Object.assign([], s));
      newArray[level].push(selection);
      setInnateSpellsCast(newArray);
    } else {
      const newArray = preppedSpells.map((s) => Object.assign([], s));
      newArray[level].push(selection);
      setPreppedSpells(newArray);
    }
  }
  return (
    <Modal onClose={() => setToggleInfo("Off")}>
      {mainContent === "Prep" ? (
        <button
          id="prepSpell"
          className="confirmSpellButton"
          onClick={() => addUsedSpell(selection, "prep")}
        >
          Prep Spell
        </button>
      ) : (
        <button
          id="castSpell"
          className="confirmSpellButton"
          onClick={() => addUsedSpell(selection, "innate")}
        >
          Cast Spell
        </button>
      )}
      {matchedSpell !== undefined && (
        <div>{displayCompendiumInfo(matchedSpell)}</div>
      )}
    </Modal>
  );
};

export default SpellInfo;
