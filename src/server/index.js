import { Server, Model, RestSerializer } from "miragejs";
import characters from "./characters";
import spells from "./spells";

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
      characters.forEach((char) => server.create("character", char));
      spells.forEach((spell) => server.create("spell", spell));
    },

    routes() {
      this.namespace = "api";

      // Here is where you add the server endpoints for your app:

      this.get("/characters", (schema) => {
        return schema.characters.all();
      });

      this.get("/spells", (schema) => {
        return schema.spells.all();
      });

      this.put("/characters/:charId", (schema, request) => {
        const character = schema.find("character", request.params.charId);
        character.attrs = JSON.parse(request.requestBody);
        character.save();
        return { character };
      });
    },
  });

  return server;
}
