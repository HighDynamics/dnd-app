import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { RecoilRoot, atom } from "recoil";

import * as Navbar from "./Navbars/Navbars.js";
import BasicInfo from "./BasicInfo/BasicInfo.js";
import MainDisplay from "./MainDisplay/MainDisplay.js";

import "./dnd.css";

export function rollDice(size, mod, use) {
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
  const [primaryModifier, setPrimaryModifier] = useState(
    abilityModifier(props.character, props.character.abilities.primary)
  );
  useEffect(
    function setDocTitle() {
      document.title = props.character.name;
    },
    [props.character]
  );
  return (
    <RecoilRoot>
      <Character.Provider value={props.character}>
        <Compendium.Provider value={props.compendium}>
          <div id="appWrapper">
            <div>
              <div id="topWrapper">
                <BasicInfo />
                <Navbar.PrimaryNavbar />
                <Navbar.SecondaryNavbar />
              </div>
              <PrimaryModifier.Provider
                value={[primaryModifier, setPrimaryModifier]}
              >
                <MainDisplay />
              </PrimaryModifier.Provider>
            </div>
          </div>
        </Compendium.Provider>
      </Character.Provider>
    </RecoilRoot>
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
  return <App character={characters[0]} compendium={compendium} />;
};

export default LoadApp;
