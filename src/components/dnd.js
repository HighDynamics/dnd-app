import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { RecoilRoot, useSetRecoilState } from "recoil";

import {
  primaryModifierState,
  characterState,
  compendiumState,
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
const App = (props) => {
  const setCharacter = useSetRecoilState(characterState);
  const setCompendium = useSetRecoilState(compendiumState);
  const setPrimaryModifier = useSetRecoilState(primaryModifierState);
  useEffect(
    function setDocTitle() {
      document.title = props.character.name;
    },
    [props.character]
  );
  useEffect(() => {
    setCharacter(props.character);
  }, [props.character]);
  /* Have also tried:
  useEffect(() => {
    setCharacter(JSON.parse(props.character));
  }, [props.character]);

  //&&&&&&&//

  useEffect(() => {
    setCharacter(JSON.parse(JSON.stringify(props.character)));
  }, [props.character]);

  */
  useEffect(() => {
    setCompendium(props.compendium);
  }, [props.compendium]);
  useEffect(() => {
    setPrimaryModifier(
      abilityModifier(props.character, props.character.abilities.primary)
    );
  }, [props.character.abilities.primary]);

  return (
    <>
      {" "}
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

  if (!(spellsResponse && charactersResponse)) return <>Loading...</>;

  const { spells } = spellsResponse;
  const { characters } = charactersResponse;

  const compendium = { spells };

  // Before the data is loaded, it will be `undefined`
  return (
    <RecoilRoot>
      <App character={characters[0]} compendium={compendium} />
    </RecoilRoot>
  );
};

export default LoadApp;
