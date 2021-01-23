import { useRecoilValue } from "recoil";

import { spellCompendiumState } from "../../../recoilState";
import { displayCompendiumInfo } from "../../../utilities/utilities";
import "./AllSpellInfo.css";

export const CastingSpell = (props: {
  selection: ISpell;
  addUsedSpell: (selection: ISpell) => void;
}) => {
  const { selection, addUsedSpell } = props;
  const castSpell = addUsedSpell(selection);
  return (
    <>
      <button id="castSpell" className="confirmSpellButton" onClick={castSpell}>
        Cast Spell
      </button>
      <div>{displayCompendiumInfo(selection)}</div>
    </>
  );
};
export const PreppingSpell = (props: {
  selection: ISpell;
  addUsedSpell: (selection: ISpell) => void;
}) => {
  const { selection, addUsedSpell } = props;
  const prepSpell = addUsedSpell(selection);

  return (
    <>
      <button id="prepSpell" className="confirmSpellButton" onClick={prepSpell}>
        Prep Spell
      </button>
      <div>{displayCompendiumInfo(selection)}</div>
    </>
  );
};
export const CastingPreppedSpell = (props: {
  selection: ISpell;
  addUsedSpell: (selection: ISpell) => string;
  removeUsedSpell: (selection: ISpell, type: "prep") => void;
}) => {
  const { selection, addUsedSpell, removeUsedSpell } = props;
  const addSpell = addUsedSpell(selection);
  const removeSpell = removeUsedSpell(selection);
  const usePreppedSpell = (e) => {
    addSpell(e);
    removeSpell(e);
  };
  return (
    <>
      <button
        id="usePreppedSpell"
        className="confirmSpellButton"
        onClick={usePreppedSpell}
      >
        Use Prepped Spell
      </button>{" "}
      ||{" "}
      <button
        id="removePreppedSpell"
        className="confirmSpellButton"
        onClick={removeSpell}
      >
        Cancel Prep
      </button>
      <div>{displayCompendiumInfo(selection)}</div>
    </>
  );
};
export const UsedPreppedSpell = (props: {
  selection: ISpell;
  addUsedSpell: (selection: ISpell, type: "preppedCast") => void;
  removeUsedSpell: (selection: ISpell, type: "prep") => void;
}) => {
  const { selection } = props;
  return (
    <>
      <button className="confirmSpellButton" disabled>
        Already Used
      </button>
      <div>{displayCompendiumInfo(selection)}</div>
    </>
  );
};
