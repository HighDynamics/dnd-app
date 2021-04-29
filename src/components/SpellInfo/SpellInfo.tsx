import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

import {
  modalTypeState,
  selectionState,
  preppedSpellsState,
  innateSpellsCastState,
  preppedSpellsCastState,
  characterState,
  confirmationTypeState,
  ConfirmationType,
} from "../../recoilState";
import type { ModalType } from "../../recoilState";
import { clone, getRefInfoByCompendiumObject } from "../../utilities/utilities";
import { Modal } from "../Modal/Modal";
import {
  CastingSpell,
  PreppingSpell,
  CastingPreppedSpell,
  UsedPreppedSpell,
} from "../Modal/AllSpellInfo/AllSpellInfo";
import "./SpellInfo.css";

const SpellInfo = ({
  innate,
  onClose,
}: {
  innate: boolean;
  onClose: () => void;
}) => {
  //bring in react/recoil context
  const character = useRecoilValue(characterState);
  const selection = useRecoilValue(selectionState);
  const setConfirmationType = useSetRecoilState(confirmationTypeState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const [innateSpellsCast, setInnateSpellsCast] = useRecoilState(
    innateSpellsCastState
  );
  const [preppedSpells, setPreppedSpells] = useRecoilState(preppedSpellsState);
  const [preppedSpellsCast, setPreppedSpellsCast] = useRecoilState(
    preppedSpellsCastState
  );

  const renderConfirmation = (confirmationType: ConfirmationType) => {
    setConfirmationType(confirmationType);
    setTimeout(() => setConfirmationType("off"), 3000);
  };

  const addUsedSpell = (selection: ISpell) => (e) => {
    const level: number = getRefInfoByCompendiumObject(
      selection,
      character
    )("level");
    if (innate === true) {
      const newArray = clone(innateSpellsCast);
      newArray[level].push(selection);
      setInnateSpellsCast(newArray);
      setModalType("Off");
      renderConfirmation("castSpell");
    } else if (e.target.id === "usePreppedSpell") {
      const newArray = clone(preppedSpellsCast);
      newArray[level].push(selection);
      setPreppedSpellsCast(newArray);
      setModalType("Off");
      renderConfirmation("castSpell");
    } else if (innate === false) {
      const newArray = clone(preppedSpells);
      newArray[level].push(selection);
      setPreppedSpells(newArray);
      setModalType("Off");
      renderConfirmation("prepSpell");
    }
  };

  const removeUsedSpell = (selection: ISpell) => () => {
    const level = getRefInfoByCompendiumObject(selection, character)("level");
    if (innate === true) {
      const newArray = clone(innateSpellsCast);
      const used = newArray[level].findIndex((item) => {
        return item === selection;
      });
      newArray[level].splice(used, 1);
      setInnateSpellsCast(newArray);
    } else if (innate === false) {
      const newArray = clone(preppedSpells);
      const used = newArray[level].findIndex(
        (item) => item.id === selection.id
      );
      newArray[level].splice(used, 1);
      setPreppedSpells(newArray);
      setModalType("Off");
    }
  };
  function chooseModal(modalType: ModalType) {
    switch (modalType) {
      case "Prep":
        return (
          <PreppingSpell selection={selection} addUsedSpell={addUsedSpell} />
        );
      case "Cast":
        return (
          <CastingSpell selection={selection} addUsedSpell={addUsedSpell} />
        );
      case "CastPrepped":
        return (
          <CastingPreppedSpell
            selection={selection}
            addUsedSpell={addUsedSpell}
            removeUsedSpell={removeUsedSpell}
            renderConfirmation={renderConfirmation}
          />
        );
      case "UsedPrepped":
        return (
          <UsedPreppedSpell
            selection={selection}
            addUsedSpell={addUsedSpell}
            removeUsedSpell={removeUsedSpell}
          />
        );
      default:
        return null;
    }
  }
  return <Modal onClose={onClose}>{chooseModal(modalType)}</Modal>;
};

export default SpellInfo;
