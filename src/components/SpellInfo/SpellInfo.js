import React, { useContext } from "react";
import { useRecoilValue } from "recoil";

import { mainContentState } from "../../recoilState.js";
import { Modal } from "../Modal/Modal";
import { Character, ToggleInfo, Selection, Compendium } from "../dnd.js";
import "./SpellInfo.css";

const CompendiumSpell = (props) => {
  const property = props.property;
  const value = props.value;
  function formatProperty(input) {
    switch (input) {
      case "name:":
      case "type:":
        return "";
        break;
      case "description:":
        return <hr id="spellSheetHR" />;
        break;
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
  //bring in react context
  const compendium = useContext(Compendium);
  const character = useContext(Character);
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
  const [selection] = useContext(Selection);
  const mainContent = useRecoilValue(mainContentState);
  //edit string for render
  const formattedSpell = selection.replace(/_/g, " ");
  function getSpellLevel(selection) {
    let foundLevel = null;
    Object.keys(character.magic.spells).forEach((level) => {
      if (Object.values(character.magic.spells[level]).includes(selection)) {
        foundLevel = level;
      }
    });
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

  return (
    <Modal onClose={() => setToggleInfo("Off")}>
      {mainContent == "Prep" ? (
        <button id="prepSpell" className="confirmSpellButton">
          Prep Spell
        </button>
      ) : (
        <button
          id="castSpell"
          className="confirmSpellButton"
          onClick={() => null}
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
