import { useEffect } from "react";
import { Outlet } from "react-router";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import useSWR from "swr";

import {
  primaryModifierState,
  characterState,
  spellCompendiumState,
  updatedCharacterState,
  InitialRecoilState,
  itemCompendiumState,
} from "../store/recoilState";
import { getAbilityMod } from "../utilities/utilities";
import { ActionToast } from "./ActionToast";
import BasicInfo from "./BasicInfo/BasicInfo";
import { FadedSeparator } from "./FadedSeparator";
import { Nav } from "./Nav";

/******************************General functions****************************/
export function totalSpells(
  character: ICharacter,
  primaryModifier: number,
  level: string,
  levelNum: number,
): number {
  function bonusSpellsPerDay(levelNum: number) {
    return Math.ceil((primaryModifier - (levelNum - 1)) / 4);
  }
  return character.magic.spellsPerDay[level] + bonusSpellsPerDay(levelNum);
}
/******************************General functions****************************/
const App = () => {
  const character = useRecoilValue(characterState);
  useEffect(
    function setDocTitle() {
      document.title = character.name;
    },
    [character],
  );

  return (
    <>
      <ActionToast />
      <div className="fixed top-0 -z-50 h-screen w-screen bg-indigo-950/30" />
      <div className="text-stone-200 flex flex-col h-screen">
        <div>
          <BasicInfo />
        </div>
        <div className="p-4 grow overflow-auto">
          <Outlet />
        </div>
        <div>
          <FadedSeparator />
          <Nav />
        </div>
      </div>
    </>
  );
};

const getPrimaryModifierValue = (character: ICharacter) => {
  const modNumber = getAbilityMod(character)(character.abilities.primary);
  if (modNumber === null)
    throw new Error(
      `Primary modifiers must not be null. ${character.name}'s primary modifier is ${character.abilities.primary}, but the value for that modifier is null.`,
    );
  return modNumber;
};

const LoadApp = () => {
  // Load data from the characters server endpoint
  const { data: charactersResponse } =
    useSWR<IServer.GetCharacters.Response>("/api/characters");
  const { data: spellsResponse } =
    useSWR<IServer.GetSpells.Response>("/api/spells");
  const { data: itemsResponse } =
    useSWR<IServer.GetItems.Response>("/api/items");
  const [character, setCharacter]: InitialRecoilState<ICharacter> =
    useRecoilState(characterState);
  const setUpdatedCharacter = useSetRecoilState(updatedCharacterState);
  const [spellCompendium, setSpellCompendium] =
    useRecoilState(spellCompendiumState);
  const [itemCompendium, setItemCompendium] =
    useRecoilState(itemCompendiumState);
  const [primaryModifier, setPrimaryModifier]: InitialRecoilState<number> =
    useRecoilState(primaryModifierState);

  // Before the data is loaded, it will be `undefined`. So inside `useEffect`
  // hooks below, make sure the data exists.

  useEffect(
    function setFirstCharacterFromServer() {
      if (charactersResponse) {
        const getDefaultOrById = (id: string): ICharacter => {
          let foundCharacter = charactersResponse.characters.find(
            (char) => char.id === id,
          );
          return foundCharacter
            ? foundCharacter
            : charactersResponse.characters[0];
        };
        setCharacter(getDefaultOrById(character?.id));
        setUpdatedCharacter(getDefaultOrById(character?.id));
      }
    },
    [charactersResponse, setCharacter, setUpdatedCharacter, character?.id],
  );

  useEffect(
    function setCompendiumsFromServer() {
      if (spellsResponse && character && itemsResponse) {
        const characterSpellRefs = character.magic.spellRefs.map(
          (spell: ISpellRef) => spell.id,
        );
        const characterSlaRefs = character.magic.slaRefs.map(
          (spell: ISLARef) => spell.id,
        );
        const characterAllSpellRefs = characterSpellRefs.reduce(
          (previousValue, current, index) => {
            return [...previousValue, current, characterSlaRefs[index]].filter(
              (ref) => ref !== undefined,
            );
          },
          [],
        );
        const characterItemRefs = character.itemRefs.map(
          (item: IItemRef) => item.id,
        );

        const characterSpells = spellsResponse.spells.filter((spell) =>
          characterAllSpellRefs.includes(spell.id),
        );
        const characterItems = itemsResponse.items.filter((item) =>
          characterItemRefs.includes(item.id),
        );
        setSpellCompendium({ spells: characterSpells });
        setItemCompendium({ items: characterItems });
      }
    },
    [
      spellsResponse,
      character,
      setSpellCompendium,
      itemsResponse,
      setItemCompendium,
    ],
  );

  useEffect(
    function setPrimaryModifierWhenCharacterChanges() {
      if (character) {
        setPrimaryModifier(getPrimaryModifierValue(character));
      }
    },
    [character, setPrimaryModifier],
  );

  // Wait until all data has been flushed through Recoil and values exist.
  if (!(character && spellCompendium && primaryModifier && itemCompendium)) {
    return <>Loading...</>;
  }

  return <App />;
};

export default LoadApp;
