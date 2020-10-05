import React from "react";

export const CastingSpell = (props) => {
  const {
    selection,
    matchedSpell,
    addUsedSpell,
    removeUsedSpell,
    displayCompendiumInfo,
  } = props;
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
  const {
    selection,
    matchedSpell,
    addUsedSpell,
    removeUsedSpell,
    displayCompendiumInfo,
  } = props;
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
  const {
    selection,
    matchedSpell,
    addUsedSpell,
    removeUsedSpell,
    displayCompendiumInfo,
  } = props;
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
      </button>
      {matchedSpell !== undefined && (
        <div>{displayCompendiumInfo(matchedSpell)}</div>
      )}
    </>
  );
};
export const UsedPreppedSpell = (props) => {
  const {
    selection,
    matchedSpell,
    addUsedSpell,
    removeUsedSpell,
    displayCompendiumInfo,
  } = props;
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
