import React, { useContext } from "react";
import { Character, ToggleInfo, Selection } from "./dnd.js";
import Compendium from "../spells/spell-compendium.js";

const CompendiumSpell = props => {
  function removeNameKey(input) {
    if (input == "name:") {
      return "";
    } else {
      return input;
    }
  }
  return (
    <div>
      {removeNameKey(props.property + ":")} {props.value}
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
