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
