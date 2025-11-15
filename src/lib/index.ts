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

export function camelCaseToTitleCase(item: string) {
  let string = item.replace(/[A-Z]/g, (x) => " " + x);
  string = string.charAt(0).toUpperCase() + string.slice(1);
  return string;
}

export function abbreviateAbility(ability: Ability): string {
  switch (ability) {
    case "strength":
      return "Str";
    case "dexterity":
      return "Dex";
    case "constitution":
      return "Con";
    case "intelligence":
      return "Int";
    case "wisdom":
      return "Wis";
    case "charisma":
      return "Cha";
    default:
      return "";
  }
}

/* Replaces all non-numeric characters in a string, allows for decimals */
export function rejectNonDigit(input: string): string {
  return input.replace(/[^0-9.]/g, "");
}
