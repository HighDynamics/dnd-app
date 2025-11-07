import { useSetRecoilState } from "recoil";

import { confirmationMsg } from "../../store/recoilState";

/**
 * Returns a function that sets a message, triggering a toast-like
 * notification.
 */
export function useToast() {
  const setConfirmationMsg = useSetRecoilState(confirmationMsg);

  function renderConfirmation(msg: string) {
    setConfirmationMsg(msg);
    setTimeout(() => setConfirmationMsg(null), 3000);
  }

  return renderConfirmation;
}
