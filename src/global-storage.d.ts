import characters from "./server/characters";

/* eslint-disable @typescript-eslint/no-unused-vars */
declare global {
  type ICharacter = typeof characters[number];

  namespace ICharacter {
    type Skill = ICharacter["skills"][number];
  }

  type ISpell = {
    id: string;
    name: string;
    school: string;
    level: string;
    components: string;
    effect?: string;
    castingTime: string;
    range: string;
    target?: string;
    duration: string;
    area?: string;
    savingThrow?: string;
    spellResistance?: string;
    description: string;
  };
}
