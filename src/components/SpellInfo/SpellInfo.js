import React, { useContext } from "react";
import { Character, ToggleInfo, Selection } from "../dnd.js";
import Compendium from "../../spells/spell-compendium.js";
import "./SpellInfo.css";

const CompendiumSpell = props => {
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
const SpellInfo = props => {
  //bring in react context
  const character = useContext(Character);
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
  const [selection] = useContext(Selection);
  //edit string for render
  const formattedSpell = selection.replace(/_/g, " ");
  function getSpellLevel(selection) {
    let foundLevel = null;
    Object.keys(character.magic.spells).forEach(level => {
      if (Object.values(character.magic.spells[level]).includes(selection)) {
        foundLevel = level;
      }
    });
    return foundLevel;
  }
  const matchedSpell = Compendium.spells.find(({ name }) => name === selection);
  function displayCompendiumInfo(spellObject) {
    const spellKeys = Object.keys(spellObject);
    const compendiumInfo = spellKeys.map(key => {
      return (
        <CompendiumSpell key={key} property={key} value={matchedSpell[key]} />
      );
    });
    return compendiumInfo;
  }
  return (
    <div id="spellInfo" className="infoSheet">
      <button id="useSpell">Use Spell</button>
      <button id="closeButton" onClick={() => setToggleInfo("Off")}>
        x
      </button>
      {matchedSpell !== undefined && (
        <div>{displayCompendiumInfo(matchedSpell)}</div>
      )}
    </div>
  );
};

export default SpellInfo;
