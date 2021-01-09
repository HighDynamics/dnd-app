import { useEffect } from "react";
import useSWR from "swr";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import {
  primaryModifierState,
  characterState,
  compendiumState,
  updatedCharacterState,
} from "../recoilState";
import { getAbilityMod, clone } from "../utilities/utilities";
import * as Navbar from "./Navbars/Navbars";
import BasicInfo from "./BasicInfo/BasicInfo";
import MainDisplay from "./MainDisplay/MainDisplay";

import "./dnd.css";

/******************************Character functions****************************/
export function totalSpells(character, primaryModifier, level, levelNum) {
  function bonusSpellsPerDay(levelNum) {
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

const LoadApp = () => {
  // Load data from the characters server endpoint
  const { data: charactersResponse } = useSWR("/api/characters");
  const { data: spellsResponse } = useSWR("/api/spells");

  const [character, setCharacter] = useRecoilState(characterState);
  const setUpdatedCharacter = useSetRecoilState(updatedCharacterState);
  const [compendium, setCompendium] = useRecoilState(compendiumState);
  const [primaryModifier, setPrimaryModifier] = useRecoilState(
    primaryModifierState
  );
  const abilityMod = getAbilityMod(character);

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
      if (spellsResponse) {
        setCompendium({ spells: spellsResponse.spells });
      }
    },
    [spellsResponse, setCompendium]
  );

  useEffect(
    function setPrimaryModifierWhenCharacterChanges() {
      if (character) {
        setPrimaryModifier(abilityMod(character.abilities.primary));
      }
    },
    [character, setPrimaryModifier, abilityMod]
  );

  // Wait until all data has been flushed through Recoil and values exist.
  if (!(character && compendium && primaryModifier)) return <>Loading...</>;

  return <App />;
};

export default LoadApp;
