export default {
  name: "Arn Hachem",
  type: ["Human", "Sanctified", "Deathless", "Spellstitched", "Archlich"],
  hitPoints: {
    dieSize: 12,
    total: 255,
    damage: 0,
    temporaryHitPoints: 0
  },
  armorClass: {
    ac: {
      total: 37,
      armor: 6,
      shield: 0,
      dexterity: 12,
      size: 0,
      naturalArmor: 5,
      deflection: 4,
      misc: 0
    },
    touch: 22,
    flatFooted: 23
  },
  size: "Medium",
  alignment: "Lawful-Good",
  abilities: {
    score: {
      strength: 18,
      dexterity: 24,
      constitution: "--",
      intelligence: 22,
      wisdom: 17,
      charisma: 35
    }
  },
  speed: 30,
  level: "20",
  class: [
    "Sorcerer(1)",
    "Mindtender(2)",
    "Fleshwarper(2)",
    "Malconvoker(7)",
    "Binder(1)",
    "Bard(1)",
    "Master Of Masks(5)"
  ],
  skills: {
    Balance: 12,
    Climb: 4,
    Concentration: 27,
    Escape_Artist: 12,
    Hide: 25,
    Jump: 4,
    Listen: 4,
    Move_Silently: 12,
    Ride: 12,
    Search: 6,
    Spot: 4,
    Survival: 4,
    Swim: 12,
    Use_Rope: 12
  },
  classSkills: {
    Appraise: 10,
    Bluff: 41,
    Craft_Tailor: 13,
    Decipher_Script: 23,
    Diplomacy: 18,
    Diguise: 39,
    Forgery: 6,
    Gather_Information: 9,
    Heal: 16,
    Intimidate: 19,
    Knowledge_Arcana: 26,
    Knowledge_Dungeoneering: 14,
    Knowledge_Religion: 16,
    Knowledge_Planes: 8,
    Perception: 19,
    Perform_Acting: 36,
    Perform_Dancing: 13,
    SenseMotive: 21,
    Spellcraft: 28,
    Stealth: 28,
    Use_Magic_Device: 12
  },
  characterAbilities: {
    active: [
      "Light_Ray",
      "Paralyzing_Touch",
      "Positive_Energy_Touch",
      "Turn_Undead"
    ],
    passive: ["Aura_Of_Menace"]
  },
  magic: {
    slas: {
      zero: "",
      one: ["Chill_Touch", "Floating_Disk"],
      two: ["Command_Undead", "Acid_Arrow"],
      three: ["Vampiric_Touch", "Phantom_Steed"],
      four: ["Affliction", "Enervation"],
      five: ["Mage's_Faithful_Hound", "Wall_Of_Force"],
      six: ["Contingency"],
      seven: "",
      eight: "",
      nine: ""
    },
    spellcaster: true,
    type: {
      arcane: true,
      divine: false
    },
    spells: {
      zero: [
        "Mending",
        "Arcane_Mark",
        "Ghost_Sound",
        "Detect_Magic",
        "Mage_Hand",
        "Message",
        "Light",
        "Read Magic",
        "Acid_Splash",
        "Lullaby",
        "Know_Direction",
        "Open/Close",
        "Prestidigitation"
      ],
      one: [
        "Silent_Image",
        "Disguise_Self",
        "Magic_Missile",
        "Mage_Armor",
        "Charm_Person"
      ],
      two: [
        "Ghoul_Touch",
        "Arcane_Lock",
        "Knock",
        "Alter_Fortune",
        "Scorching_Ray"
      ],
      three: [
        "Shrink_Item",
        "Tiny_Hut",
        "Ray_Of_Exhaustion",
        "Explosive_Runes"
      ],
      four: ["Resilient_Sphere", "Create_Fetch", "Dimension_Door", "Polymorph"],
      five: [
        "Telekinesis",
        "Sending",
        "Passwall",
        "Planar_Binding,_Lesser",
        "Feeblemind"
      ],
      six: [
        "Disintigrate",
        "Freezing_Sphere",
        "Planar_Binding",
        "Permanent_Image"
      ],
      seven: ["Teleport_Object", "Stun_Ray", "Waves_Of_Exhaustion"],
      eight: [
        "Polymorph_Any_Object",
        "Horrid_Wilting",
        "Planar_Binding,_Greater",
        "Last_Judgment"
      ],
      nine: [
        "Replicate_Casting",
        "Sphere_Of_Ultimate_Destruction",
        "Crushing_Hand"
      ]
    },
    spellbook: {
      zero: [
        "Arcane_Mark",
        "Prestidigitation",
        "Mage_Hand",
        "Resistance",
        "Disrupt Undead",
        "Touch_Of_Fatigue",
        "Mending",
        "Message",
        "Open/Close",
        "Preserve_Organ",
        "No-Light",
        "Slash_Tongue",
        "Silent_Portal"
      ],
      one: ["a"],
      two: ["a"],
      three: ["a"],
      four: ["a"],
      five: ["a"],
      six: ["a"],
      seven: ["a"],
      eight: ["a"],
      nine: ["a"]
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
      nine: 6
    }
  },
  items: [
    "Mesmerist's_Gloves",
    "Nolzure's_Orb",
    "Vanisher_Cloak",
    "GateBreaker_Ballista_Bolt"
  ]
};
