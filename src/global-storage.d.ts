import characters from "./server/characters";
import spells from "./server/spells";

/* eslint-disable @typescript-eslint/no-unused-vars */
declare global {
  type ICharacter = typeof characters[number];

  namespace ICharacter {
    type Skill = ICharacter["skills"][number];
  }

  type ISpell = typeof spells[0];
}
