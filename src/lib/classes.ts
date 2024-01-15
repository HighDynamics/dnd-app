export function getTextColor(current: number, expected: number) {
  return current > expected
    ? "text-green-500"
    : current < expected
      ? "text-red-500"
      : "";
}
