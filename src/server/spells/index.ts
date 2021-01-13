const spellCompendium: ISpell[] = [
  //Mending
  {
    id: "srd1",
    name: "Mending",
    type: "Transmutation",
    level: "Brd 0, Clr 0, Drd 0, Sor/Wiz 0",
    components: "V, S",
    castingTime: "1 standard action",
    range: "10 ft.",
    target: "One object of up to 1 lb.",
    duration: "Instantaneous",
    savingThrow: "Will negates (harmless, object)",
    spellResistance: "Yes (harmless, object)",
    description:
      "Mending repairs small breaks or tears in objects (but not warps, such as might be caused by a warp wood spell). It will weld broken metallic objects such as a ring, a chain link, a medallion, or a slender dagger, providing but one break exists.\n\nCeramic or wooden objects with multiple breaks can be invisibly rejoined to be as strong as new. A hole in a leather sack or a wineskin is completely healed over by mending. The spell can repair a magic item, but the item’s magical abilities are not restored. The spell cannot mend broken magic rods, staffs, or wands, nor does it affect creatures (including constructs).",
  },
  //Arcane Mark
  {
    id: "srd2",
    name: "Arcane Mark",
    type: "Universal",
    level: "Sor/Wiz 0",
    components: "V, S",
    castingTime: "1 standard action",
    range: "0 ft.",
    effect: "One personal rune or mark, all of which must fit within 1 sq. ft.",
    duration: "Permanent",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "This spell allows you to inscribe your personal rune or mark, which can consist of no more than six characters. The writing can be visible or invisible. An arcane mark spell enables you to etch the rune upon any substance without harm to the material upon which it is placed. If an invisible mark is made, a detect magic spell causes it to glow and be visible, though not necessarily understandable.\n\nSee invisibility, true seeing, a gem of seeing, or a robe of eyes likewise allows the user to see an invisible arcane mark. A read magic spell reveals the words, if any. The mark cannot be dispelled, but it can be removed by the caster or by an erase spell.\n\nIf an arcane mark is placed on a living being, normal wear gradually causes the effect to fade in about a month.\n\nArcane mark must be cast on an object prior to casting instant summons on the same object (see that spell description for details).",
  },
  //Ghost Sound
  {
    id: "srd3",
    name: "Ghost Sound",
    type: "Illusion (Figment)",
    level: "Bard 0, Sor/Wiz 0",
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    effect: "Illusory sounds",
    duration: "1 round/level (D)",
    savingThrow: "Will disbelief (if interacted with)",
    spellResistance: "No",
    description:
      "Ghost sound allows you to create a volume of sound that rises, recedes, approaches, or remains at a fixed place.\n\nYou choose what type of sound ghost sound creates when casting it and cannot thereafter change the sound's basic character.\n\nThe volume of sound created depends on your level.\n\nYou can produce as much noise as four normal humans per caster level (maximum twenty humans).\n\nThus, talking, singing, shouting, walking, marching, or running sounds can be created.\n\nThe noise a ghost sound spell produces can be virtually any type of sound within the volume limit.\n\nA horde of rats running and squeaking is about the same volume as eight humans running and shouting.\n\nA roaring lion is equal to the noise from sixteen humans, while a roaring dire tiger is equal to the noise from twenty humans.\n\nGhost sound can enhance the effectiveness of a silent image spell.\n\nGhost sound can be made permanent with a permanency spell.\n\nMaterial Component: A bit of wool or a small lump of wax.",
  },
  //Detect magic
  {
    id: "srd4",
    name: "Detect Magic",
    type: "Divination",
    level: "Brd 0, Clr 0, Drd 0, Sor/Wiz 0",
    components: "V, S",
    castingTime: "1 standard action",
    range: "60 ft.",
    duration: "Concentration, up to 1 min./level (D)",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "You detect magical auras. The amount of information revealed depends on how long you study a particular area or subject.\n\n1st Round: Presence or absence of magical auras.\n\n2nd Round: Number of different magical auras and the power of the most potent aura.\n\n3rd Round: The strength and location of each aura. If the items or creatures bearing the auras are in line of sight, you can make Spellcraft skill checks to determine the school of magic involved in each. (Make one check per aura; DC 15 + spell level, or 15 + half caster level for a nonspell effect).\n\nMagical areas, multiple types of magic, or strong local magical emanations may distort or conceal weaker auras.\n\nAura Strength: An aura's power depends on a spell's functioning spell level or an item's caster level. If an aura falls into more than one category, detect magic indicates the stronger of the two.\n\nLingering Aura: A magical aura lingers after its original source dissipates (in the case of a spell) or is destroyed (in the case of a magic item). If detect magic is cast and directed at such a location, the spell indicates an aura strength of dim (even weaker than a faint aura). How long the aura lingers at this dim level depends on its original power\n\nOutsiders and elementals are not magical in themselves, but if they are summoned, the conjuration spell registers.\n\nEach round, you can turn to detect magic in a new area. The spell can penetrate barriers, but 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt blocks it.\n\nDetect magic can be made permanent with a permanency spell.",
  },
  //Mage Hand
  {
    id: "srd5",
    name: "Mage Hand",
    type: "Transmutation",
    level: "Brd 0, Sor/Wiz 0",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels",
    target: "One nonmagical, unattended object weighing up to 5 lb.",
    duration: "Concentration",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "You point your finger at an object and can lift it and move it at will from a distance.\n\nAs a move action, you can propel the object as far as 15 feet in any direction, though the spell ends if the distance between you and the object ever exceeds the spell's range.",
  },
  //Message
  {
    id: "srd6",
    name: "Message",
    type: "Transmutation [Language-Dependent]",
    level: "Brd 0, Sor/Wiz 0",
    components: "V, S, AF",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level",
    target: "One creature/level",
    duration: "10 min./level",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "You can whisper messages and receive whispered replies with little chance of being overheard. You point your finger at each creature you want to receive the message. When you whisper, the whispered message is audible to all targeted creatures within range. Magical silence, 1 foot of stone, 1 inch of common metal (or a thin sheet of lead), or 3 feet of wood or dirt blocks the spell. The message does not have to travel in a straight line. It can circumvent a barrier if there is an open path between you and the subject, and the path's entire length lies within the spell's range. The creatures that receive the message can whisper a reply that you hear. The spell transmits sound, not meaning. It doesn't transcend language barriers.\n\nNote: To speak a message, you must mouth the words and whisper, possibly allowing observers the opportunity to read your lips.\n\nFocus: A short piece of copper wire.",
  },
  //Light
  {
    id: "srd7",
    name: "Light",
    type: "Evocation [Light]",
    level: "Brd 0, Clr 0, Drd 0, Sor/Wiz 0",
    components: "V, M/DF",
    castingTime: "1 standard action",
    range: "Touch",
    target: "Object touched",
    duration: "10 min./level (D)",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "This spell causes an object to glow like a torch, shedding bright light in a 20-foot radius (and dim light for an additional 20 feet) from the point you touch. The effect is immobile, but it can be cast on a movable object. Light taken into an area of magical darkness does not function.\n\nA light spell (one with the light descriptor) counters and dispels a darkness spell (one with the darkness descriptor) of an equal or lower level.\n\nArcane Material Component\nA firefly or a piece of phosphorescent moss.",
  },
  //Read Magic
  {
    id: "srd8",
    name: "Read Magic",
    type: "Divination",
    level: "Brd 0, Clr 0, Drd 0, Pal 1, Rgr 1, Sor/Wiz 0",
    components: "V, S, AF",
    castingTime: "1 standard action",
    range: "Personal",
    target: "You",
    duration: "10 min./level",
    description:
      "By means of read magic, you can decipher magical inscriptions on objects—books, scrolls, weapons, and the like—that would otherwise be unintelligible.\n\nThis deciphering does not normally invoke the magic contained in the writing, although it may do so in the case of a cursed scroll.\n\nFurthermore, once the spell is cast and you have read the magical inscription, you are thereafter able to read that particular writing without recourse to the use of read magic.\n\nYou can read at the rate of one page (250 words) per minute.\n\nThe spell allows you to identify a glyph of warding with a DC 13 Spellcraft check, a greater glyph of warding with a DC 16 Spellcraft check, or any symbol spell with a Spellcraft check (DC 10 + spell level).\n\nRead magic can be made permanent with a permanency spell.\n\nFocus: A clear crystal or mineral prism.",
  },
  //Acid Splash
  {
    id: "srd9",
    name: "Acid Splash",
    type: "Conjuration (Creation) [Acid]",
    level: "Sor/Wiz 0",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels",
    effect: "One missile of acid",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "You fire a small orb of acid at the target.\n\nYou must succeed on a ranged touch attack to hit your target. The orb deals 1d3 points of acid damage.",
  },
  //Lullaby
  {
    id: "srd10",
    name: "Lullaby",
    type: "Enchantement (Compulsion) [Mind-Affecting]",
    level: "Brd 0",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Medium(100 ft. + 10 ft./level)",
    area: "Living creatures within a 10-ft.-radius burst",
    duration: "Concentration + 1 round/level (D)",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    description:
      "Any creature within the area that fails a Will save becomes drowsy and inattentive, taking a -5 penalty on Listen and Spot checks and a -2 penalty on Will saves against sleep effects while the lullaby is in effect.\nLullaby lasts for as long as the caster concentrates, plus up to 1 round per caster level thereafter.",
  },
  //Know direction
  {
    id: "srd11",
    name: "Know Direction",
    type: "Divination",
    level: "Brd 0, Drd 0",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Personal",
    target: "You",
    duration: "Instantaneous",
    description:
      "You instantly know the direction of north from your current position.\nThe spell is effective in any environment in which 'north' exists, but it may not work in extraplanar settings.\nYour knowledge of north is correct at the moment of casting, but you can get lost again within moments if you don't find some external reference point to help you keep track of direction.",
  },
  //Open/Close
  {
    id: "srd12",
    name: "Open/Close",
    type: "Transmutation",
    level: "Brd 0, Sor/Wiz 0",
    components: "V, S, AF",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels",
    target:
      "Object weighing up to 30 lb. or portal that can be opened or closed",
    duration: "Instantaneous",
    savingThrow: "Will negates (object)",
    spellResistance: "Yes (object)",
    description:
      "You can open or close (your choice) a door, chest, box, window, bag, pouch, bottle, barrel, or other container.\nIf anything resists this activity (such as a bar on a door or a lock on a chest), the spell fails.\nIn addition, the spell can only open and close things weighing 30 pounds or less.\nThus, doors, chests, and similar objects sized for enormous creatures may be beyond this spell's ability to affect.\nFocus: A brass key.",
  },
  //Prestidigitation
  {
    id: "srd13",
    name: "Prestidigitation",
    type: "Universal",
    level: "Brd 0, Sor/Wiz 0",
    components: "V, S",
    castingTime: "1 standard action",
    range: "10 ft.",
    target: "See text",
    duration: "1 hour",
    savingThrow: "See text",
    spellResistance: "No",
    description:
      "Prestidigitations are minor tricks that novice spellcasters use for practice.\nOnce cast, a prestidigitation spell enables you to perform simple magical effects for 1 hour.\nThe effects are minor and have severe limitations.\nA prestidigitation can slowly lift 1 pound of material.\nIt can color, clean, or soil items in a 1-foot cube each round.\nIt can chill, warm, or flavor 1 pound of nonliving material.\nIt cannot deal damage or affect the concentration of spellcasters.\nPrestidigitation can create small objects, but they look crude and artificial.\nThe materials created by a prestidigitation spell are extremely fragile, and they cannot be used as tools, weapons, or spell components.\nFinally, a prestidigitation lacks the power to duplicate any other spell effects.\nAny actual change to an object (beyond just moving, cleaning, or soiling it) persists only 1 hour.\nCharacters typically use prestidigitation spells to impress common folk, amuse children, and brighten dreary lives.\nCommon tricks with prestidigitations include producing tinklings of ethereal music, brightening faded flowers, creating glowing balls that float over your hand, generating puffs of wind to flicker candles, spicing up aromas and flavors of bland food, and making little whirlwinds to sweep dust under rugs.",
  },
  //Chill touch
  {
    id: "srd14",
    name: "Chill Touch",
    type: "Necromancy",
    level: "Sor/Wiz 1",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Touch",
    target: "Creature or creatures touched (up to one/level)",
    duration: "Instantaneous",
    savingThrow: "Fortitude partial or Will negates; see text",
    spellResistance: "Yes",
    description:
      "A touch from your hand, which glows with blue energy, disrupts the life force of living creatures. Each touch channels negative energy that deals 1d6 points of damage. The touched creature also takes 1 point of Strength damage unless it makes a successful Fortitude saving throw. You can use this melee touch attack up to one time per level.\n\nAn undead creature you touch takes no damage of either sort, but it must make a successful Will saving throw or flee as if panicked for 1d4 rounds +1 round per caster level.",
  },
];
export default spellCompendium;
