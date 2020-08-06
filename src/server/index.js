import { Server, Model, RestSerializer } from "miragejs"
import characters from './characters'

export function makeServer({ environment = "test" } = {}) {
  let server = new Server({
    environment,

    models: {
      character: Model,
    },

    serializers: {
      application: RestSerializer
    },

    seeds(server) {
      // set up all the starting data
      characters.forEach(char => server.create("character", char))
    },

    routes() {
      this.namespace = "api"

      // Here is where you add the server endpoints for your app:

      this.get("/characters", (schema) => {
        return schema.characters.all()
      })
    },
  })

  return server
}