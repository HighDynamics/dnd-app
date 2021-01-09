const Arn = {
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
  magic: {
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
    spellcaster: true,
    type: {
      arcane: true,
      divine: false,
    },
    spells: {
      zero: [
        "Mending",
        "Arcane Mark",
        "Ghost Sound",
        "Detect Magic",
        "Mage Hand",
        "Message",
        "Light",
        "Read Magic",
        "Acid Splash",
        "Lullaby",
        "Know Direction",
        "Open/Close",
        "Prestidigitation",
      ],
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
  items: [
    "Mesmerist's Gloves",
    "Nolzure's Orb",
    "Vanisher Cloak",
    "GateBreaker Ballista Bolt",
  ],
};

export default Arn;
