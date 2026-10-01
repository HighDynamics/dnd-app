// Request/response shapes for the /api routes (server/routes.ts).
export {};

declare global {
  namespace IServer {
    namespace GetAbilities {
      type Response = { abilities: CompendiumAbility[] };
    }

    namespace GetCharacters {
      type Response = { characters: ICharacter[] };
    }
    namespace GetCharacter {
      type Response = { character: ICharacter };
    }
    namespace PutCharacter {
      type Request = ICharacter;
      type Response = { character: ICharacter };
    }

    namespace GetSpells {
      type Response = { spells: ISpell[] };
    }
    namespace PostSpell {
      type Request = Omit<ISpell, "id">;
      type Response = { spell: ISpell };
    }

    namespace GetItems {
      type Response = { items: IItem[] };
    }

    namespace GetSkills {
      type Response = { skills: CompendiumSkill[] };
    }
    namespace PutSkill {
      type Request = CompendiumSkill;
      type Response = { skill: CompendiumSkill };
    }
    namespace PostSkill {
      type Request = Omit<CompendiumSkill, "id">;
      type Response = { skill: CompendiumSkill };
    }

    namespace GetSkillSynergies {
      type Response = { skillSynergies: CompendiumSkillSynergy[] };
    }
    namespace PutSkillSynergy {
      type Request = CompendiumSkillSynergy;
      type Response = { synergy: CompendiumSkillSynergy };
    }
    namespace PostSkillSynergy {
      type Request = Omit<CompendiumSkillSynergy, "id">;
      type Response = { synergy: CompendiumSkillSynergy };
    }
  }
}

declare module "@tanstack/react-query" {
  interface Register {
    mutationMeta: {
      // Set by mutations that show their own errors instead of the global toast.
      handlesOwnErrors?: boolean;
    };
  }
}
