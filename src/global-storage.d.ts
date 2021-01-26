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
    subSchool?: string;
    descriptor?: string;
    level: string;
    components: string;
    castingTime: string;
    range: string;
    target?: string;
    effect?: string;
    area?: string;
    duration: string;
    savingThrow?: string;
    spellResistance?: string;
    description: string;
  };
}
