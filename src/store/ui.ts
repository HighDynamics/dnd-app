import { atom, useAtomValue, useSetAtom } from "jotai";

type DiceRoll = {
  result: number;
  size: number;
  mod: number;
  use: string;
  conditions: string[];
};

const diceRollAtom = atom<DiceRoll | null>(null);

export function useDiceRoll(size: number, conditions: string[] = []) {
  const setRollResult = useSetAtom(diceRollAtom);
  return (mod: number, use: string) => {
    const result = Math.floor(Math.random() * size + 1);
    setRollResult({ result, mod, size, use, conditions });
  };
}

export function useResetDiceRoll() {
  const setRollResult = useSetAtom(diceRollAtom);
  return () => setRollResult(null);
}

export const useDiceRollResult = () => useAtomValue(diceRollAtom);
