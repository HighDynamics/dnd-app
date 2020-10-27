import React from "react";

function rollDice(size) {
  return (mod, use) => {
    const roll = Math.floor(Math.random() * size + 1);
    function edgeRollClassAssignment(roll) {
      if (roll === 1 && size === 20) {
        return "natOne";
      } else if (roll === 20 && size === 20) {
        return "natTwenty";
      } else {
        return null;
      }
    }
    const result = (
      <span>
        <span id="rollUse">{use}</span>
        <div id="rollTopLine">
          <span id="rollTotal" className={edgeRollClassAssignment(roll)}>
            {roll}
          </span>{" "}
          <span id="modTotal"> + {mod} =</span>
        </div>
        <p id="rollModTotal">{roll + mod}</p>
      </span>
    );
    return result;
  };
}
/* vvvvvvvvvvv EXPORT vvvvvvvvvvvvvv */
function clone(object) {
  return JSON.parse(JSON.stringify(object));
}
const roll20 = rollDice(20);
function getAbilityMod(character) {
  return (ability) => {
    const score = character.abilities.score[ability];
    return !score ? score : Math.floor((score - 10) / 2);
  };
}
function getAC(character) {
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
function textClassToGreenOrRed(current, expected) {
  if (current > expected) {
    return "greenText";
  } else if (current < expected) {
    return "redText";
  } else {
    return null;
  }
}
function camelCaseToTitleCase(item) {
  //add spaces between words
  let string = item.replace(/[A-Z]/g, (x) => " " + x);
  //capitalize first letter
  string = string.charAt(0).toUpperCase() + string.slice(1);
  return string;
}

export {
  textClassToGreenOrRed,
  camelCaseToTitleCase,
  getAC,
  roll20,
  getAbilityMod,
  clone,
};
