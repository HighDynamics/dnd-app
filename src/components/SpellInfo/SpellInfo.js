import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import {
  modalTypeState,
  selectionState,
  preppedSpellsState,
  innateSpellsCastState,
  preppedSpellsCastState,
  characterState,
  compendiumState,
} from "../../recoilState.js";
import { clone } from "../../utilities/utilities.js";
import { Modal } from "../Modal/Modal";
import {
  CastingSpell,
  PreppingSpell,
  CastingPreppedSpell,
  UsedPreppedSpell,
} from "../Modal/ModalContent/ModalContent";
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
  const compendium = useRecoilValue(compendiumState);
  const character = useRecoilValue(characterState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const selection = useRecoilValue(selectionState);
  const [innateSpellsCast, setInnateSpellsCast] = useRecoilState(
    innateSpellsCastState
  );
  const [preppedSpells, setPreppedSpells] = useRecoilState(preppedSpellsState);
  const [preppedSpellsCast, setPreppedSpellsCast] = useRecoilState(
    preppedSpellsCastState
  );
  function getSpellLevel(selection, innatePrepOrPrepped) {
    let foundLevel = null;
    if (innatePrepOrPrepped === "innate") {
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
  function addUsedSpell(selection, innatePrepOrPrepped) {
    const levelString = getSpellLevel(selection, innatePrepOrPrepped);
    //assign a number from string
    const level = lvlConversion[levelString];
    if (innatePrepOrPrepped === "innate") {
      const newArray = clone(innateSpellsCast);
      newArray[level].push(selection);
      setInnateSpellsCast(newArray);
    } else if (innatePrepOrPrepped === "prep") {
      const newArray = clone(preppedSpells);
      newArray[level].push(selection);
      setPreppedSpells(newArray);
    } else {
      const newArray = clone(preppedSpellsCast);
      newArray[level].push(selection);
      setPreppedSpellsCast(newArray);
    }
  }
  function removeUsedSpell(selection, innatePrepOrPrepped) {
    const levelString = getSpellLevel(selection, innatePrepOrPrepped);
    //assign a number from string
    const level = lvlConversion[levelString];
    if (innatePrepOrPrepped === "innate") {
      const newArray = clone(innateSpellsCast);
      const used = newArray[level].findIndex((item) => {
        return item === selection;
      });
      newArray[level].splice(used, 1);
      setInnateSpellsCast(newArray);
    } else if (innatePrepOrPrepped === "prep") {
      const newArray = clone(preppedSpells);
      const used = newArray[level].findIndex((item) => {
        return item === selection;
      });
      newArray[level].splice(used, 1);
      setPreppedSpells(newArray);
    } else {
      const newArray = clone(preppedSpellsCast);
      const used = newArray[level].findIndex((item) => {
        return item === selection;
      });
      newArray[level].splice(used, 1);
      setPreppedSpellsCast(newArray);
    }
  }
  function chooseModal(modalType) {
    switch (modalType) {
      case "Prep":
        return (
          <PreppingSpell
            selection={selection}
            addUsedSpell={addUsedSpell}
            removeUsedSpell={removeUsedSpell}
            displayCompendiumInfo={displayCompendiumInfo}
            matchedSpell={matchedSpell}
          />
        );
      case "Cast":
        return (
          <CastingSpell
            selection={selection}
            addUsedSpell={addUsedSpell}
            removeUsedSpell={removeUsedSpell}
            displayCompendiumInfo={displayCompendiumInfo}
            matchedSpell={matchedSpell}
          />
        );
      case "CastPrepped":
        return (
          <CastingPreppedSpell
            selection={selection}
            addUsedSpell={addUsedSpell}
            removeUsedSpell={removeUsedSpell}
            displayCompendiumInfo={displayCompendiumInfo}
            matchedSpell={matchedSpell}
          />
        );
      case "UsedPrepped":
        return (
          <UsedPreppedSpell
            selection={selection}
            addUsedSpell={addUsedSpell}
            removeUsedSpell={removeUsedSpell}
            displayCompendiumInfo={displayCompendiumInfo}
            matchedSpell={matchedSpell}
          />
        );
      default:
        return null;
    }
  }
  return (
    <Modal onClose={() => setModalType("Off")}>{chooseModal(modalType)}</Modal>
  );
};

export default SpellInfo;
