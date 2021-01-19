import { useRecoilValue } from "recoil";

import { spellCompendiumState } from "../../../recoilState";
import { displayCompendiumInfo } from "../../../utilities/utilities";
import "./AllSpellInfo.css";

export const CastingSpell = (props: {
  selection: string;
  addUsedSpell: (selection: {}, type: "innate") => void;
}) => {
  const { selection, addUsedSpell } = props;
  return (
    <>
      <button
        id="castSpell"
        className="confirmSpellButton"
        onClick={() => addUsedSpell(selection.name, "innate")}
      >
        Cast Spell
      </button>
      <div>{displayCompendiumInfo(selection)}</div>
    </>
  );
};
export const PreppingSpell = (props: {
  selection: string;
  addUsedSpell: (selection: string, type: "prep") => void;
}) => {
  const { selection, addUsedSpell } = props;
  return (
    <>
      <button
        id="prepSpell"
        className="confirmSpellButton"
        onClick={() => addUsedSpell(selection.name, "prep")}
      >
        Prep Spell
      </button>
      <div>{displayCompendiumInfo(selection)}</div>
    </>
  );
};
export const CastingPreppedSpell = (props: {
  selection: string;
  addUsedSpell: (selection: string, type: "PreppedCast") => void;
  removeUsedSpell: (selection: string, type: "prep") => void;
}) => {
  const { selection, addUsedSpell, removeUsedSpell } = props;
  function disableSpell(selection: string) {
    addUsedSpell(selection, "PreppedCast");
    removeUsedSpell(selection, "prep");
  }
  return (
    <>
      <button
        className="confirmSpellButton"
        onClick={() => disableSpell(selection.name)}
      >
        Use Prepped Spell
      </button>{" "}
      ||{" "}
      <button
        id="removePrepSpell"
        className="confirmSpellButton"
        onClick={() => removeUsedSpell(selection.name, "prep")}
      >
        Cancel Prep
      </button>
      <div>{displayCompendiumInfo(selection)}</div>
    </>
  );
};
export const UsedPreppedSpell = (props: {
  selection: string;
  addUsedSpell: (selection: string, type: "preppedCast") => void;
  removeUsedSpell: (selection: string, type: "prep") => void;
}) => {
  const spellCompendium = useRecoilValue(spellCompendiumState);
  const { selection, addUsedSpell, removeUsedSpell } = props;
  function disableSpell(selection: string) {
    addUsedSpell(selection, "preppedCast");
    removeUsedSpell(selection, "prep");
  }
  return (
    <>
      <button
        className="confirmSpellButton"
        onClick={() => disableSpell(selection.name)}
        disabled
      >
        Already Used
      </button>
      <div>{displayCompendiumInfo(selection)}</div>
    </>
  );
};
