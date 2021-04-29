import characters from "./server/characters";

/* eslint-disable @typescript-eslint/no-unused-vars */
declare global {
  type ICharacter = {
    id: string;
    name: string;
    type: string[];
    hitPoints: {
      dieSize: number;
      total: number;
    };
    armorClass: {
      armor: number;
      shield: number;
      dexterity: number;
      size: number;
      naturalArmor: number;
      deflection: number;
      misc: number;
    };
    defense: {
      damageReduction: {
        amount: number;
        weakness: string;
      };
      spellResistance: number;
      energyResistance: {
        acid: number | null;
        cold: number | null;
        electricity: number | null;
        fire: number | null;
        sonic: number | null;
      };
      saves: {
        fortitude: Save;
        reflex: Save;
        will: Save;
      };
    };
    size: string;
    alignment: string;
    abilities: {
      score: {
        strength: number | null;
        dexterity: number | null;
        constitution: number | null;
        intelligence: number | null;
        wisdom: number | null;
        charisma: number | null;
      };
      primary:
        | "strength"
        | "dexterity"
        | "constitution"
        | "intelligence"
        | "wisdom"
        | "charisma";
    };
    speed: number;
    class: DNDClass[];
    skills: Skill[];
    characterAbilities: {
      active: SpecialAbilities[];
      passive: SpecialAbilities[];
    };
    spellcaster: boolean;
    magic: {
      type: {
        arcane: boolean;
        divine: boolean;
      };
      slaRefs: ISLARef[];
      spellRefs: ISpellRef[];
      spellsPerDay: {
        zero: number;
        one: number;
        two: number;
        three: number;
        four: number;
        five: number;
        six: number;
        seven: number;
        eight: number;
        nine: number;
      };
    };
    itemRefs: IItemRef[];
  };

  namespace ICharacter {
    type EnergyResistance = { [name: string]: number | null };
    type Save = {
      base: number;
      magic: number;
      misc: number;
    };
    type DNDClass = { name: string; level: number };
    type Skill = {
      name: string;
      ability: string;
      ranks: number;
      miscModifier: number;
      classSkill: boolean;
      armorCheck: boolean;
      display: boolean;
    };
    type SpecialAbilities = { name: string; type: string };
  }

  type ISpellRef = {
    id: string;
    level: number;
    innate: boolean;
  };
  type ISLARef = {
    id: string;
    level: number;
    uses: number;
    frequency: string;
  };
  type IItemRef = {
    id: string;
  };
  type IItem = {
    id: string;
    name: string;
    weight?: number;
    casterLevel?: number;
    price?: string;
    description: string;
  };
  type ISpell = {
    id: string;
    isSrd: boolean;
    name: string;
    school: string;
    subSchool?: string;
    descriptor?: string;
    level: string;
    components?: string;
    castingTime?: string;
    range?: string;
    target?: string;
    effect?: string;
    area?: string;
    duration?: string;
    savingThrow?: string;
    spellResistance?: string;
    description: string;
  };
  type ICompendium = {
    [key: string]: ISpell[] | IItem[];
  };
}
