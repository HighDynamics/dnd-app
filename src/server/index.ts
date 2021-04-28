import { Server, Model, RestSerializer, Response } from "miragejs";
import characters from "./characters";
import spells from "./spells";
import items from "./items";

// Any @ts-expected-errors below are probably because the authors of mirage
// don't understand TS

export function makeServer({ environment = "test" } = {}) {
  let server = new Server({
    environment,

    models: {
      character: Model,
      spell: Model,
      items: Model,
    },

    serializers: {
      application: RestSerializer,
    },

    seeds(server) {
      // set up all the starting data
      characters.forEach((char) => server.create("character", char));
      spells.forEach((spell) => server.create("spell", spell));
      items.forEach((item) => server.create("item", item));
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

      this.put("/characters/:charId", (schema, request) => {
        const character = schema.find("character", request.params.charId);
        if (!character) return new Response(404);
        character.attrs = JSON.parse(request.requestBody);
        character.save();
        return { character };
      });
      this.post("/spells", (schema, request) => {
        const newSpell = schema.find("spell", "0");
        newSpell.attrs = JSON.parse(request.requestBody);
        newSpell.save();
        return { newSpell };
      });
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
      type Request = ISpell;
      type Response = { spell: ISpell };
    }

    namespace GetItems {
      type Response = { items: IItem[] };
    }
  }
}
