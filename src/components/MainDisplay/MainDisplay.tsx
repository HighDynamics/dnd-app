import { useRecoilValue, useRecoilState } from "recoil";

import Items from "../Items/Items";
import SLAs from "../SLAs/SLAs";
import { Modal } from "../Modal/Modal";
import ActiveAndPassiveAbilities from "../ActiveAndPassiveAbilities/ActiveAndPassiveAbilities";
import SpellInfo from "../SpellInfo/SpellInfo";
import AbilityScores from "../Modal/AbilityScores/AbilityScores";
import HitPointInfo from "../Modal/HitPointInfo/HitPointInfo";
import ArmorClassInfo from "../Modal/ArmorClassInfo/ArmorClassInfo";
import DefenseInfo from "../Modal/DefenseInfo/DefenseInfo";
import Spells from "../Spells/Spells";
import Skills from "../Skills/Skills";
import Attacks from "../Attacks/Attacks";
import More from "../More/More";
import EditSkills from "../Edit/EditSkills/EditSkills";
import EditAbilities from "../Edit/EditAbilities/EditAbilities";
import EditSLAs from "../Edit/EditMagic/EditSLAs/EditSLAs";
import EditAttacks from "../Edit/EditAttacks/EditAttacks";
import EditMagic from "../Edit/EditMagic/EditMagic";
import EditItems from "../Edit/EditItems/EditItems";
import EditCore from "../Edit/EditCore/EditCore";
import AddCharacter from "../AddCharacter/AddCharacter";
import AbilityInfo from "../Modal/AbilityInfo/AbilityInfo";
import SLAInfo from "../Modal/SLAInfo/SLAInfo";
import ItemInfo from "../Modal/ItemInfo/ItemInfo";
import ChangeCharacter from "../ChangeCharacter/ChangeCharacter";
import ConfirmationModal from "../Modal/ConfirmationModal/ConfirmationModal";
import SubmitConfirm from "../SubmitConfirm/SubmitConfirm";

import {
  mainContentState,
  modalTypeState,
  confirmationTypeState,
} from "../../recoilState";
import type { ModalType, MainContent } from "../../recoilState";

import "./MainDisplay.css";

const MainDisplay = () => {
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const confirmationType = useRecoilValue(confirmationTypeState);
  const mainContent = useRecoilValue(mainContentState);
  function screenSwitch(display: MainContent) {
    switch (display) {
      case "Skills":
        return <Skills />;
      case "Scores":
        return <AbilityScores />;
      case "Attacks":
        return <Attacks />;
      case "More":
        return <More />;
      case "Spells":
        return <Spells innate={true} />;
      case "Abilities":
        return <ActiveAndPassiveAbilities />;
      case "SLAs":
        return <SLAs />;
      case "Prep":
        return <Spells innate={false} />;
      case "Items":
        return <Items />;
      case "EditSkills":
        return <EditSkills />;
      case "EditAbilities":
        return <EditAbilities />;
      case "EditMagic":
        return <EditMagic />;
      case "EditSLAs":
        return <EditSLAs />;
      case "EditAttacks":
        return <EditAttacks />;
      case "EditItems":
        return <EditItems />;
      case "EditCore":
        return <EditCore />;
      case "AddCharacter":
        return <AddCharacter />;
      case "ChangeCharacter":
        return <ChangeCharacter />;
      default:
        return <Skills />;
    }
  }
  const modalFade = (animationState: () => void) => {
    setTimeout(() => setModalType("Off"), 1000);
    animationState();
  };
  function infoSheet(modalType: ModalType) {
    switch (modalType) {
      case "Cast":
        return <SpellInfo innate={true} onClose={modalFade} />;
      case "Prep":
      case "CastPrepped":
        return <SpellInfo innate={false} onClose={modalFade} />;
      case "UsedPrepped":
        return <SpellInfo innate={false} onClose={modalFade} />;
      case "HP":
        return (
          <Modal onClose={modalFade}>
            <HitPointInfo />
            <AbilityScores />
          </Modal>
        );
      case "Defense":
        return (
          <Modal onClose={modalFade}>
            <ArmorClassInfo />
            <DefenseInfo />
          </Modal>
        );
      case "Abilities":
        return (
          <Modal onClose={modalFade}>
            <AbilityInfo />
          </Modal>
        );
      case "SLA":
        return (
          <Modal onClose={modalFade}>
            <SLAInfo />
          </Modal>
        );
      case "Item":
        return (
          <Modal onClose={modalFade}>
            <ItemInfo />
          </Modal>
        );
      case "ConfirmationCharacterSpell":
        return (
          <Modal onClose={modalFade}>
            <ConfirmationModal type="CharacterSpell" />
          </Modal>
        );
      case "Off":
        return null;
      default:
        return null;
    }
  }
  return (
    <>
      <hr className="underNavbar" />
      {confirmationType !== "off" && <SubmitConfirm />}
      <div className="infoSheet">{infoSheet(modalType)}</div>
      <div>
        {screenSwitch(mainContent)}
        <div className="bottomPadding"></div>
      </div>
    </>
  );
};

export default MainDisplay;
