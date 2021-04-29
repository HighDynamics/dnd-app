import { useRecoilValue } from "recoil";
import {
  characterState,
  ConfirmationType,
  confirmationTypeState,
  selectionState,
} from "../../recoilState";

import "./SubmitConfirm.css";

const SubmitConfirm = () => {
  const character = useRecoilValue(characterState);
  const selection = useRecoilValue(selectionState);
  const confirmationType = useRecoilValue(confirmationTypeState);
  const displayConfirmation = (confirmationType: ConfirmationType) => {
    switch (confirmationType) {
      case "castSpell":
        return <>{selection.name} was cast.</>;
      case "prepSpell":
        return <>{selection.name} was prepped.</>;
      case "addSpell":
        return <>{selection.name} was added.</>;
      case "cancelSpell":
        return <>{selection.name} was cancelled.</>;
      case "updateCharacter":
        return <>{character.name} was updated.</>;
      case "updateSkill":
        return <>Skill was updated.</>;
      case "addSkill":
        return <>Skill was added.</>;
      case "fullRest":
        return <>Rested. Spell slots restored.</>;
      case "off":
        return null;
      default:
        return null;
    }
  };
  return (
    <div className="confirmationBox">
      <p className="confirmationText">
        {displayConfirmation(confirmationType)}
      </p>
    </div>
  );
};
export default SubmitConfirm;
