import { showToast } from "../../store/ui";

export { useToastMessage } from "../../store/ui";

/**
 * Returns a function that sets a message, triggering a toast-like
 * notification.
 */
export function useToast() {
  return showToast;
}
