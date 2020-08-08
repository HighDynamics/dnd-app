import React, { useContext } from "react";
import { Character, ToggleInfo, Selection } from "./dnd.js";

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
  return (
    <div id="spellInfo" className="infoSheet">
      <button id="useSpell">Use Spell</button>
      <button id="closeButton" onClick={() => setToggleInfo("Off")}>
        x
      </button>
      <h3>{formattedSpell}</h3>
      Level: {getSpellLevel(selection)}
      <br />
      Components:
      <br />
      Casting Time:
      <br />
      Range:
      <br />
      Target or Area:
      <br />
      Duration:
      <br />
      Saving Throw:
      <br />
      SpellResistance:
      <br />
    </div>
  );
};

export default SpellInfo;
