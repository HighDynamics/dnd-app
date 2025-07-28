export function getTextColor(current: number, expected: number) {
  return current > expected
    ? "text-emerald-400"
    : current < expected
      ? "text-red-400"
      : "";
}
