const NewCharacter = {
  id: "0",
  name: "New Character",
  type: [],
  hitPoints: {
    dieSize: 8,
    total: 0,
  },
  armorClass: {
    armor: 0,
    shield: 0,
    dexterity: 0,
    size: 0,
    naturalArmor: 0,
    deflection: 0,
    misc: 0,
  },
  defense: {
    damageReduction: {
      amount: 0,
      weakness: "",
    },
    spellResistance: 0,
    energyResistance: {
      acid: 0,
      cold: 0,
      electricity: 0,
      fire: 0,
      sonic: 0,
    },
    saves: {
      fortitude: {
        base: 0,
        magic: 0,
        misc: 0,
      },
      reflex: {
        base: 0,
        magic: 0,
        misc: 0,
      },
      will: {
        base: 0,
        magic: 0,
        misc: 0,
      },
    },
  },
  size: "Medium",
  alignment: "Neutral",
  abilities: {
    score: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },
    primary: "intelligence" as
      | "strength"
      | "dexterity"
      | "constitution"
      | "intelligence"
      | "wisdom"
      | "charisma",
  },
  speed: 30,
  class: [],
  skills: [
    {
      name: "Appraise",
      ability: "intelligence",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Balance",
      ability: "dexterity",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: true,
      display: true,
    },
    {
      name: "Bluff",
      ability: "charisma",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Climb",
      ability: "strength",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: true,
      display: true,
    },
    {
      name: "Concentration",
      ability: "charisma",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Decipher Script",
      ability: "intelligence",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Diplomacy",
      ability: "charisma",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Disable Device",
      ability: "intelligence",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Diguise",
      ability: "charisma",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Escape Artist",
      ability: "dexterity",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: true,
      display: true,
    },
    {
      name: "Forgery",
      ability: "intelligence",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Gather Information",
      ability: "charisma",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Handle Animal",
      ability: "charisma",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },

    {
      name: "Heal",
      ability: "wisdom",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Hide",
      ability: "dexterity",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: true,
      display: true,
    },
    {
      name: "Intimidate",
      ability: "charisma",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Jump",
      ability: "strength",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: true,
      display: true,
    },
    {
      name: "Listen",
      ability: "wisdom",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Move Silently",
      ability: "dexterity",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: true,
      display: true,
    },
    {
      name: "Open Lock",
      ability: "dexterity",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: true,
      display: true,
    },
    {
      name: "Ride",
      ability: "dexterity",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Search",
      ability: "intelligence",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Sense Motive",
      ability: "wisdom",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Sleight of Hand",
      ability: "dexterity",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: true,
      display: true,
    },
    {
      name: "Spellcraft",
      ability: "intelligence",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Spot",
      ability: "wisdom",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Survival",
      ability: "wisdom",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Swim",
      ability: "strength",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: true,
      display: true,
    },
    {
      name: "Use Magic Device",
      ability: "charisma",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
    {
      name: "Use Rope",
      ability: "dexterity",
      ranks: 0,
      miscModifier: 0,
      classSkill: false,
      armorCheck: false,
      display: true,
    },
  ],
  characterAbilities: {
    active: [],
    passive: [],
  },
  spellcaster: true,
  magic: {
    type: {
      arcane: true,
      divine: false,
    },
    slaRefs: [],
    spellRefs: [],
  },
  itemRefs: [],
};

export default NewCharacter;