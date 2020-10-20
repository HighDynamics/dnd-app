import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import Items from "../Items/Items.js";
import SLAs from "../SLAs/SLAs.js";
import { Modal } from "../Modal/Modal";
import ActiveAbilities from "../ActiveAbilities/ActiveAbilities.js";
import SpellInfo from "../SpellInfo/SpellInfo.js";
import AbilityScores from "../Modal/AbilityScores/AbilityScores";
import HitPointInfo from "../Modal/HitPointInfo/HitPointInfo";
import ArmorClassInfo from "../Modal/ArmorClassInfo/ArmorClassInfo";
import DefenseInfo from "../Modal/DefenseInfo/DefenseInfo";
import PrepSpells from "../PrepSpells/PrepSpells.js";
import Spells from "../Spells/Spells.js";
import PassiveAbilities from "../PassiveAbilities/PassiveAbilities.js";
import Skills from "../Skills/Skills.js";

import { mainContentState, modalTypeState } from "../../recoilState.js";

import "./MainDisplay.css";

const MainDisplay = (props) => {
  const [modalType, setModalType] = useRecoilState(modalTypeState);
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
      case "HP":
        return (
          <Modal onClose={() => setModalType("Off")}>
            <HitPointInfo />
            <AbilityScores />
          </Modal>
        );
      case "Defense":
        return (
          <Modal onClose={() => setModalType("Off")}>
            <ArmorClassInfo />
            <DefenseInfo />
          </Modal>
        );
      case "Off":
        return null;
      default:
        return null;
    }
  }
  return (
    <div>
      <hr className="underNavbar" />
      <div id="infoSheet">{infoSheet(modalType)}</div>
      <div id="mainContent">{screenSwitch(mainContent)}</div>
    </div>
  );
};

export default MainDisplay;
