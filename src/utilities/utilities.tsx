import CompendiumObject from "../components/Modal/CompendiumObject/CompendiumObject";
import { mutate } from "swr";

function rollDice(size: number) {
  return (mod: number, use: string) => {
    const result = Math.floor(Math.random() * size + 1);

    return { result, mod, size, use };
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

function displayCompendiumInfo(matchedObject: ICompendiumObject) {
  const objectKeys = Object.keys(matchedObject) as Array<
    keyof ICompendiumObject
  >;
  const compendiumObjectInfo = objectKeys.map((key) => {
    return (
      <>
        <CompendiumObject
          key={key}
          property={key}
          value={matchedObject[key] as string}
        />
      </>
    );
  });
  return compendiumObjectInfo;
}

const getRefInfoByCompendiumObject =
  (selection: ICompendiumObject, character: ICharacter) =>
  (infoKey: string): string | number | boolean => {
    let objectRef = {} as IRefObject | undefined;
    if (selection.hasOwnProperty("school")) {
      objectRef = character.magic.spellRefs.find(
        (ref: IRefObject) => ref.id === selection.id,
      );
    } else {
      objectRef = character.itemRefs.find(
        (ref: IRefObject) => ref.id === selection.id,
      );
    }
    return objectRef === undefined
      ? alert("Reference Not Found")
      : objectRef[infoKey];
  };

export {
  camelCaseToTitleCase,
  getAC,
  roll20,
  getAbilityMod,
  clone,
  displayCompendiumInfo,
  whiteSpaceToUnderscore,
  persistCharacter,
  getRefInfoByCompendiumObject,
  addSpellToServer,
};
