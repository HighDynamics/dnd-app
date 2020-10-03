import { atom } from "recoil";
<<<<<<< HEAD
=======
import { abilityModifier } from "./components/dnd.js";
>>>>>>> recordSpellsCast

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
<<<<<<< HEAD
=======
export const innateSpellsCastState = {
  key: "innateSpellsCastState",
  default: [],
};
export const preppedSpellsState = {
  key: "preppedSpellsState",
  default: [],
};
>>>>>>> recordSpellsCast
