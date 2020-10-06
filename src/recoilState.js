import { atom } from "recoil";
import { abilityModifier } from "./components/dnd.js";

export const diceRollState = atom({
  key: "diceRollState",
  default: "Good luck, \n",
});
export const mainContentState = atom({
  key: "mainContentState",
  default: "Skills",
});
export const secondaryNavbarState = atom({
  key: "secondaryNavbarDisplayState",
  default: "stats",
});
export const modalTypeState = atom({
  key: "modalTypeState",
  default: "Off",
});
export const selectionState = atom({
  key: "selectionState",
  default: "",
});

/// new file

export const innateSpellsCastState = atom({
  key: "innateSpellsCastState",
  default: [[], [], [], [], [], [], [], [], [], []],
});
export const preppedSpellsState = atom({
  key: "preppedSpellsState",
  default: [[], [], [], [], [], [], [], [], [], []],
});
export const preppedSpellsCastState = atom({
  key: "preppedSpellsCastState",
  default: [[], [], [], [], [], [], [], [], [], []],
});

// recoil's code

// function setNewValue(valueOrGetNewStateFunction) {
//   if (typeof valueOrGetNewStateFunction === "function") {
//     internalState = valueOrGetNewStateFunction(internalState);
//   } else internalState = valueOrGetNewStateFunction;
// }

////////////

export function makeGetNewSpellStateFromSpellAndLevel(spell_, level_) {
  var chosenSpell = spell_;
  var level = level_;

  return function getNewStateForSpells(spells) {
    const newSpells = JSON.parse(JSON.stringify(spells));
    newSpells[level].push(chosenSpell);
    return newSpells;
  };
}
