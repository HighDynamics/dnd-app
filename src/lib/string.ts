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
