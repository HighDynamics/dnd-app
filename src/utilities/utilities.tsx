import CompendiumObject from "../components/Modal/CompendiumObject/CompendiumObject";
import { mutate } from "swr";

function rollDice(size: number) {
  return (mod: number, use: string) => {
    const roll = Math.floor(Math.random() * size + 1);
    function edgeRollClassAssignment(roll: number) {
      if (roll === 1 && size === 20) {
        return "natOne d20Result";
      } else if (roll === 20 && size === 20) {
        return "natTwenty d20Result";
      } else {
        return "d20Result";
      }
    }
    const result = (
      <span>
        <span className="rollUse">
          {use} +{mod}
        </span>
        <div className="rollResult">
          + <span className={edgeRollClassAssignment(roll)}>{roll}</span>{" "}
          <span className="rollModTotal">= {roll + mod}</span>
        </div>
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
const addSpellToServer = (newSpell: IServer.PostSpell.Request) => {
  fetch("/api/spells", {
    method: "POST",
    body: JSON.stringify(newSpell),
  }).then(() => {
    mutate("/api/spells", { spells: [newSpell] });
  });
};

type ICompendiumObject = ISpell | IItem;
type IRefObject = ISpellRef | IItemRef;

/**
 * Come up with better names here...
 *
 * This is an example of how you might create a unique display name for various objects which have an srd and a user-submitted version.
 */
export function displayName(object: ICompendiumObject) {
  return object.isSrd ? object.name : `User: ${object.name}`;
}

/** see comment above the function before this one. */
export function idFromName(allObjects: ICompendiumObject[], chosen: string) {
  const isUserSubmitted = chosen.startsWith("User: ");
  const baseName = isUserSubmitted ? chosen.slice(6) : chosen;
  return allObjects
    .filter((x) => (isUserSubmitted ? !x.isSrd : x.isSrd))
    .find((x) => x.name === baseName);
}

function displayCompendiumInfo(matchedObject: ICompendiumObject) {
  const objectKeys = Object.keys(matchedObject) as Array<keyof ISpell>;
  const compendiumObjectInfo = objectKeys.map((key) => {
    return (
      <CompendiumObject
        key={key}
        property={key}
        value={matchedObject[key] as string}
      />
    );
  });
  return compendiumObjectInfo;
}

const getInfoById = (compendium: ICompendium) => (id: string) =>
  compendium.spells.find((item: ICompendiumObject) => item.id === id);

const getRefInfoByCompendiumObject = (
  selection: ICompendiumObject,
  character: ICharacter
) => (infoKey: string): string | number | boolean => {
  let objectRef = {} as IRefObject | undefined;
  if (selection.hasOwnProperty("school")) {
    objectRef = character.magic.spellRefs.find(
      (ref: IRefObject) => ref.id === selection.id
    );
  } else {
    objectRef = character.itemRefs.find(
      (ref: IRefObject) => ref.id === selection.id
    );
  }
  return objectRef === undefined
    ? alert("Reference Not Found")
    : objectRef[infoKey];
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
  getInfoById,
  getRefInfoByCompendiumObject,
  addSpellToServer,
};
