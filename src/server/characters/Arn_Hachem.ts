const Arn = {
  id: "1",
  name: "Arn Hachem",
  type: ["Human", "Sanctified", "Deathless", "Spellstitched", "Archlich"],
  hitPoints: {
    dieSize: 12,
    total: 321,
  },
  armorClass: {
    armor: 5,
    shield: 4,
    dexterity: 12,
    size: 0,
    naturalArmor: 5,
    deflection: 4,
    misc: 0,
  },
  defense: {
    damageReduction: {
      amount: 15,
      weakness: "bludgeoning, chaotic",
    },
    spellResistance: 27,
    energyResistance: {
      acid: 0,
      cold: null,
      electricity: null,
      fire: 0,
      sonic: 0,
    },
    saves: {
      fortitude: {
        base: 16,
        magic: 0,
        misc: 6,
      },
      reflex: {
        base: 10,
        magic: 0,
        misc: 6,
      },
      will: {
        base: 18,
        magic: 7,
        misc: 6,
      },
    },
  },
  size: "Medium",
  alignment: "Lawful-Good",
  abilities: {
    score: {
      strength: 18,
      dexterity: 24,
      constitution: null,
      intelligence: 22,
      wisdom: 17,
      charisma: 35,
    },
    primary: "charisma" as
      | "strength"
      | "dexterity"
      | "constitution"
      | "intelligence"
      | "wisdom"
      | "charisma",
  },
  speed: 40,
  class: [
    { name: "Sorcerer", level: 1 },
    { name: "Mindtender", level: 2 },
    { name: "Fleshwarper", level: 2 },
    { name: "Malconvoker", level: 8 },
    { name: "Binder", level: 1 },
    { name: "Bard", level: 1 },
    { name: "Master Of Masks", level: 5 },
    { name: "Voidcaller", level: 1 },
  ],
  skills: [
    {
      name: "Appraise",
      ability: "intelligence",
      ranks: 0,
      miscModifier: 4,
      classSkill: true,
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
      ranks: 24,
      miscModifier: 13,
      classSkill: true,
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
      ranks: 15,
      miscModifier: 0,
      classSkill: true,
      armorCheck: false,
      display: true,
    },
    {
      name: "Craft Tailor",
      ability: "intelligence",
      ranks: 17,
      miscModifier: 0,
      classSkill: true,
      armorCheck: false,
      display: true,
    },
    {
      name: "Decipher Script",
      ability: "intelligence",
      ranks: 13,
      miscModifier: 0,
      classSkill: true,
      armorCheck: false,
      display: true,
    },
    {
      name: "Diplomacy",
      ability: "charisma",
      ranks: 10,
      miscModifier: 12,
      classSkill: true,
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
      ranks: 24,
      miscModifier: 9,
      classSkill: true,
      armorCheck: false,
      display: true,
    },
    {
      name: "Escape Artist",
      ability: "dexterity",
      ranks: 0,
      miscModifier: 0,
      classSkill: true,
      armorCheck: true,
      display: true,
    },
    {
      name: "Forgery",
      ability: "intelligence",
      ranks: 0,
      miscModifier: 0,
      classSkill: true,
      armorCheck: false,
      display: true,
    },
    {
      name: "Gather Information",
      ability: "charisma",
      ranks: 0,
      miscModifier: 0,
      classSkill: true,
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
      ranks: 20,
      miscModifier: 0,
      classSkill: true,
      armorCheck: false,
      display: true,
    },
    {
      name: "Hide",
      ability: "dexterity",
      ranks: 0,
      miscModifier: 13,
      classSkill: false,
      armorCheck: true,
      display: false,
    },
    {
      name: "Intimidate",
      ability: "charisma",
      ranks: 1,
      miscModifier: 12,
      classSkill: true,
      armorCheck: false,
      display: true,
    },
    {
      name: "Jump",
      ability: "strength",
      ranks: 0,
      miscModifier: 0,
      classSkill: true,
      armorCheck: true,
      display: true,
    },
    {
      name: "Knowledge Arcana",
      ability: "intelligence",
      ranks: 20,
      miscModifier: 0,
      classSkill: true,
      armorCheck: false,
      display: true,
    },
    {
      name: "Knowledge Dungeoneering",
      ability: "intelligence",
      ranks: 8,
      miscModifier: 0,
      classSkill: true,
      armorCheck: false,
      display: true,
    },
    {
      name: "Knowledge Religion",
      ability: "intelligence",
      ranks: 10,
      miscModifier: 0,
      classSkill: true,
      armorCheck: false,
      display: true,
    },
    {
      name: "Knowledge Planes",
      ability: "intelligence",
      ranks: 23,
      miscModifier: 0,
      classSkill: true,
      armorCheck: false,
      display: true,
    },
    {
      name: "Knowledge History",
      ability: "intelligence",
      ranks: 0,
      miscModifier: 0,
      classSkill: true,
      armorCheck: false,
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
      display: false,
    },
    {
      name: "Open Lock",
      ability: "dexterity",
      ranks: 0,
      miscModifier: 0,
      classSkill: true,
      armorCheck: true,
      display: false,
    },
    {
      name: "Perception",
      ability: "wisdom",
      ranks: 9,
      miscModifier: 16,
      classSkill: true,
      armorCheck: false,
      display: true,
    },
    {
      name: "Perform Acting",
      ability: "charisma",
      ranks: 20,
      miscModifier: 0,
      classSkill: true,
      armorCheck: false,
      display: true,
    },
    {
      name: "Perform Dancing",
      ability: "charisma",
      ranks: 1,
      miscModifier: 0,
      classSkill: true,
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
      ranks: 6,
      miscModifier: 18,
      classSkill: true,
      armorCheck: false,
      display: true,
    },
    {
      name: "Sleight of Hand",
      ability: "dexterity",
      ranks: 7,
      miscModifier: 2,
      classSkill: true,
      armorCheck: true,
      display: false,
    },
    {
      name: "Spellcraft",
      ability: "intelligence",
      ranks: 20,
      miscModifier: 2,
      classSkill: true,
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
      name: "Stealth",
      ability: "dexterity",
      ranks: 0,
      miscModifier: 23,
      classSkill: true,
      armorCheck: true,
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
      miscModifier: 8,
      classSkill: false,
      armorCheck: true,
      display: true,
    },
    {
      name: "Use Magic Device",
      ability: "charisma",
      ranks: 0,
      miscModifier: 2,
      classSkill: true,
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
    active: [
      { name: "Light Ray", type: "supernatural" },
      { name: "Paralyzing Touch", type: "supernatural" },
      { name: "Positive Energy Touch", type: "supernatural" },
      { name: "Turn Undead", type: "supernatural" },
    ],
    passive: [{ name: "Aura Of Menace", type: "supernatural" }],
  },
  spellcaster: true,
  magic: {
    type: {
      arcane: true,
      divine: false,
    },
    sla_refs: [
      { id: "srd14", level: 1, uses: 4, frequency: "day" },
      { id: "srd15", level: 2, uses: 4, frequency: "day" },
    ],
    slas: {
      zero: "",
      one: [
        { name: "Chill Touch", uses: 4, frequency: "day" },
        { name: "Floating Disk", uses: 4, frequency: "day" },
      ],
      two: [
        { name: "Command Undead", uses: 4, frequency: "day" },
        { name: "Acid Arrow", uses: 4, frequency: "day" },
      ],
      three: [
        { name: "Vampiric Touch", uses: 2, frequency: "day" },
        { name: "Phantom Steed", uses: 2, frequency: "day" },
      ],
      four: [
        { name: "Affliction", uses: 2, frequency: "day" },
        { name: "Enervation", uses: 2, frequency: "day" },
      ],
      five: [
        { name: "Mage's Faithful Hound", uses: 2, frequency: "day" },
        { name: "Wall Of Force", uses: 2, frequency: "day" },
      ],
      six: [{ name: "Contingency", uses: 1, frequency: "day" }],
      seven: "",
      eight: "",
      nine: "",
    },
    spell_refs: [
      { id: "srd1", level: 0, innate: true },
      { id: "srd1", level: 0, innate: false },
      { id: "srd2", level: 0, innate: true },
      { id: "srd2", level: 0, innate: false },

      { id: "srd3", level: 0, innate: true },
      { id: "srd4", level: 0, innate: true },
      { id: "srd5", level: 0, innate: true },
      { id: "srd5", level: 0, innate: false },

      { id: "srd6", level: 0, innate: true },
      { id: "srd6", level: 0, innate: false },

      { id: "srd7", level: 0, innate: true },
      { id: "srd8", level: 0, innate: true },
      { id: "srd9", level: 0, innate: true },
      { id: "srd10", level: 0, innate: true },
      { id: "srd11", level: 0, innate: true },
      { id: "srd12", level: 0, innate: true },
      { id: "srd12", level: 0, innate: false },

      { id: "srd13", level: 0, innate: true },
      { id: "srd13", level: 0, innate: false },
    ],
    spells: {
      zero: [],
      one: [
        "Silent Image",
        "Disguise Self",
        "Magic Missile",
        "Mage Armor",
        "Charm Person",
      ],
      two: [
        "Ghoul Touch",
        "Arcane Lock",
        "Knock",
        "Alter Fortune",
        "Scorching Ray",
      ],
      three: [
        "Shrink Item",
        "Tiny Hut",
        "Ray Of Exhaustion",
        "Explosive Runes",
      ],
      four: ["Resilient Sphere", "Create Fetch", "Dimension Door", "Polymorph"],
      five: [
        "Telekinesis",
        "Sending",
        "Passwall",
        "Planar Binding, Lesser",
        "Feeblemind",
      ],
      six: [
        "Disintigrate",
        "Freezing Sphere",
        "Planar Binding",
        "Permanent Image",
      ],
      seven: ["Teleport Object", "Stun Ray", "Waves Of Exhaustion"],
      eight: [
        "Polymorph Any Object",
        "Horrid Wilting",
        "Planar Binding, Greater",
        "Last Judgment",
      ],
      nine: [
        "Replicate Casting",
        "Sphere Of Ultimate Destruction",
        "Crushing Hand",
      ],
    },
    spellbook: {
      zero: [
        "Arcane Mark",
        "Prestidigitation",
        "Mage Hand",
        "Resistance",
        "Disrupt Undead",
        "Touch Of Fatigue",
        "Mending",
        "Message",
        "Open/Close",
        "Preserve Organ",
        "No-Light",
        "Slash Tongue",
        "Silent Portal",
      ],
      one: ["one"],
      two: ["two"],
      three: ["three"],
      four: ["four"],
      five: ["five"],
      six: ["six"],
      seven: ["seven"],
      eight: ["eight"],
      nine: ["nine"],
    },
    spellsPerDay: {
      zero: 8,
      one: 6,
      two: 6,
      three: 6,
      four: 6,
      five: 6,
      six: 6,
      seven: 6,
      eight: 6,
      nine: 6,
    },
  },
  item_refs: [{ id: "1" }],
};

export default Arn;
