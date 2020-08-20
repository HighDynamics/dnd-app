import React, { useState, useContext } from "react";

import Items from "../Items/Items.js";
import SLAs from "../SLAs/SLAs.js";
import ActiveAbilities from "../ActiveAbilities/ActiveAbilities.js";
import SpellInfo from "../SpellInfo/SpellInfo.js";
import PrepSpells from "../PrepSpells/PrepSpells.js";
import Spells from "../Spells/Spells.js";
import PassiveAbilities from "../PassiveAbilities/PassiveAbilities.js";
import AbilityScores from "../AbilityScores/AbilityScores.js";
import Skills from "../Skills/Skills.js";

import { ToggleInfo, GetSetDisplayTwo, Selection } from "../dnd.js";

import "./MainDisplay.css";

const MainDisplay = props => {
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
  const [displayTwo] = useContext(GetSetDisplayTwo);
  const [selection, setSelection] = useState("");
  //for use in child components
  const [innateSpellsCast, castSpell] = useState({
    zero: [],
    one: [],
    two: [],
    three: [],
    four: [],
    five: [],
    six: [],
    seven: [],
    eight: [],
    nine: []
  });
  const [preparedSpells, prepareSpell] = useState({
    zero: [],
    one: [],
    two: [],
    three: [],
    four: [],
    five: [],
    six: [],
    seven: [],
    eight: [],
    nine: []
  });
  function screenSwitch(display) {
    switch (display) {
      case "Skills":
        return <Skills />;
      case "Scores":
        return <AbilityScores />;
      case "Passive":
        return <PassiveAbilities />;
      case "Spells":
        return (
          <Spells
            innateSpellsCast={innateSpellsCast}
            preparedSpells={preparedSpells}
          />
        );
      case "Abilities":
        return <ActiveAbilities />;
      case "SLAs":
        return <SLAs />;
      case "Prep":
        return (
          <PrepSpells
            innateSpellsCast={innateSpellsCast}
            preparedSpells={preparedSpells}
          />
        );
      case "Items":
        return <Items />;
      default:
        return <Skills />;
    }
  }
  function infoSheet(toggleInfo) {
    switch (toggleInfo) {
      case "Spell":
        return (
          <SpellInfo
            innateSpellsCast={innateSpellsCast}
            castSpell={castSpell}
            prepareSpell={prepareSpell}
          />
        );
      case "Off":
        return null;
      default:
        return null;
    }
  }
  return (
    <div>
      <Selection.Provider value={[selection, setSelection]}>
        <hr />
        <div id="infoSheet">{infoSheet(toggleInfo)}</div>
        <div id="mainContent">
          {screenSwitch(displayTwo)}
          <div className="bottomGradient"></div>
        </div>
      </Selection.Provider>
    </div>
  );
};

export default MainDisplay;
