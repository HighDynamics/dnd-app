import { useRecoilState } from "recoil";

import { characterState } from "./recoilState";

function updateCharacter(
  characterId: string,
  characterData: IServer.PutCharacter.Request,
): Promise<IServer.PutCharacter.Response> {
  return fetch(`/api/characters/${characterId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(characterData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to update character");
    }
    return response.json();
  });
}

export function useUpdateCharacter() {
  const [character, setCharacter] = useRecoilState(characterState);

  return (characterData: IServer.PutCharacter.Request) => {
    return updateCharacter(character.id, characterData).then((response) => {
      setCharacter(response.character);
      return response;
    });
  };
}
