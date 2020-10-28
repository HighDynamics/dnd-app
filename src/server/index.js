import { Server, Model, RestSerializer } from "miragejs";
import characters from "./characters";
import spells from "./spells";

export function makeServer({ environment = "test" } = {}) {
  let server = new Server({
    environment,

    models: {
      character: Model,
      spell: Model,
      item: Model,
    },

    serializers: {
      application: RestSerializer,
    },

    seeds(server) {
      // set up all the starting data
      characters.forEach((char) => server.create("character", char));
      spells.forEach((spell) => server.create("spell", spell));

      server.create("item", { name: "cursed ring" });
    },

    routes() {
      this.namespace = "api";

      // Here is where you add the server endpoints for your app:

      this.get("/characters", (schema) => {
        return schema.characters.all();
      });

      this.patch("/characters/:charId", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        let characterId = request.params.charId;
        // debugger;
        let character = schema.find("character", characterId);
        character.update(attrs);
      });

      this.get("/spells", (schema) => {
        return schema.spells.all();
      });

      this.post("/items/new", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        schema.create("item", attrs);
        return "OK";
      });

      this.get("/items", (schema) => {
        return schema.items.all();
      });
    },
  });

  window.server = server;
  return server;
}
