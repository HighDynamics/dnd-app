import { atom, getDefaultStore, useAtomValue, useSetAtom } from "jotai";

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

const toastMessageAtom = atom<string | null>(null);

export const useToastMessage = () => useAtomValue(toastMessageAtom);

/** Shows a message as a toast for a few seconds. Works outside React too. */
export function showToast(msg: string) {
  const store = getDefaultStore();
  store.set(toastMessageAtom, msg);
  setTimeout(() => {
    if (store.get(toastMessageAtom) === msg) store.set(toastMessageAtom, null);
  }, 3000);
}
