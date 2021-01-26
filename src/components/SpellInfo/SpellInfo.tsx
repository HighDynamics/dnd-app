import { useRecoilValue, useRecoilState } from "recoil";

import {
  modalTypeState,
  selectionState,
  preppedSpellsState,
  innateSpellsCastState,
  preppedSpellsCastState,
  characterState,
} from "../../recoilState";
import type { ModalType } from "../../recoilState";
import { clone, getSpellRefInfo } from "../../utilities/utilities";
import { Modal } from "../Modal/Modal";
import {
  CastingSpell,
  PreppingSpell,
  CastingPreppedSpell,
  UsedPreppedSpell,
} from "../Modal/AllSpellInfo/AllSpellInfo";
import "./SpellInfo.css";

export const CompendiumSpell = ({
  property,
  value,
}: {
  property: string;
  value: string;
}) => {
<<<<<<< HEAD
  function formatProperty(string: typeof property) {
    switch (string) {
      case "name":
      case "school":
      case "subSchool":
      case "descriptor":
=======
  function formatProperty(input: typeof property) {
    switch (input) {
      case "name:":
      case "school:":
>>>>>>> e1fc9ff3b0e04ed3bae3b394efb2e2b17fb8d53a
        return "";
      case "description":
        return <hr id="spellSheetHR" />;
      default:
        const spacedProperty = string.replace(/([A-Z])/g, " $1").trim();
        return spacedProperty + ": ";
    }
  }
  const formatValue = (string: typeof property) => {
    switch (string) {
      case "subSchool":
        return "(" + value + ")";
      case "descriptor":
        return "[" + value + "]";
      default:
        return value;
    }
  };
  const formattedProperty = formatProperty(property);
  const formattedValue = formatValue(property);

  return (
    <>
      {property !== "id" && (
        <div className={"infoSheetContent " + property}>
          <span className="property">{formattedProperty}</span>
          <span className="value">{formattedValue}</span>
        </div>
      )}
    </>
  );
};

<<<<<<< HEAD
=======
const lvlConversion = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

>>>>>>> e1fc9ff3b0e04ed3bae3b394efb2e2b17fb8d53a
const SpellInfo = ({ innate }: { innate: boolean }) => {
  //bring in react/recoil context
  const character = useRecoilValue(characterState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const selection = useRecoilValue(selectionState);
  const [innateSpellsCast, setInnateSpellsCast] = useRecoilState(
    innateSpellsCastState
  );
  const [preppedSpells, setPreppedSpells] = useRecoilState(preppedSpellsState);
  const [preppedSpellsCast, setPreppedSpellsCast] = useRecoilState(
    preppedSpellsCastState
  );
  const addUsedSpell = (selection: ISpell) => (e) => {
    const level: number = getSpellRefInfo(selection, character)("level");
    if (innate === true) {
      const newArray = clone(innateSpellsCast);
      newArray[level].push(selection);
      setInnateSpellsCast(newArray);
      setModalType("Off");
      return console.log("Innate spell logged");
    } else if (e.target.id === "usePreppedSpell") {
      const newArray = clone(preppedSpellsCast);
      newArray[level].push(selection);
      setPreppedSpellsCast(newArray);
      setModalType("Off");
      return console.log("Casted prepped spell logged");
    } else if (innate === false) {
      const newArray = clone(preppedSpells);
      newArray[level].push(selection);
      setPreppedSpells(newArray);
      setModalType("Off");
      return console.log("Prepped spell logged");
    }
  };

  const removeUsedSpell = (selection: ISpell) => () => {
    const level = getSpellRefInfo(selection, character)("level");
    if (innate === true) {
      const newArray = clone(innateSpellsCast);
      const used = newArray[level].findIndex((item) => {
        return item === selection;
      });
      newArray[level].splice(used, 1);
      setInnateSpellsCast(newArray);
      return console.log("Innate spell removed");
    } /*else if (e.id === "removePreppedSpell") {
      const newArray = clone(preppedSpellsCast);
      const used = newArray[level].findIndex((item) => {
        return item === selection;
      });
      newArray[level].splice(used, 1);
      setPreppedSpellsCast(newArray);
      return console.log("prepped spell was removed");
    }*/ else if (
      innate === false
    ) {
      const newArray = clone(preppedSpells);
      const used = newArray[level].findIndex(
        (item) => item.id === selection.id
      );
      newArray[level].splice(used, 1);
      setPreppedSpells(newArray);
      setModalType("Off");
      console.log("A prepped spell was removed");
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
  return (
    <Modal onClose={() => setModalType("Off")}>{chooseModal(modalType)}</Modal>
  );
};

export default SpellInfo;
