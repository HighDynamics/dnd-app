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

export function useAbilityScores() {
  return useRecoilValue(abilityScores);
}

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

export type EnrichedSpell = ISpellRef & {
  characterClass: string;
  entry: ISpell;
};
export type EnrichedSla = ISpellLikeAbilityRef & { entry: ISpell };

const characterMagic = selector({
  key: "characterSpells",
  get: ({ get }) => {
    const spellCompendium = get(spellCompendiumAtom);
    const character = get(characterAtom);
    const classMagic = character.classes.reduce((acc, c) => {
      if (!c.magic) return acc;

      const classSpells = c.magic.spellRefs
        .map((spellRef) => ({
          ...spellRef,
          characterClass: c.name,
          entry: spellCompendium?.find((s) => s.id === spellRef.id),
        }))
        .filter(Boolean) as EnrichedSpell[];

      return [...acc, ...classSpells];
    }, [] as EnrichedSpell[]);

    const spellLikeAbilities = character.slaRefs
      .map((slaRef) => ({
        ...slaRef,
        entry: spellCompendium?.find((s) => s.id === slaRef.id),
      }))
      .filter(Boolean) as EnrichedSla[];

    return [...classMagic, ...spellLikeAbilities];
  },
});

type ClassSpells = { characterClass: string; spells: EnrichedSpell[] };
type OrderedMagic = Record<
  number,
  { slas: EnrichedSla[]; classSpells: ClassSpells[] }
>;

const magicByClassByLevel = selector({
  key: "magicByClassByLevel",
  get: ({ get }) => {
    const character = get(characterAtom);

    const classMagicMeta = character.classes
      .map((c) => {
        if (!c.magic) return;

        return {
          characterClass: c.name,
          castingAbility: c.magic.spellcastingAbility,
          slotsPerDay: c.magic.slotsPerDay || [],
          slotsUsed: c.magic.slotsUsed || [],
        };
      })
      .filter(Boolean) as {
      characterClass: string;
      castingAbility: Ability;
      slotsPerDay: number[];
      slotsUsed: number[];
    }[];

    const magic = get(characterMagic);

    let orderedMagic = {} as OrderedMagic;
    new Array(10).fill(null).forEach((_, i) => {
      const levelMagic = magic.filter((x) => x.level === i);

      const classSpells_ = levelMagic.filter(
        (x) => "characterClass" in x,
      ) as EnrichedSpell[];

      const classSpells = classSpells_
        .sort((a, b) => (a.characterClass < b.characterClass ? -1 : 1))
        .reduce((acc, x) => {
          if (acc.at(-1)?.characterClass === x.characterClass) {
            acc.at(-1)?.spells.push(x);
          } else {
            acc.push({ characterClass: x.characterClass, spells: [x] });
          }

          return acc;
        }, [] as ClassSpells[]);

      const slas = levelMagic.filter(
        (x) => !("characterClass" in x),
      ) as EnrichedSla[];

      orderedMagic[i] = {
        classSpells,
        slas,
      };
    });

    return { classMagicMeta, orderedMagic };
  },
});

export const useMagicByClassByLevel = () => useRecoilValue(magicByClassByLevel);

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
