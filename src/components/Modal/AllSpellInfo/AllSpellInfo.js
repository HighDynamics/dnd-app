import React from "react";
import { useRecoilValue } from "recoil";

import { compendiumState } from "../../../recoilState";
import { displayCompendiumInfo } from "../../../utilities/utilities";
import "./AllSpellInfo.css";

export const CastingSpell = (props) => {
  const compendium = useRecoilValue(compendiumState);
  const { selection, addUsedSpell } = props;
  const matchedSpell = compendium.spells.find(({ name }) => name === selection);
  return (
    <>
      <button
        id="castSpell"
        className="confirmSpellButton"
        onClick={() => addUsedSpell(selection, "innate")}
      >
        Cast Spell
      </button>
      {matchedSpell !== undefined && (
        <div>{displayCompendiumInfo(matchedSpell)}</div>
      )}
    </>
  );
};
export const PreppingSpell = (props) => {
  const compendium = useRecoilValue(compendiumState);
  const { selection, addUsedSpell } = props;
  const matchedSpell = compendium.spells.find(({ name }) => name === selection);

  return (
    <>
      <button
        id="prepSpell"
        className="confirmSpellButton"
        onClick={() => addUsedSpell(selection, "prep")}
      >
        Prep Spell
      </button>
      {matchedSpell !== undefined && (
        <div>{displayCompendiumInfo(matchedSpell)}</div>
      )}
    </>
  );
};
export const CastingPreppedSpell = (props) => {
  const compendium = useRecoilValue(compendiumState);
  const { selection, addUsedSpell, removeUsedSpell } = props;
  const matchedSpell = compendium.spells.find(({ name }) => name === selection);

  function disableSpell(selection) {
    addUsedSpell(selection, "PreppedCast");
    removeUsedSpell(selection, "prep");
  }
  return (
    <>
      <button
        className="confirmSpellButton"
        onClick={() => disableSpell(selection)}
      >
        Use Prepped Spell
      </button>{" "}
      ||{" "}
      <button
        id="removePrepSpell"
        className="confirmSpellButton"
        onClick={() => removeUsedSpell(selection, "prep")}
      >
        Cancel Prep
      </button>
      {matchedSpell !== undefined && (
        <div>{displayCompendiumInfo(matchedSpell)}</div>
      )}
    </>
  );
};
export const UsedPreppedSpell = (props) => {
  const compendium = useRecoilValue(compendiumState);
  const { selection, addUsedSpell, removeUsedSpell } = props;
  const matchedSpell = compendium.spells.find(({ name }) => name === selection);

  function disableSpell(selection) {
    addUsedSpell(selection, "preppedCast");
    removeUsedSpell(selection, "prep");
  }
  return (
    <>
      <button
        className="confirmSpellButton"
        onClick={() => disableSpell(selection)}
        disabled
      >
        Already Used
      </button>
      {matchedSpell !== undefined && (
        <div>{displayCompendiumInfo(matchedSpell)}</div>
      )}
    </>
  );
};
