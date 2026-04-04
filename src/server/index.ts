import { Server, Model, RestSerializer, Response } from "miragejs";

import characters from "./characters";
import items from "./items";
import { skills, skillSynergies } from "./skills";
import spells from "./spells";

// Any @ts-expected-errors below are probably because the authors of mirage
// don't understand TS

export function makeServer({ environment = "test" } = {}) {
  let server = new Server({
    environment,

    models: {
      character: Model,
      spell: Model,
      items: Model,
      skill: Model,
      skillSynergy: Model,
    },

    serializers: {
      application: RestSerializer,
    },

    seeds(server) {
      // set up all the starting data
      characters.forEach((char) => server.create("character", char));
      spells.forEach((spell) => server.create("spell", spell));
      items.forEach((item) => server.create("item", item));
      skills.forEach((skill) => server.create("skill", skill));
      skillSynergies.forEach((synergy) =>
        server.create("skillSynergy", synergy),
      );
    },

    routes() {
      this.namespace = "api";

      // Here is where you add the server endpoints for your app:

      this.get("/characters", (schema) => {
        // @ts-expect-error
        return schema.characters.all();
      });

      this.get("/spells", (schema) => {
        // @ts-expect-error
        return schema.spells.all();
      });

      this.get("/items", (schema) => {
        // @ts-expect-error
        return schema.items.all();
      });
      this.get("/skills", (schema) => {
        // @ts-expect-error
        return schema.skills.all();
      });
      this.get("/skill-synergies", (schema) => {
        // @ts-expect-error
        return schema.skillSynergies.all();
      });

      this.put("/characters/:charId", (schema, request) => {
        const character = schema.find("character", request.params.charId);
        if (!character) return new Response(404);
        character.attrs = JSON.parse(request.requestBody);
        character.save();
        return { character };
      });
      this.put("/skills/:skillId", (schema, request) => {
        const skill = schema.find("skill", request.params.skillId);
        if (!skill) return new Response(404);
        skill.attrs = JSON.parse(request.requestBody);
        skill.save();
        return { skill };
      });
      this.put("/skill-synergies/:synergyId", (schema, request) => {
        const synergy = schema.find("skillSynergy", request.params.synergyId);
        if (!synergy) return new Response(404);
        synergy.attrs = JSON.parse(request.requestBody);
        synergy.save();
        return { synergy };
      });

      this.post("/spells", (schema, request) =>
        schema.create("spell", JSON.parse(request.requestBody)),
      );
      this.post("/skills", (schema, request) =>
        schema.create("skill", {
          ...JSON.parse(request.requestBody),
          id: crypto.randomUUID(),
        }),
      );
      this.post("/synergies", (schema, request) =>
        schema.create("skillSynergy", JSON.parse(request.requestBody)),
      );
    },
  });

  return server;
}

declare global {
  namespace IServer {
    namespace GetCharacters {
      type Response = { characters: ICharacter[] };
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
