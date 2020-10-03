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
export const toggleInfoState = atom({
  key: "toggleInfoState",
  default: false,
});
export const selectionState = atom({
  key: "selectionState",
  default: "",
});
export const innateSpellsCastState = {
  key: "innateSpellsCastState",
  default: [],
};
export const preppedSpellsState = {
  key: "preppedSpellsState",
  default: [],
};
