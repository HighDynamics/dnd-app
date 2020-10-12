import React from "react";
import { useRecoilValue } from "recoil";

import Items from "../Items/Items.js";
import SLAs from "../SLAs/SLAs.js";
import ActiveAbilities from "../ActiveAbilities/ActiveAbilities.js";
import SpellInfo from "../SpellInfo/SpellInfo.js";
import PrepSpells from "../PrepSpells/PrepSpells.js";
import Spells from "../Spells/Spells.js";
import PassiveAbilities from "../PassiveAbilities/PassiveAbilities.js";
import AbilityScores from "../AbilityScores/AbilityScores.js";
import Skills from "../Skills/Skills.js";

import { mainContentState, modalTypeState } from "../../recoilState.js";

import "./MainDisplay.css";

const MainDisplay = (props) => {
  const modalType = useRecoilValue(modalTypeState);
  const mainContent = useRecoilValue(mainContentState);
  function screenSwitch(display) {
    switch (display) {
      case "Skills":
        return <Skills />;
      case "Scores":
        return <AbilityScores />;
      case "Passive":
        return <PassiveAbilities />;
      case "Spells":
        return <Spells />;
      case "Abilities":
        return <ActiveAbilities />;
      case "SLAs":
        return <SLAs />;
      case "Prep":
        return <PrepSpells />;
      case "Items":
        return <Items />;
      default:
        return <Skills />;
    }
  }
  function infoSheet(modalType) {
    switch (modalType) {
      case "Cast":
      case "Prep":
      case "CastPrepped":
      case "UsedPrepped":
        return <SpellInfo />;
      case "Off":
        return null;
      default:
        return null;
    }
  }
  return (
    <div>
      <hr />
      <div id="infoSheet">{infoSheet(modalType)}</div>
      <div id="mainContent">
        {screenSwitch(mainContent)}
        <div className="bottomGradient"></div>
      </div>
    </div>
  );
};

export default MainDisplay;
