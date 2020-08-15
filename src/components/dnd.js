import React, { useState, useContext, useEffect } from "react";
import useSWR from "swr";

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
export const ReadTossDice = React.createContext(null);
export const GetSetDisplay = React.createContext(null);
export const GetSetDisplayTwo = React.createContext(null);
export const ToggleInfo = React.createContext(null);
export const Selection = React.createContext(null);
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
  const [display, setDisplay] = useState("stats");
  const [displayTwo, setDisplayTwo] = useState("Skills");
  const [toggleInfo, setToggleInfo] = useState(false);
  const [rollResult, setRollResult] = useState(
    "Good luck,\n" + props.character.name
  );
  const [primaryModifier, setPrimaryModifier] = useState(
    abilityModifier(props.character, "charisma")
  );
  useEffect(
    function setDocTitle() {
      document.title = props.character.name;
    },
    [props.character]
  );
  return (
    <Character.Provider value={props.character}>
      <Compendium.Provider value={props.compendium}>
        <div id="appWrapper">
          <div>
            <div id="topWrapper">
              <ReadTossDice.Provider value={[rollResult, setRollResult]}>
                <BasicInfo />
              </ReadTossDice.Provider>
              <Navbar.PrimaryNavbar
                display={display}
                setDisplay={setDisplay}
                setDisplayTwo={setDisplayTwo}
              />
              <GetSetDisplayTwo.Provider value={[displayTwo, setDisplayTwo]}>
                <Navbar.SecondaryNavbar display={display} />
              </GetSetDisplayTwo.Provider>
            </div>
            <GetSetDisplay.Provider value={[display, setDisplay]}>
              <GetSetDisplayTwo.Provider value={[displayTwo, setDisplayTwo]}>
                <ToggleInfo.Provider value={[toggleInfo, setToggleInfo]}>
                  <ReadTossDice.Provider value={[rollResult, setRollResult]}>
                    <PrimaryModifier.Provider
                      value={[primaryModifier, setPrimaryModifier]}
                    >
                      <MainDisplay />
                    </PrimaryModifier.Provider>
                  </ReadTossDice.Provider>
                </ToggleInfo.Provider>
              </GetSetDisplayTwo.Provider>
            </GetSetDisplay.Provider>
          </div>
        </div>
      </Compendium.Provider>
    </Character.Provider>
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
