import { atom } from "recoil";
import type { SetterOrUpdater } from "recoil";

/**
 * Because the default value for many of these objects is null, but we do not
 * want most of the app to behave as though they are null, we declare the null
 * values to actually be the real data instead of null. This Type will be used
 * at the location where the values for these states is initially set, and it
 * will represent the _actual_ data that we have: null OR the real data.
 */
export type InitialRecoilState<T> = [
  value: T | null,
  setValue: SetterOrUpdater<T>
];

export const compendiumState = atom<{ spells: ISpell[] }>({
  key: "compendiumState",
  default: { spells: [] },
});

export const characterState = atom<ICharacter>({
  key: "characterState",
  default: null as any,
});
export const updatedCharacterState = atom<ICharacter>({
  key: "updatedCharacterState",
  default: null as any,
});

export const damageState = atom({
  key: "damageState",
  default: 0,
});

export const temporaryHitPointsState = atom({
  key: "temporaryHitPointsState",
  default: 0,
});

export const primaryModifierState = atom<number | null>({
  key: "primaryModifierState",
  default: null,
});

export const diceRollState = atom<React.ReactNode>({
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

export const emptySpellsArray: [
  string[],
  string[],
  string[],
  string[],
  string[],
  string[],
  string[],
  string[],
  string[],
  string[]
] = [[], [], [], [], [], [], [], [], [], []];
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
export const slaState = atom<ICharacter["magic"]["slas"]["one"]>({
  key: "slaState",
  default: [],
});
