export function clone(object) {
  return JSON.parse(JSON.stringify(object));
}
export function getAC(character) {
  const ac = character.armorClass.ac;
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
