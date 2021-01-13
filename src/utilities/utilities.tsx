import { CompendiumSpell } from "../components/SpellInfo/SpellInfo";
import { mutate } from "swr";

function rollDice(size: number) {
  return (mod: number, use: string) => {
    const roll = Math.floor(Math.random() * size + 1);
    function edgeRollClassAssignment(roll: number) {
      if (roll === 1 && size === 20) {
        return "natOne";
      } else if (roll === 20 && size === 20) {
        return "natTwenty";
      } else {
        return undefined;
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
function clone<T>(object: T): T {
  return JSON.parse(JSON.stringify(object));
}
const roll20 = rollDice(20);

function displayCompendiumInfo(matchedSpell: ISpell) {
  const spellKeys = Object.keys(matchedSpell) as Array<keyof ISpell>;
  const compendiumInfo = spellKeys.map((key) => {
    return (
      <CompendiumSpell
        key={key}
        property={key}
        value={matchedSpell[key] as string}
      />
    );
  });
  return compendiumInfo;
}

function getAbilityMod(character: ICharacter) {
  return (ability: keyof ICharacter["abilities"]["score"]) => {
    const score = character.abilities.score[ability];
    return !score ? 0 : Math.floor((score - 10) / 2);
  };
}
function getAC(character: ICharacter) {
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
function textClassToGreenOrRed(current: number, expected: number) {
  if (current > expected) {
    return "greenText";
  } else if (current < expected) {
    return "redText";
  } else {
    return "";
  }
}
function camelCaseToTitleCase(item: string) {
  //add spaces between words
  let string = item.replace(/[A-Z]/g, (x) => " " + x);
  //capitalize first letter
  string = string.charAt(0).toUpperCase() + string.slice(1);
  return string;
}
const whiteSpaceToUnderscore = (string: string) => string.replace(/\s/g, "_");

const persistCharacter = (updatedCharacter: IServer.PutCharacter.Request) => {
  fetch("/api/characters/1", {
    method: "PUT",
    body: JSON.stringify(updatedCharacter),
  }).then(() => {
    mutate("/api/characters", { characters: [updatedCharacter] });
  });
};

export {
  textClassToGreenOrRed,
  camelCaseToTitleCase,
  getAC,
  roll20,
  getAbilityMod,
  clone,
  displayCompendiumInfo,
  whiteSpaceToUnderscore,
  persistCharacter,
};
