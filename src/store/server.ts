import { useRecoilState } from "recoil";
import useSWR from "swr";

import { characterAtom, skillCompendiumAtom } from "./recoilState";

export function useGetSkills() {
  const resp = useSWR<IServer.GetSkills.Response>("/api/skills");
  if (resp.error) throw new Error("Failed to fetch skill compendium");
  return resp.data?.skills;
}

function addSkill(newSkill: CompendiumSkill) {
  return fetch(`/api/skills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSkill),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to add skill");
    }
    return response.json();
  });
}

export function useAddSkill() {
  const [skillCompendium, setSkillCompendium] =
    useRecoilState(skillCompendiumAtom);
  return (newSkill: CompendiumSkill) => {
    return addSkill(newSkill).then((response) => {
      setSkillCompendium({
        ...skillCompendium,
        skills: [...skillCompendium.skills, response.skill],
      });
      return response;
    });
  };
}

function updateSkill(updatedSkill: CompendiumSkill) {
  return fetch(`/api/skills/${updatedSkill.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedSkill),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to update skill");
    }
    return response.json();
  });
}

export function useUpdateSkill() {
  const [skillCompendium, setSkillCompendium] =
    useRecoilState(skillCompendiumAtom);
  return (updatedSkill: CompendiumSkill) => {
    return updateSkill(updatedSkill).then((response) => {
      const updatedSkills = skillCompendium.skills.map((skill) =>
        skill.id === updatedSkill.id ? response.skill : skill,
      );
      setSkillCompendium({
        ...skillCompendium,
        skills: updatedSkills,
      });
      return response;
    });
  };
}

export function useGetSkillSynergies() {
  const resp = useSWR<IServer.GetSkillSynergies.Response>(
    "/api/skill-synergies",
  );
  if (resp.error) throw new Error("Failed to fetch skill synergies");
  return resp.data?.skillSynergies;
}

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
