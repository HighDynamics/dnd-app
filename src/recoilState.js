import { atom, selector } from "recoil";

export const diceRollState = atom({
  key: "diceRollState",
  default: "Good luck, \n",
});
export const mainContentState = atom({
  key: "mainContent",
  default: "Skills",
});
export const secondaryNavbarState = atom({
  key: "secondaryNavbarDisplay",
  default: "stats",
});
