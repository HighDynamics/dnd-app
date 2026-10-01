import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { useCharacter, useCharacters } from "../store/character";
import { useResetDiceRoll } from "../store/ui";
import { FadedSeparator } from "./FadedSeparator";

export function CharacterSelector() {
  const currentCharacter = useCharacter();
  const characters = useCharacters();
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
                  // Stay on the same tab for the new character.
                  navigate(
                    pathname.replace(
                      `/characters/${currentCharacter.id}`,
                      `/characters/${character.id}`,
                    ),
                  );
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
