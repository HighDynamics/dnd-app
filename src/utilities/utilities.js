export function clone(object) {
  return JSON.parse(JSON.stringify(object));
}
export function getAC(character) {
  const ac = character.armorClass;
  return (
    10 +
    ac.armor +
    ac.deflection +
    ac.dexterity +
    ac.misc +
    ac.naturalArmor +
    ac.shield +
    ac.size
  );
}
export function textClassToGreenOrRed(current, expected) {
  if (current > expected) {
    return "greenText";
  } else if (current < expected) {
    return "redText";
  } else {
    return null;
  }
}
export function camelCaseToTitleCase(item) {
  //add spaces between words
  let string = item.replace(/[A-Z]/g, (x) => " " + x);
  //capitalize first letter
  string = string.charAt(0).toUpperCase() + string.slice(1);
  return string;
}
