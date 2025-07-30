import { useState } from "react";
import { useRecoilState } from "recoil";

import { combine as c } from "../lib";
import { characterState, useResetDiceRoll } from "../store/recoilState";
import { useGetCharacters } from "../store/server";
import { FadedSeparator } from "./FadedSeparator";

export function CharacterSelector() {
  const [currentCharacter, setCurrentCharacter] =
    useRecoilState(characterState);
  const characters = useGetCharacters();
  const resetDiceRoll = useResetDiceRoll();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-indigo-950">
      <button
        className="flex justify-between items-center w-full px-4 py-2"
        onClick={() => setToggle(!toggle)}
      >
        <span className="text-lg">{currentCharacter.name}</span>
        {characters.length > 1 && (
          <i className="fas fa-solid fa-chevron-down" />
        )}
      </button>
      {toggle && characters.length > 1 && (
        <div>
          {characters
            .filter((c) => c.id !== currentCharacter.id)
            .map((character) => (
              <button
                key={character.id}
                className="flex justify-between items-center w-full py-2 px-4 hover:bg-indigo-700"
                onClick={() => {
                  setCurrentCharacter(character);
                  setToggle(false);
                  resetDiceRoll();
                }}
              >
                <span className="text-lg">{character.name}</span>
              </button>
            ))}
        </div>
      )}
      <FadedSeparator />
    </div>
  );
}
