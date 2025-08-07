import { useRecoilState } from "recoil";
import useSWR from "swr";

import { characterAtom } from "./recoilState";

export function useGetCharacters() {
  const resp = useSWR<IServer.GetCharacters.Response>("/api/characters");
  if (resp.error) throw new Error("Failed to fetch characters");
  return resp.data?.characters;
}

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
  const [character, setCharacter] = useRecoilState(characterAtom);

  if (!character) throw new Error("No character atom set");

  return (characterData: IServer.PutCharacter.Request) => {
    return updateCharacter(character.id, characterData).then((response) => {
      setCharacter(response.character);
      return response;
    });
  };
}

export function useGetSpells() {
  const resp = useSWR<IServer.GetSpells.Response>("/api/spells");
  if (resp.error) throw new Error("Failed to fetch spells");
  return resp.data?.spells;
}

export function useGetItems() {
  const resp = useSWR<IServer.GetItems.Response>("/api/items");
  if (resp.error) throw new Error("Failed to fetch items");
  return resp.data?.items;
}
