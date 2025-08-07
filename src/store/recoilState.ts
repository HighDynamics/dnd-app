import { useEffect } from "react";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

import { useGetCharacters, useGetItems, useGetSpells } from "./server";

const allCharactersAtom = atom<ICharacter[]>({
  key: "allCharactersAtom",
  default: [],
});

export function useSetAllCharacters() {
  const [characters, setCharacters] = useRecoilState(allCharactersAtom);
  const fetchedCharacters = useGetCharacters();

  useEffect(() => {
    if (fetchedCharacters) {
      setCharacters(fetchedCharacters);
    }
  }, [fetchedCharacters, setCharacters]);

  return characters;
}

export const useAllCharacters = () => useRecoilValue(allCharactersAtom);

export const characterAtom = atom<ICharacter>({
  key: "characterAtom",
  default: {} as ICharacter,
});

export function useSetFirstCharacter() {
  const characters = useSetAllCharacters();
  const [character, setCharacter] = useRecoilState(characterAtom);

  useEffect(
    function setFirstCharacter() {
      const firstCharacter = characters?.at(0);
      if (!firstCharacter) return;
      setCharacter(firstCharacter);
    },
    [characters, setCharacter],
  );

  return character;
}

export const useCharacter = () => useRecoilValue(characterAtom);

const abilityScores = selector({
  key: "abilityScores",
  get: ({ get }) => {
    const abilityScores = get(characterAtom).abilities.score;
    return Object.entries(abilityScores).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          score: value,
          modifier: value ? Math.floor((value - 10) / 2) : null,
        },
      }),
      {} as Record<Ability, { score: number | null; modifier: number | null }>,
    );
  },
});

export function useAbilityScore(ability: Ability) {
  const scores = useRecoilValue(abilityScores);
  return scores[ability];
}

export const itemCompendiumAtom = atom<IItem[]>({
  key: "itemCompendiumAtom",
  default: [],
});

export function useSetItemCompendium() {
  const items = useGetItems();
  const [itemCompendium, setItemCompendium] =
    useRecoilState(itemCompendiumAtom);

  useEffect(() => {
    if (items) {
      setItemCompendium(items);
    }
  }, [items, setItemCompendium]);

  return itemCompendium;
}

const characterItems = selector({
  key: "characterItems",
  get: ({ get }) => {
    const itemCompendium = get(itemCompendiumAtom);
    const itemRefs = get(characterAtom).itemRefs;

    if (itemRefs.length === 0) return [];

    const characterItems_ = itemRefs
      .map((itemRef) => itemCompendium?.find((i) => i.id === itemRef.id))
      .filter(Boolean) as IItem[];

    return characterItems_;
  },
});

export const useCharacterItems = () => useRecoilValue(characterItems);

export const spellCompendiumAtom = atom<ISpell[]>({
  key: "spellCompendiumState",
  default: [],
});

export function useSetSpellCompendium() {
  const spells = useGetSpells();
  const setSpellCompendium = useSetRecoilState(spellCompendiumAtom);

  useEffect(() => {
    if (spells) {
      setSpellCompendium(spells);
    }
  }, [spells, setSpellCompendium]);

  return spells;
}

export const diceRollAtom = atom<{
  result: number;
  size: number;
  mod: number;
  use: string;
} | null>({
  key: "diceRollState",
  default: null,
});

export function useDiceRoll(size: number) {
  const setRollResult = useSetRecoilState(diceRollAtom);
  return (mod: number, use: string) => {
    const result = Math.floor(Math.random() * size + 1);

    setRollResult({ result, mod, size, use });
  };
}

export function useResetDiceRoll() {
  const setRollResult = useSetRecoilState(diceRollAtom);
  return () => setRollResult(null);
}

export const useDiceRollResult = () => useRecoilValue(diceRollAtom);

export const confirmationMsg = atom<string | null>({
  key: "confirmationMsg",
  default: null,
});

export const emptySpellArray: [
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
] = [[], [], [], [], [], [], [], [], [], []];

export const innateSpellsCastState = atom({
  key: "innateSpellsCastState",
  default: emptySpellArray,
});
export const preppedSpellsState = atom({
  key: "preppedSpellsState",
  default: emptySpellArray,
});
export const preppedSpellsCastState = atom({
  key: "preppedSpellsCastState",
  default: emptySpellArray,
});
export const slaState = atom({
  key: "slaState",
  default: emptySpellArray,
});

export const allKnownSpells_ = selector({
  key: "allKnownSpells_",
  get: ({ get }) => {
    const magic = get(characterAtom).magic;
    const spellCompendium = get(spellCompendiumAtom);
    function getSpellInfoById(id: string) {
      return spellCompendium.spells.find((item) => item.id === id);
    }

    const spells = magic.spellRefs.map((x) => ({
      ...x,
      uses: x.innate ? Number.POSITIVE_INFINITY : 0,
      numUsed: 0,
      entry: getSpellInfoById(x.id),
    }));

    const spellLikeAbilities = magic.slaRefs.map((x) => ({
      ...x,
      numUsed: 0,
      entry: getSpellInfoById(x.id),
    }));

    return { spells, spellLikeAbilities };
  },
});

export const allKnownSpells = atom({
  key: "allKnownSpells",
  default: allKnownSpells_,
});

export const spellSlotsExpended = selector({
  key: "spellSlotsExpended",
  get: ({ get }) => {
    const expendedSpells = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    function getExpendedSpellsByLevel(level: number) {
      return get(allKnownSpells)
        .spells.filter((x) => x.level === level)
        .reduce((acc, x) => {
          const expended =
            x.uses < Number.POSITIVE_INFINITY ? x.uses : x.numUsed;
          return acc + expended;
        }, 0);
    }

    return expendedSpells.map((x, i) => x + getExpendedSpellsByLevel(i));
  },
});
