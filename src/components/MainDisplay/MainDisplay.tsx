import { useRecoilValue, useRecoilState } from "recoil";

import Items from "../Items/Items";
import { Modal } from "../Modal/Modal";
import ActiveAndPassiveAbilities from "../ActiveAndPassiveAbilities/ActiveAndPassiveAbilities";
import AbilityScores from "../Modal/AbilityScores/AbilityScores";
import HitPointInfo from "../Modal/HitPointInfo/HitPointInfo";
import ArmorClassInfo from "../Modal/ArmorClassInfo/ArmorClassInfo";
import DefenseInfo from "../Modal/DefenseInfo/DefenseInfo";
import { Spells } from "../Spells";
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
import ItemInfo from "../Modal/ItemInfo/ItemInfo";
import ChangeCharacter from "../ChangeCharacter/ChangeCharacter";
import ConfirmationModal from "../Modal/ConfirmationModal/ConfirmationModal";
import { ActionToast } from "../ActionToast";

import { mainContentState, modalTypeState } from "../../recoilState";
import type { ModalType, MainContent } from "../../recoilState";

import { FadedSeparator } from "../FadedSeparator";

const MainDisplay = () => {
  const [modalType, setModalType] = useRecoilState(modalTypeState);
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
        return <Spells />;
      case "Abilities":
        return <ActiveAndPassiveAbilities />;
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
      <FadedSeparator className="mt-2 h-[2px]" />
      <ActionToast />
      <div className="infoSheet">{infoSheet(modalType)}</div>
      <div>{screenSwitch(mainContent)}</div>
    </>
  );
};

export default MainDisplay;
