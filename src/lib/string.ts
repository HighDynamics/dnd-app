export function combine(...str: Array<string | null | undefined | boolean>) {
  return str
    .filter((x) => typeof x === "string")
    .map((x) =>
      (x as string)
        .split(" ")
        .map((w) => w.trim())
        .join(" "),
    )
    .join(" ");
}
