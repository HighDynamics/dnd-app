import { useEffect } from "react";
import { Outlet } from "react-router";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import useSWR from "swr";

import {
  characterState,
  spellCompendiumState,
  updatedCharacterState,
  InitialRecoilState,
  itemCompendiumState,
} from "../store/recoilState";
import { ActionToast } from "./ActionToast";
import { CharacterSelector } from "./CharacterSelector";
import { FadedSeparator } from "./FadedSeparator";
import { Nav } from "./Nav";
import { RollContainer } from "./RollContainer";

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
      <div className="text-stone-200 flex flex-col h-screen max-w-lg mx-auto">
        <div className="grow overflow-auto">
          <div className="z-20">
            <CharacterSelector />
          </div>
          <div className="sticky top-0 z-10">
            <RollContainer />
          </div>
          <div className="p-4">
            <Outlet />
          </div>
        </div>
        <div>
          <FadedSeparator />
          <Nav />
        </div>
      </div>
    </>
  );
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

  // Wait until all data has been flushed through Recoil and values exist.
  if (!(character && spellCompendium && itemCompendium)) {
    return <>Loading...</>;
  }

  return <App />;
};

export default LoadApp;
