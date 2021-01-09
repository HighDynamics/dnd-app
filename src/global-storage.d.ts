import characters from "./server/characters";
import spells from "./server/spells";

declare global {
  type ICharacter = typeof characters[0];
  type ISpell = typeof spells[0];
}
