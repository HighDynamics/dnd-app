import { useRecoilValue } from "recoil";
import {
  characterState,
  ConfirmationType,
  confirmationTypeState,
  selectionState,
} from "../../recoilState";

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
    <div className="fixed left-1/2 top-1/2 z-50 h-10 w-4/5 -translate-x-1/2 bg-stone-100 outline outline-4 outline-fuchsia-300">
      <p className="text-center text-amber-900">
        {displayConfirmation(confirmationType)}
      </p>
    </div>
  );
};
export default SubmitConfirm;
