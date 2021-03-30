import { Server, Model, RestSerializer, Response } from "miragejs";
import characters from "./characters";
import spells from "./spells";

// Any @ts-expected-errors below are probably because the authors of mirage
// don't understand TS

export function makeServer({ environment = "test" } = {}) {
  let server = new Server({
    environment,

    models: {
      character: Model,
      spell: Model,
    },

    serializers: {
      application: RestSerializer,
    },

    seeds(server) {
      // set up all the starting data
      // @ts-expect-error
      characters.forEach((char) => server.create("character", char));
      spells.forEach((spell) => server.create("spell", spell));
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

      this.put("/characters/:charId", (schema, request) => {
        const character = schema.find("character", request.params.charId);
        if (!character) return new Response(404);
        character.attrs = JSON.parse(request.requestBody);
        character.save();
        return { character };
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
  }
}
