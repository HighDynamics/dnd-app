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

export const spellCompendiumState = atom<{ spells: ISpell[] }>({
  key: "spellCompendiumState",
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

export const primaryModifierState = atom<number>({
  key: "primaryModifierState",
  default: null as any,
});

export const diceRollState = atom<React.ReactNode>({
  key: "diceRollState",
  default: "",
});

export type MainContent =
  | "Skills"
  | "Scores"
  | "Attacks"
  | "More"
  | "Spells"
  | "Abilities"
  | "SLAs"
  | "Prep"
  | "Items"
  | "EditSkills"
  | "EditAbilities"
  | "EditSpells"
  | "EditSLAs"
  | "EditAttacks"
  | "EditItems"
  | "EditCore"
  | "AddCharacter";

export const mainContentState = atom<MainContent>({
  key: "mainContentState",
  default: "Skills",
});

export type SecondaryNavbar = "stats" | "ability" | null;

export const secondaryNavbarState = atom<SecondaryNavbar>({
  key: "secondaryNavbarDisplayState",
  default: "stats",
});

export type ModalType =
  | "Cast"
  | "Prep"
  | "CastPrepped"
  | "UsedPrepped"
  | "HP"
  | "Defense"
  | "Abilities"
  | "SLA"
  | "Item"
  | "Off";

export const modalTypeState = atom<ModalType>({
  key: "modalTypeState",
  default: "Off",
});
export const selectionState = atom({
  key: "selectionState",
  default: {},
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

export const emptySpellsArrayWithInfo: [
  ISpell[],
  ISpell[],
  ISpell[],
  ISpell[],
  ISpell[],
  ISpell[],
  ISpell[],
  ISpell[],
  ISpell[],
  ISpell[],
] = [[], [], [], [], [], [], [], [], [], []]

export const innateSpellsCastState = atom({
  key: "innateSpellsCastState",
  default: emptySpellsArrayWithInfo,
});
export const preppedSpellsState = atom({
  key: "preppedSpellsState",
  default: emptySpellsArrayWithInfo,
});
export const preppedSpellsCastState = atom({
  key: "preppedSpellsCastState",
  default: emptySpellsArrayWithInfo,
});
export const slaState = atom<ICharacter["magic"]["slas"]["one"]>({
  key: "slaState",
  default: [],
});
