import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import Items from "../Items/Items.js";
import SLAs from "../SLAs/SLAs.js";
import { Modal } from "../Modal/Modal";
import ActiveAndPassiveAbilities from "../ActiveAndPassiveAbilities/ActiveAndPassiveAbilities.js";
import SpellInfo from "../SpellInfo/SpellInfo.js";
import AbilityScores from "../Modal/AbilityScores/AbilityScores";
import HitPointInfo from "../Modal/HitPointInfo/HitPointInfo";
import ArmorClassInfo from "../Modal/ArmorClassInfo/ArmorClassInfo";
import DefenseInfo from "../Modal/DefenseInfo/DefenseInfo";
import PrepSpells from "../PrepSpells/PrepSpells.js";
import Spells from "../Spells/Spells.js";
import Skills from "../Skills/Skills.js";
import Attacks from "../Attacks/Attacks";
import AbilityInfo from "../Modal/AbilityInfo/AbilityInfo";
import SLAInfo from "../Modal/SLAInfo/SLAInfo";
import ItemInfo from "../Modal/ItemInfo/ItemInfo";

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
      case "Attacks":
        return <Attacks />;
      case "Spells":
        return <Spells />;
      case "Abilities":
        return <ActiveAndPassiveAbilities />;
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
      case "Abilities":
        return (
          <Modal onClose={() => setModalType("Off")}>
            <AbilityInfo />
          </Modal>
        );
      case "SLA":
        return (
          <Modal onClose={() => setModalType("Off")}>
            <SLAInfo />
          </Modal>
        );
      case "Item":
        return (
          <Modal onClose={() => setModalType("Off")}>
            <ItemInfo />
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
