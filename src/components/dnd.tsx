import { useEffect } from "react";
import { Outlet } from "react-router";
import { useRecoilState } from "recoil";

import {
  useCharacter,
  useSetItemCompendium,
  useSetSpellCompendium,
  useSetAllCharacters,
  characterAtom,
  useSetSkillCompendium,
} from "../store/recoilState";
import { ActionToast } from "./ActionToast";
import { CharacterSelector } from "./CharacterSelector";
import { FadedSeparator } from "./FadedSeparator";
import { Nav } from "./Nav";
import { RollContainer } from "./RollContainer";

const App = () => {
  const character = useCharacter();

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
  const characters = useSetAllCharacters();
  const itemCompendium = useSetItemCompendium();
  const spellCompendium = useSetSpellCompendium();
  const skillCompendium = useSetSkillCompendium();
  const [character, setCharacter] = useRecoilState(characterAtom);

  useEffect(
    function setFirstCharacter() {
      if (character.id) return; // If character is already set, do nothing

      const firstCharacter = characters?.at(0);
      if (!firstCharacter) return;
      setCharacter(firstCharacter);
    },
    [characters, setCharacter],
  );

  if (
    !character.name ||
    !itemCompendium.at(0) ||
    !spellCompendium?.at(0) ||
    !skillCompendium?.skills ||
    !skillCompendium?.skillSynergies
  )
    return <div className="text-white">Loading...</div>;

  return <App />;
};

export default LoadApp;
