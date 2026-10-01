import { atom, useAtomValue, useSetAtom } from "jotai";

const toastMessageAtom = atom<string | null>(null);

export const useToastMessage = () => useAtomValue(toastMessageAtom);

/**
 * Returns a function that sets a message, triggering a toast-like
 * notification.
 */
export function useToast() {
  const setMessage = useSetAtom(toastMessageAtom);

  function renderConfirmation(msg: string) {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000);
  }

  return renderConfirmation;
}
