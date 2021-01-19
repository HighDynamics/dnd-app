import { useEffect } from "react";
import useSWR from "swr";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import {
  primaryModifierState,
  characterState,
  spellCompendiumState,
  updatedCharacterState,
  InitialRecoilState,
} from "../recoilState";
import { getAbilityMod } from "../utilities/utilities";
import * as Navbar from "./Navbars/Navbars";
import BasicInfo from "./BasicInfo/BasicInfo";
import MainDisplay from "./MainDisplay/MainDisplay";

import "./dnd.css";

/******************************Character functions****************************/
export function totalSpells(
  character: ICharacter,
  primaryModifier: number,
  level: keyof ICharacter["magic"]["spellsPerDay"],
  levelNum: number
) {
  function bonusSpellsPerDay(levelNum: number) {
    return Math.ceil((primaryModifier - (levelNum - 1)) / 4);
  }
  return character.magic.spellsPerDay[level] + bonusSpellsPerDay(levelNum);
}
/******************************Character functions****************************/
const App = () => {
  const character = useRecoilValue(characterState);
  useEffect(
    function setDocTitle() {
      document.title = character.name;
    },
    [character]
  );

  return (
    <>
      <div id="appWrapper">
        <div>
          <div id="topWrapper">
            <BasicInfo />
            <Navbar.PrimaryNavbar />
            <Navbar.SecondaryNavbar />
          </div>
          <MainDisplay />
        </div>
      </div>
    </>
  );
};

const getPrimaryModifierValue = (character: ICharacter) => {
  const modNumber = getAbilityMod(character)(character.abilities.primary);
  if (modNumber === null)
    throw new Error(
      `Primary modifiers must not be null. ${character.name}'s primary modifier is ${character.abilities.primary}, but the value for that modifier is null.`
    );
  return modNumber;
};

const LoadApp = () => {
  // Load data from the characters server endpoint
  const { data: charactersResponse } = useSWR<IServer.GetCharacters.Response>(
    "/api/characters"
  );
  const { data: spellsResponse } = useSWR<IServer.GetSpells.Response>(
    "/api/spells"
  );

  const [
    character,
    setCharacter,
  ]: InitialRecoilState<ICharacter> = useRecoilState(characterState);
  const setUpdatedCharacter = useSetRecoilState(updatedCharacterState);
  const [spellCompendium, setSpellCompendium] = useRecoilState(
    spellCompendiumState
  );
  const [
    primaryModifier,
    setPrimaryModifier,
  ]: InitialRecoilState<number> = useRecoilState(primaryModifierState);

  // Before the data is loaded, it will be `undefined`. So inside `useEffect`
  // hooks below, make sure the data exists.

  useEffect(
    function setFirstCharacterFromServer() {
      if (charactersResponse) {
        setCharacter(charactersResponse.characters[0]);
        setUpdatedCharacter(charactersResponse.characters[0]);
      }
    },
    [charactersResponse, setCharacter, setUpdatedCharacter]
  );

  useEffect(
    function setCompendiumFromServerSpells() {
      if (spellsResponse && character) {
        const characterSpellRefs = character.magic.spell_refs.map((s) => s.id);
        const characterSpells = spellsResponse.spells.filter((spell) =>
          characterSpellRefs.includes(spell.id)
        );

        setSpellCompendium({ spells: characterSpells });
      }
    },
    [spellsResponse, character, setSpellCompendium]
  );

  useEffect(
    function setPrimaryModifierWhenCharacterChanges() {
      if (character) {
        setPrimaryModifier(getPrimaryModifierValue(character));
      }
    },
    [character, setPrimaryModifier]
  );

  // Wait until all data has been flushed through Recoil and values exist.
  if (!(character && spellCompendium && primaryModifier))
    return <>Loading...</>;

  return <App />;
};

export default LoadApp;
