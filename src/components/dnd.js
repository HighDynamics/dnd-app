import React, { useEffect } from "react";
import useSWR from "swr";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import {
  primaryModifierState,
  characterState,
  compendiumState,
  diceRollState,
} from "../recoilState.js";
import * as Navbar from "./Navbars/Navbars.js";
import BasicInfo from "./BasicInfo/BasicInfo.js";
import MainDisplay from "./MainDisplay/MainDisplay.js";

import "./dnd.css";

export function rollDice(size, mod, use) {
  const dice = Math.floor(Math.random() * size + 1);
  function edgeRollClassAssignment(dice) {
    if (dice === 1) {
      return "natOne";
    } else if (dice === 20) {
      return "natTwenty";
    } else {
      return null;
    }
  }
  const result = (
    <span>
      <span id="rollUse">{use}</span>
      <div id="rollTopLine">
        <span id="rollTotal" className={edgeRollClassAssignment(dice)}>
          {dice}
        </span>{" "}
        <span id="modTotal"> + {mod} =</span>
      </div>
      <p id="rollModTotal">{dice + mod}</p>
    </span>
  );
  return result;
}
export const Character = React.createContext(null);
export const Compendium = React.createContext(null);
export const PrimaryModifier = React.createContext(null);
/******************************Character functions****************************/
export function abilityModifier(character, ability) {
  const score = character.abilities.score[ability];
  return !score ? score : Math.floor((score - 10) / 2);
}
export function totalSpells(character, primaryModifier, level, levelNum) {
  function bonusSpellsPerDay(levelNum) {
    return Math.ceil((primaryModifier - (levelNum - 1)) / 4);
  }
  return character.magic.spellsPerDay[level] + bonusSpellsPerDay(levelNum);
}
/******************************Character functions****************************/
const App = () => {
  const character = useRecoilValue(characterState);
  const setRoll = useSetRecoilState(diceRollState);
  setRoll("Good Luck,\n" + character.name);
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
  const [compendium, setCompendium] = useRecoilState(compendiumState);
  const [primaryModifier, setPrimaryModifier] = useRecoilState(
    primaryModifierState
  );

  // Before the data is loaded, it will be `undefined`. So inside `useEffect`
  // hooks below, make sure the data exists.

  useEffect(
    function setFirstCharacterFromServer() {
      if (charactersResponse) {
        setCharacter(charactersResponse.characters[0]);
      }
    },
    [charactersResponse, setCharacter]
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
        setPrimaryModifier(
          abilityModifier(character, character.abilities.primary)
        );
      }
    },
    [character, setPrimaryModifier]
  );

  // Wait until all data has been flushed through Recoil and values exist.
  if (!(character && compendium && primaryModifier)) return <>Loading...</>;

  return <App />;
};

export default LoadApp;
