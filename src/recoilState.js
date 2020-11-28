import { atom } from "recoil";

export const compendiumState = atom({
  key: "compendiumState",
  default: null,
});

export const characterState = atom({
  key: "characterState",
  default: null,
});
export const updatedCharacterState = atom({
  key: "updatedCharacterState",
  default: null,
});

export const damageState = atom({
  key: "damageState",
  default: 0,
});

export const temporaryHitPointsState = atom({
  key: "temporaryHitPointsState",
  default: 0,
});

export const primaryModifierState = atom({
  key: "primaryModifierState",
  default: null,
});

export const diceRollState = atom({
  key: "diceRollState",
  default: "",
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

export const emptySpellsArray = [[], [], [], [], [], [], [], [], [], []];
export const innateSpellsCastState = atom({
  key: "innateSpellsCastState",
  default: emptySpellsArray,
});
export const preppedSpellsState = atom({
  key: "preppedSpellsState",
  default: emptySpellsArray,
});
export const preppedSpellsCastState = atom({
  key: "preppedSpellsCastState",
  default: emptySpellsArray,
});
export const slaState = atom({
  key: "slaState",
  default: [],
});
