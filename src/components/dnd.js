import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  primaryModifierState,
  characterState,
  compendiumState,
} from "../recoilState.js";
import { getAbilityMod } from "../utilities/utilities";
import * as Navbar from "./Navbars/Navbars.js";
import BasicInfo from "./BasicInfo/BasicInfo.js";
import MainDisplay from "./MainDisplay/MainDisplay.js";

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
  const { data: itemsResponse } = useSWR("/api/items");

  const [hasGreateAxe, setHasGreatAxe] = useState(false);

  const [character, setCharacter] = useRecoilState(characterState);
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
      }
    },
    [charactersResponse, setCharacter]
  );

  useEffect(
    function supplyGreatAxe() {
      if (itemsResponse) {
        const ga = { name: "Great Axe", level: 3 };
        if (itemsResponse.items.some((item) => item.name === "Great Axe")) {
          setHasGreatAxe(true);
        } else {
          fetch("api/items/new", {
            method: "POST",
            body: JSON.stringify(ga),
          }).then(() =>
            mutate("/api/items", {
              ...itemsResponse,
              items: [...itemsResponse.items, ga],
            })
          );
        }
      }
    },
    [itemsResponse]
  );

  useEffect(function refetchData() {});

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
  if (!(character && compendium && primaryModifier && hasGreateAxe))
    return <>Loading...</>;

  console.log(itemsResponse);

  return <App />;
};

export default LoadApp;
