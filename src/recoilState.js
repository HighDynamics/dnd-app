import { atom, selector } from "recoil";

export const diceRollState = atom({
  key: "diceRollState",
  default: "Good luck, \n",
});
