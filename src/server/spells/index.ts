const spellCompendium: ISpell[] = [
  //Acid Arrow
  {
    id: "srd15",
    name: "Acid Arrow",
    school: "Conjuration",
    subSchool: "Creation",
    descriptor: "Acid",
    level: "Sor/Wiz 2",
    components: "V, S, M, F",
    castingTime: "1 standard action",
    range: "Long (400 ft. + 40ft./level)",
    effect: "One arrow of acid",
    duration: "1 round + 1 round per three levels",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "A magical arrow of acid springs from your hand and speeds to its target. You must succeed on a ranged touch attack to hit your target. The arrow deals 2d4 points of acid damage with no splash damage. For every three caster levels (to a maximum of 18th), the acid, unless somehow neutralized, lasts for another round, dealing another 2d4 points of damage in that round.\n\nMaterial Component\nPowdered rhubarb leaf and an adder’s stomach.\n\nFocus\nA dart.",
  },
  //Acid Fog
  {
    id: "srd16",
    name: "Acid Fog",
    school: "Conjuration",
    subSchool: "Creation",
    descriptor: "Acid",
    level: "Sor/Wiz 6, Water 7",
    components: "V, S, M/DF",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    effect: "Fog spreads in 20-ft. radius, 20 ft. high",
    duration: "1 round/level",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "Acid fog creates a billowing mass of misty vapors similar to that produced by a solid fog spell. In addition to slowing creatures down and obscuring sight, this spell’s vapors are highly acidic. Each round on your turn, starting when you cast the spell, the fog deals 2d6 points of acid damage to each creature and object within it.\n\nArcane Material Component\nA pinch of dried, powdered peas combined with powdered animal hoof.",
  },
  //Acid Splash
  {
    id: "srd9",
    name: "Acid Splash",
    school: "Conjuration",
    subSchool: "Creation",
    descriptor: "Acid",
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
  //Aid
  {
    id: "srd17",
    name: "Aid",
    school: "Enchantment",
    subSchool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: "Clr 2, Good 2, Luck 2",
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Touch",
    target: "Living creature touched",
    duration: "1 min./level",
    savingThrow: "None",
    spellResistance: "Yes (harmless)",
    description:
      "Aid grants the target a +1 morale bonus on attack rolls and saves against fear effects, plus temporary hit points equal to 1d8 + caster level (to a maximum of 1d8+10 temporary hit points at caster level 10th).",
  },
  //Air Walk
  {
    id: "srd18",
    name: "Air Walk",
    school: "Transmutation",
    descriptor: "Air",
    level: "Air 4, Clr 4, Drd 4",
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Touch",
    target: "Creature (Gargantuan or smaller) touched",
    duration: "10 min./level",
    savingThrow: "None",
    spellResistance: "Yes (harmless)",
    description:
      "The subject can tread on air as if walking on solid ground. Moving upward is similar to walking up a hill. The maximum upward or downward angle possible is 45 degrees, at a rate equal to one-half the air walker’s normal speed.\n\nA strong wind (21+ mph) can push the subject along or hold it back. At the end of its turn each round, the wind blows the air walker 5 feet for each 5 miles per hour of wind speed. The creature may be subject to additional penalties in exceptionally strong or turbulent winds, such as loss of control over movement or physical damage from being buffeted about.\n\nShould the spell duration expire while the subject is still aloft, the magic fails slowly. The subject floats downward 60 feet per round for 1d6 rounds. If it reaches the ground in that amount of time, it lands safely. If not, it falls the rest of the distance, taking 1d6 points of damage per 10 feet of fall. Since dispelling a spell effectively ends it, the subject also descends in this way if the air walk spell is dispelled, but not if it is negated by an antimagic field.\n\nYou can cast air walk on a specially trained mount so it can be ridden through the air. You can train a mount to move with the aid of air walk (counts as a trick; see Handle Animal skill) with one week of work and a DC 25 Handle Animal check.",
  },
  //Alarm
  {
    id: "srd19",
    name: "Alarm",
    school: "Abjuration",
    level: "Brd 1, Rgr 1, Sor/Wiz 1",
    components: "V, S, F/DF",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    area: "20-ft.-radius emanation centered on a point in space",
    duration: "2 hours/level (D)",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "Alarm sounds a mental or audible alarm each time a creature of Tiny or larger size enters the warded area or touches it. A creature that speaks the password (determined by you at the time of casting) does not set off the alarm. You decide at the time of casting whether the alarm will be mental or audible.\n\nMental Alarm\nA mental alarm alerts you (and only you) so long as you remain within 1 mile of the warded area. You note a single mental “ping” that awakens you from normal sleep but does not otherwise disturb concentration. A silence spell has no effect on a mental alarm.\n\nAudible Alarm\nAn audible alarm produces the sound of a hand bell, and anyone within 60 feet of the warded area can hear it clearly. Reduce the distance by 10 feet for each interposing closed door and by 20 feet for each substantial interposing wall.\n\nIn quiet conditions, the ringing can be heard faintly as far as 180 feet away. The sound lasts for 1 round. Creatures within a silence spell cannot hear the ringing.\n\nEthereal or astral creatures do not trigger the alarm.\n\nAlarm can be made permanent with a permanency spell.\n\nArcane Focus\nA tiny bell and a piece of very fine silver wire",
  },
  //Align Weapon
  {
    id: "srd20",
    name: "Align Weapon",
    school: "Transmutation",
    descriptor: "see text",
    level: "Clr 2",
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Touch",
    target:
      "Weapon touched or fifty projectiles (all of which must be in contact with each other at the time of casting)",
    duration: "1 min./level",
    savingThrow: "Will negates (harmless, object)",
    spellResistance: "Yes (harmless, object)",
    description:
      "Align weapon makes a weapon good, evil, lawful, or chaotic, as you choose. A weapon that is aligned can bypass the damage reduction of certain creatures. This spell has no effect on a weapon that already has an alignment.\n\nYou can’t cast this spell on a natural weapon, such as an unarmed strike.\n\nWhen you make a weapon good, evil, lawful, or chaotic, align weapon is a good, evil, lawful, or chaotic spell, respectively.",
  },
  //Alter Self
  {
    id: "srd21",
    name: "Alter Self",
    school: "Transmutation",
    level: "Brd 2, Sor/Wiz 2",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Personal",
    target: "You",
    duration: "10 min./level (D)",
    description:
      "You assume the form of a creature of the same type as your normal form. The new form must be within one size category of your normal size. The maximum HD of an assumed form is equal to your caster level, to a maximum of 5 HD at 5th level. You can change into a member of your own kind or even into yourself.\n\nYou retain your own ability scores. Your class and level, hit points, alignment, base attack bonus, and base save bonuses all remain the same. You retain all supernatural and spell-like special attacks and qualities of your normal form, except for those requiring a body part that the new form does not have (such as a mouth for a breath weapon or eyes for a gaze attack).\n\nYou keep all extraordinary special attacks and qualities derived from class levels, but you lose any from your normal form that are not derived from class levels.\n\nIf the new form is capable of speech, you can communicate normally. You retain any spellcasting ability you had in your original form, but the new form must be able to speak intelligibly (that is, speak a language) to use verbal components and must have limbs capable of fine manipulation to use somatic or material components.\n\nYou acquire the physical qualities of the new form while retaining your own mind. Physical qualities include natural size, mundane movement capabilities (such as burrowing, climbing, walking, swimming, and flight with wings, to a maximum speed of 120 feet for flying or 60 feet for nonflying movement), natural armor bonus, natural weapons (such as claws, bite, and so on), racial skill bonuses, racial bonus feats, and any gross physical qualities (presence or absence of wings, number of extremities, and so forth). A body with extra limbs does not allow you to make more attacks (or more advantageous two-weapon attacks) than normal.\n\nYou do not gain any extraordinary special attacks or special qualities not noted above under physical qualities, such as darkvision, low-light vision, blindsense, blindsight, fast healing, regeneration, scent, and so forth.\n\nYou do not gain any supernatural special attacks, special qualities, or spell-like abilities of the new form. Your creature type and subtype (if any) remain the same regardless of your new form. You cannot take the form of any creature with a template, even if that template doesn’t change the creature type or subtype.\n\nYou can freely designate the new form’s minor physical qualities (such as hair color, hair texture, and skin color) within the normal ranges for a creature of that kind. The new form’s significant physical qualities (such as height, weight, and gender) are also under your control, but they must fall within the norms for the new form’s kind. You are effectively disguised as an average member of the new form’s race. If you use this spell to create a disguise, you get a +10 bonus on your Disguise check.\n\nWhen the change occurs, your equipment, if any, either remains worn or held by the new form (if it is capable of wearing or holding the item), or melds into the new form and becomes nonfunctional. When you revert to your true form, any objects previously melded into the new form reappear in the same location on your body they previously occupied and are once again functional. Any new items you wore in the assumed form and can’t wear in your normal form fall off and land at your feet; any that you could wear in either form or carry in a body part common to both forms at the time of reversion are still held in the same way. Any part of the body or piece of equipment that is separated from the whole reverts to its true form.",
  },
  //Analyze Dweomer
  {
    id: "srd22",
    name: "Analyze Dweomer",
    school: "Divination",
    level: "Brd 6, Sor/Wiz 6",
    components: "V, S, F",
    castingTime: "1 standar action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    target: "One object or creature per caster level",
    duration: "1 round/level (D)",
    savingThrow: "None or Will negates; see text",
    spellResistance: "No",
    description:
      "You discern all spells and magical properties present in a number of creatures or objects. Each round, you may examine a single creature or object that you can see as a free action. In the case of a magic item, you learn its functions, how to activate its functions (if appropriate), and how many charges are left (if it uses charges). In the case of an object or creature with active spells cast upon it, you learn each spell, its effect, and its caster level.\n\nAn attended object may attempt a Will save to resist this effect if its holder so desires. If the save succeeds, you learn nothing about the object except what you can discern by looking at it. An object that makes its save cannot be affected by any other analyze dweomer spells for 24 hours.\n\nAnalyze dweomer does not function when used on an artifact.\n\nFocus\nA tiny lens of ruby or sapphire set in a small golden loop. The gemstone must be worth at least 1,500 gp.",
  },
  //Animal Growth
  {
    id: "srd23",
    name: "Animal Growth",
    school: "Transmutation",
    level: "Drd 5, Rgr 4, Sor/Wiz 5",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    target:
      "Up to one animal (Gargantuan or smaller) per two levels, no two of which can be more than 30 ft. apart",
    duration: "1 min./level",
    savingThrow: "Fortitude negates",
    spellResistance: "Yes",
    description:
      "A number of animals grow to twice their normal size and eight times their normal weight. This alteration changes each animal’s size category to the next largest, grants it a +8 size bonus to Strength and a +4 size bonus to Constitution (and thus an extra 2 hit points per HD), and imposes a -2 size penalty to Dexterity. The creature’s existing natural armor bonus increases by 2. The size change also affects the animal’s modifier to AC and attack rolls and its base damage. The animal’s space and reach change as appropriate to the new size, but its speed does not change.\n\nThe spell also grants each subject damage reduction 10/magic and a +4 resistance bonus on saving throws. If insufficient room is available for the desired growth, the creature attains the maximum possible size and may make a Strength check (using its increased Strength) to burst any enclosures in the process. If it fails, it is constrained without harm by the materials enclosing it— the spell cannot be used to crush a creature by increasing its size.\n\nAll equipment worn or carried by an animal is similarly enlarged by the spell, though this change has no effect on the magical properties of any such equipment.\n\nAny enlarged item that leaves the enlarged creature’s possession instantly returns to its normal size.\n\nThe spell gives no means of command or influence over the enlarged animals.\n\nMultiple magical effects that increase size do not stack.",
  },
  //Animal Messenger
  {
    id: "srd24",
    name: "Animal Messenger",
    school: "Enchantment",
    subSchool: "Compulsion",
    descriptor: "Mind-Affecting",

    level: "Brd 2, Drd 2, Rgr 1",
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    target: "One Tiny animal",
    duration: "One day/level",
    savingThrow: "None; see text",
    spellResistance: "Yes",
    description:
      "You compel a Tiny animal to go to a spot you designate. The most common use for this spell is to get an animal to carry a message to your allies. The animal cannot be one tamed or trained by someone else, including such creatures as familiars and animal companions.\n\nUsing some type of food desirable to the animal as a lure, you call the animal to you. It advances and awaits your bidding. You can mentally impress on the animal a certain place well known to you or an obvious landmark. The directions must be simple, because the animal depends on your knowledge and can’t find a destination on its own. You can attach some small item or note to the messenger. The animal then goes to the designated location and waits there until the duration of the spell expires, whereupon it resumes its normal activities.\n\nDuring this period of waiting, the messenger allows others to approach it and remove any scroll or token it carries. The intended recipient gains no special ability to communicate with the animal or read any attached message (if it’s written in a language he or she doesn’t know, for example).\n\nMaterial Component\nA morsel of food the animal likes.",
  },
  //Animal Shapes
  {
    id: "srd25",
    name: "Animal Shapes",
    school: "Transmutation",
    level: "Animal 7, Drd 8",
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    target:
      "Up to one willing creature per level, all within 30 ft. of each other",
    duration: "1 hour/level (D)",
    savingThrow: "None; see text",
    spellResistance: "Yes (harmless)",
    description:
      "You transform up to one willing creature per caster level into an animal of your choice; the spell has no effect on unwilling creatures. Use the alternate form special ability to determine each target’s new abilities. All creatures must take the same kind of animal form. Recipients remain in the animal form until the spell expires or until you dismiss it for all recipients. In addition, an individual subject may choose to resume its normal form as a full-round action; doing so ends the spell for that subject alone. The maximum HD of an assumed form is equal to the subject’s HD or your caster level, whichever is lower, to a maximum of 20 HD at 20th level.",
  },
  //Animal Trance
  {
    id: "srd26",
    name: "Animal Trance",
    school: "Enchantment",
    subSchool: "Compulsion",
    descriptor: "Mind-Affecting, Sonic",

    level: "Brd 2, Drd 2",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    target: "Animals or magical beasts with Intelligence 1 or 2",
    duration: "Concentration",
    savingThrow: "Will negates; see text",
    spellResistance: "Yes",
    description:
      "Your swaying motions and music (or singing, or chanting) compel animals and magical beasts to do nothing but watch you. Only a creature with an Intelligence score of 1 or 2 can be fascinated by this spell. Roll 2d6 to determine the total number of HD worth of creatures that you fascinate. The closest targets are selected first until no more targets within range can be affected.\n\nA magical beast, a dire animal, or an animal trained to attack or guard is allowed a saving throw; an animal not trained to attack or guard is not.",
  },
  //Animate Dead
  {
    id: "srd27",
    name: "Animate Dead",
    school: "Necromancy",
    descriptor: "Evil",
    level: "Clr 3, Death 3, Sor/Wiz 4",
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Touch",
    target: "One or more corpses touched",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "This spell turns the bones or bodies of dead creatures into undead skeletons or zombies that follow your spoken commands.\n\nThe undead can follow you, or they can remain in an area and attack any creature (or just a specific kind of creature) entering the place. They remain animated until they are destroyed. (A destroyed skeleton or zombie can’t be animated again.)\n\nRegardless of the type of undead you create with this spell, you can’t create more HD of undead than twice your caster level with a single casting of animate dead. (The desecrate spell doubles this limit)\n\nThe undead you create remain under your control indefinitely. No matter how many times you use this spell, however, you can control only 4 HD worth of undead creatures per caster level. If you exceed this number, all the newly created creatures fall under your control, and any excess undead from previous castings become uncontrolled. (You choose which creatures are released.) If you are a cleric, any undead you might command by virtue of your power to command or rebuke undead do not count toward the limit.\n\nSkeletons\nA skeleton can be created only from a mostly intact corpse or skeleton. The corpse must have bones. If a skeleton is made from a corpse, the flesh falls off the bones.\n\nZombies\nA zombie can be created only from a mostly intact corpse. The corpse must be that of a creature with a true anatomy.\n\nMaterial Component\nYou must place a black onyx gem worth at least 25 gp per Hit Die of the undead into the mouth or eye socket of each corpse you intend to animate. The magic of the spell turns these gems into worthless, burned-out shells.",
  },
  //Animate Objects
  {
    id: "srd28",
    name: "Animate Objects",
    school: "Transmutation",
    level: "Brd 6, Chaos 6, Clr 6",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    target: "One Small object per caster level; see text",
    duration: "1 round/level",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "You imbue inanimate objects with mobility and a semblance of life. Each such animated object then immediately attacks whomever or whatever you initially designate.\n\nAn animated object can be of any nonmagical material. You may animate one Small or smaller object or an equivalent number of larger objects per caster level. A Medium object counts as two Small or smaller objects, a Large object as four, a Huge object as eight, a Gargantuan object as sixteen, and a Colossal object as thirty-two. You can change the designated target or targets as a move action, as if directing an active spell.\n\nThis spell cannot animate objects carried or worn by a creature.\n\nAnimate objects can be made permanent with a permanency spell.",
  },
  //Animate Plants
  {
    id: "srd29",
    name: "Animate Plants",
    school: "Transmutation",
    level: "Drd 7, Plant 7",
    components: "V",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    target:
      "One Large plant per three caster levels or all plants within range; see text",
    duration: "1 round/level or 1 hour/level; see text",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "You imbue inanimate plants with mobility and a semblance of life. Each animated plant then immediately attacks whomever or whatever you initially designate as though it were an animated object of the appropriate size category. You may animate one Large or smaller plant, or an equivalent number of larger plants, per three caster levels. A Huge plant counts as two Large or smaller plants, a Gargantuan plant as four, and a Colossal plant as eight. You can change the designated target or targets as a move action, as if directing an active spell.\n\nUse the statistics for animated objects, except that plants smaller than Large usually don’t have hardness.\n\nAnimate plants cannot affect plant creatures, nor does it affect nonliving vegetable material.\n\nEntangle\nAlternatively, you may imbue all plants within range with a degree of mobility, which allows them to entwine around creatures in the area. This usage of the spell duplicates the effect of an entangle spell. Spell resistance does not keep creatures from being entangled. This effect lasts 1 hour per caster level.",
  },
  //Animate Rope
  {
    id: "srd30",
    name: "Animate Rope",
    school: "Transmuation",
    level: "Brd 1, Sor/Wiz 1",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    target: "One ropelike object, length up to 50 ft. + 5 ft./level; see text",
    duration: "1 round/level",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "You can animate a nonliving ropelike object. The maximum length assumes a rope with a 1-inch diameter.\n\nReduce the maximum length by 50% for every additional inch of thickness, and increase it by 50% for each reduction of the rope’s diameter by half.\n\nThe possible commands are “coil” (form a neat, coiled stack), “coil and knot,” “loop,” “loop and knot,” “tie and knot,” and the opposites of all of the above (“uncoil,” and so forth). You can give one command each round as a move action, as if directing an active spell.\n\nThe rope can enwrap only a creature or an object within 1 foot of it—it does not snake outward—so it must be thrown near the intended target. Doing so requires a successful ranged touch attack roll (range increment 10 feet). A typical 1-inch-diameter hempen rope has 2 hit points, AC 10, and requires a DC 23 Strength check to burst it. The rope does not deal damage, but it can be used as a trip line or to cause a single opponent that fails a Reflex saving throw to become entangled. A creature capable of spellcasting that is bound by this spell must make a DC 15 Concentration check to cast a spell. An entangled creature can slip free with a DC 20 Escape Artist check.\n\nThe rope itself and any knots tied in it are not magical.\n\nThis spell grants a +2 bonus on any Use Rope checks you make when using the transmuted rope.\n\nThe spell cannot animate objects carried or worn by a creature.",
  },
  //Antilife Shell
  {
    id: "srd31",
    name: "Antilife Shell",
    school: "Abjuration",
    level: "Animal 6, Clr 6, Drd 6",
    components: "V, S, DF",
    castingTime: "1 round",
    range: "10 ft.",
    area: "10-ft.-radius emanation, centered on you",
    duration: "10 min./level (D)",
    savingThrow: "None",
    spellResistance: "Yes",
    description:
      "You bring into being a mobile, hemispherical energy field that prevents the entrance of most types of living creatures.\n\nThe effect hedges out animals, aberrations, dragons, fey, giants, humanoids, magical beasts, monstrous humanoids, oozes, plants, and vermin, but not constructs, elementals, outsiders, or undead.\n\nThis spell may be used only defensively, not aggressively. Forcing an abjuration barrier against creatures that the spell keeps at bay collapses the barrier.",
  },
  //Antimagic Field
  {
    id: "srd32",
    name: "Antimagic Field",
    school: "Abjuration",
    level: "Clr 8, Magic 6, Protection 6, Sor/Wiz 6",
    components: "V, S, M/DF",
    castingTime: "1 standard action",
    range: "10 ft.",
    area: "10-ft.-radius emanation, centered on you",
    duration: "10 min./level (D)",
    savingThrow: "None",
    spellResistance: "See text",
    description:
      "An invisible barrier surrounds you and moves with you. The space within this barrier is impervious to most magical effects, including spells, spell-like abilities, and supernatural abilities. Likewise, it prevents the functioning of any magic items or spells within its confines.\n\nAn antimagic field suppresses any spell or magical effect used within, brought into, or cast into the area, but does not dispel it. Time spent within an antimagic field counts against the suppressed spell’s duration.\n\nSummoned creatures of any type and incorporeal undead wink out if they enter an antimagic field. They reappear in the same spot once the field goes away. Time spent winked out counts normally against the duration of the conjuration that is maintaining the creature. If you cast antimagic field in an area occupied by a summoned creature that has spell resistance, you must make a caster level check (1d20 + caster level) against the creature’s spell resistance to make it wink out. (The effects of instantaneous conjurations are not affected by an antimagic field because the conjuration itself is no longer in effect, only its result.)\n\nA normal creature can enter the area, as can normal missiles. Furthermore, while a magic sword does not function magically within the area, it is still a sword (and a masterwork sword at that). The spell has no effect on golems and other constructs that are imbued with magic during their creation process and are thereafter self-supporting (unless they have been summoned, in which case they are treated like any other summoned creatures). Elementals, corporeal undead, and outsiders are likewise unaffected unless summoned. These creatures’ spell-like or supernatural abilities, however, may be temporarily nullified by the field. Dispel magic does not remove the field, though Mage's Disjunction might.\n\nTwo or more antimagic fields sharing any of the same space have no effect on each other. Certain spells, such as wall of force, prismatic sphere, and prismatic wall, remain unaffected by antimagic field (see the individual spell descriptions). Artifacts and deities are unaffected by mortal magic such as this.\n\nShould a creature be larger than the area enclosed by the barrier, any part of it that lies outside the barrier is unaffected by the field.\n\nArcane Material Component\nA pinch of powdered iron or iron filings.",
  },
  //Antipathy
  {
    id: "srd33",
    name: "Antipathy",
    school: "Enchantment",
    subSchool: "Compulsion",
    descriptor: "Mind-Affecting",

    level: "Drd 9, Sor/Wiz 8",
    components: "V, S, M/DF",
    castingTime: "1 hour",
    range: "Close (25 ft. + 5 ft./2 levels)",
    target: "One location (up to a 10-ft. cube/level) or one object",
    duration: "2 hours/level (D)",
    savingThrow: "Will partial",
    spellResistance: "Yes",
    description:
      "You cause an object or location to emanate magical vibrations that repel either a specific kind of intelligent creature or creatures of a particular alignment, as defined by you. The kind of creature to be affected must be named specifically. A creature subtype is not specific enough. Likewise, the specific alignment to be repelled must be named.\n\nCreatures of the designated kind or alignment feel an overpowering urge to leave the area or to avoid the affected item.\n\nA compulsion forces them to abandon the area or item, shunning it and never willingly returning to it while the spell is in effect. A creature that makes a successful saving throw can stay in the area or touch the item but feels uncomfortable doing so. This distracting discomfort reduces the creature’s Dexterity score by 4 points.\n\nAntipathy counters and dispels sympathy.\n\nArcane Material Component\nA lump of alum soaked in vinegar.",
  },
  //Antiplant Shell
  {
    id: "srd34",
    name: "Antiplant Shell",
    school: "Abjuration",
    level: "Drd 4",
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "10 ft.",
    area: "10-ft.-radius emanation, centered on you",
    duration: "10 min./level (D)",
    savingThrow: "None",
    spellResistance: "Yes",
    description:
      "The antiplant shell spell creates an invisible, mobile barrier that keeps all creatures within the shell protected from attacks by plant creatures or animated plants. As with many abjuration spells, forcing the barrier against creatures that the spell keeps at bay strains and collapses the field.",
  },
  //Arcane Eye
  {
    id: "srd35",
    name: "Arcane Eye",
    school: "Divination",
    subSchool: "Scrying",
    level: "Sor/Wiz 4",
    components: "V, S, M",
    castingTime: "10 minutes",
    range: "Unlimited",
    effect: "Magical sensor",
    duration: "1 min./level (D)",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "You create an invisible magical sensor that sends you visual information. You can create the arcane eye at any point you can see, but it can then travel outside your line of sight without hindrance. An arcane eye travels at 30 feet per round (300 feet per minute) if viewing an area ahead as a human would (primarily looking at the floor) or 10 feet per round (100 feet per minute) if examining the ceiling and walls as well as the floor ahead. It sees exactly as you would see if you were there.\n\nThe eye can travel in any direction as long as the spell lasts. Solid barriers block its passage, but it can pass through a hole or space as small as 1 inch in diameter. The eye can’t enter another plane of existence, even through a gate or similar magical portal.\n\nYou must concentrate to use an arcane eye. If you do not concentrate, the eye is inert until you again concentrate.\n\nMaterial Component\nA bit of bat fur.",
  },
  //Arcane Lock
  {
    id: "srd36",
    name: "Arcane Lock",
    school: "Abjuration",
    level: "Sor/Wiz 2",
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Touch",
    target:
      "The door, chest, or portal touched, up to 30 sq. ft./level in size",
    duration: "Permanent",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "An arcane lock spell cast upon a door, chest, or portal magically locks it. You can freely pass your own arcane lock without affecting it; otherwise, a door or object secured with this spell can be opened only by breaking in or with a successful dispel magic or knock spell. Add 10 to the normal DC to break open a door or portal affected by this spell. (A knock spell does not remove an arcane lock; it only suppresses the effect for 10 minutes.)\n\nMaterial Component\nGold dust worth 25 gp.",
  },
  //Arcane Mark
  {
    id: "srd2",
    name: "Arcane Mark",
    school: "Universal",
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
  //Arcane Sight
  {
    id: "srd37",
    name: "Arcane Sight",
    school: "Divination",
    level: "Sor/Wiz 3",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Personal",
    target: "You",
    duration: "1 min./level (D)",
    description:
      "This spell makes your eyes glow blue and allows you to see magical auras within 120 feet of you. The effect is similar to that of a detect magic spell, but arcane sight does not require concentration and discerns aura location and power more quickly.\n\nYou know the location and power of all magical auras within your sight. An aura’s power depends on a spell’s functioning level or an item’s caster level, as noted in the description of the detect magic spell. If the items or creatures bearing the auras are in line of sight, you can make Spellcraft skill checks to determine the school of magic involved in each. (Make one check per aura; DC 15 + spell level, or 15 + one-half caster level for a nonspell effect.)\n\nIf you concentrate on a specific creature within 120 feet of you as a standard action, you can determine whether it has any spellcasting or spell-like abilities, whether these are arcane or divine (spell-like abilities register as arcane), and the strength of the most powerful spell or spell-like ability the creature currently has available for use.\n\nArcane sight can be made permanent with a permanency spell.",
  },
  //Arcane Sight, Greater
  {
    id: "srd38",
    name: "Arcane Sight, Greater",
    school: "Divination",
    level: "Sor/Wiz 7",
    description:
      "This spell functions like arcane sight, except that you automatically know which spells or magical effects are active upon any individual or object you see.\n\nGreater arcane sight doesn’t let you identify magic items.\n\nUnlike arcane sight, this spell cannot be made permanent with a permanency spell.",
  },
  //Astral Projection
  {
    id: "srd39",
    name: "Astral Projection",
    school: "Necromancy",
    level: "Clr 9, Sor/Wiz 9, Travel 9",
    components: "V, S, M",
    castingTime: "30 minutes",
    range: "Touch",
    target:
      "You plus one additional willing creature touched per two caster levels",
    duration: "See text",
    savingThrow: "None",
    spellResistance: "Yes",
    description:
      "By freeing your spirit from your physical body, this spell allows you to project an astral body onto another plane altogether.\n\nYou can bring the astral forms of other willing creatures with you, provided that these subjects are linked in a circle with you at the time of the casting. These fellow travelers are dependent upon you and must accompany you at all times. If something happens to you during the journey, your companions are stranded wherever you left them.\n\nYou project your astral self onto the Astral Plane, leaving your physical body behind on the Material Plane in a state of suspended animation. The spell projects an astral copy of you and all you wear or carry onto the Astral Plane. Since the Astral Plane touches upon other planes, you can travel astrally to any of these other planes as you will. To enter one, you leave the Astral Plane, forming a new physical body (and equipment) on the plane of existence you have chosen to enter.\n\nWhile you are on the Astral Plane, your astral body is connected at all times to your physical body by a silvery cord. If the cord is broken, you are killed, astrally and physically. Luckily, very few things can destroy a silver cord. When a second body is formed on a different plane, the incorporeal silvery cord remains invisibly attached to the new body. If the second body or the astral form is slain, the cord simply returns to your body where it rests on the Material Plane, thereby reviving it from its state of suspended animation. Although astral projections are able to function on the Astral Plane, their actions affect only creatures existing on the Astral Plane; a physical body must be materialized on other planes.\n\nYou and your companions may travel through the Astral Plane indefinitely. Your bodies simply wait behind in a state of suspended animation until you choose to return your spirits to them. The spell lasts until you desire to end it, or until it is terminated by some outside means, such as dispel magic cast upon either the physical body or the astral form, the breaking of the silver cord, or the destruction of your body back on the Material Plane (which kills you).\n\nMaterial Component\nA jacinth worth at least 1,000 gp, plus a silver bar worth 5 gp for each person to be affected.",
  },
  //Atonement
  {
    id: "srd40",
    name: "Atonement",
    school: "Abjuration",
    level: "Crl 5, Drd 5",
    components: "V, S, M, F, DF, XP",
    castingTime: "1 hour",
    range: "Touch",
    target: "Living creature touched",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "Yes",
    description:
      "This spell removes the burden of evil acts or misdeeds from the subject. The creature seeking atonement must be truly repentant and desirous of setting right its misdeeds. If the atoning creature committed the evil act unwittingly or under some form of compulsion, atonement operates normally at no cost to you. However, in the case of a creature atoning for deliberate misdeeds and acts of a knowing and willful nature, you must intercede with your deity (requiring you to expend 500 XP) in order to expunge the subject’s burden. Many casters first assign a subject of this sort a quest (see geas/quest) or similar penance to determine whether the creature is truly contrite before casting the atonement spell on its behalf.\n\nAtonement may be cast for one of several purposes, depending on the version selected.\n\nReverse Magical Alignment Change\nIf a creature has had its alignment magically changed, atonement returns its alignment to its original status at no cost in experience points.\n\nRestore Class\nA paladin who has lost her class features due to committing an evil act may have her paladinhood restored to her by this spell.\n\nRestore Cleric or Druid Spell Powers\nA cleric or druid who has lost the ability to cast spells by incurring the anger of his or her deity may regain that ability by seeking atonement from another cleric of the same deity or another druid. If the transgression was intentional, the casting cleric loses 500 XP for his intercession. If the transgression was unintentional, he does not lose XP.\n\nRedemption or Temptation\nYou may cast this spell upon a creature of an opposing alignment in order to offer it a chance to change its alignment to match yours. The prospective subject must be present for the entire casting process. Upon completion of the spell, the subject freely chooses whether it retains its original alignment or acquiesces to your offer and changes to your alignment. No duress, compulsion, or magical influence can force the subject to take advantage of the opportunity offered if it is unwilling to abandon its old alignment. This use of the spell does not work on outsiders or any creature incapable of changing its alignment naturally.\n\nThough the spell description refers to evil acts, atonement can also be used on any creature that has performed acts against its alignment, whether those acts are evil, good, chaotic, or lawful.\n\nNote: Normally, changing alignment is up to the player. This use of atonement simply offers a believable way for a character to change his or her alignment drastically, suddenly, and definitively.\n\nMaterial Component\nBurning incense.\n\nFocus\nIn addition to your holy symbol or normal divine focus, you need a set of prayer beads (or other prayer device, such as a prayer wheel or prayer book) worth at least 500 gp.\n\nXP Cost\nWhen cast for the benefit of a creature whose guilt was the result of deliberate acts, the cost to you is 500 XP per casting (see above).",
  },
  //Augury
  {
    id: "srd41",
    name: "Augury",
    school: "Divination",
    level: "Clr 2",
    components: "V, S, M, F",
    castingTime: "1 minute",
    range: "Personal",
    target: "You",
    duration: "Instantaneous",
    description:
      "An augury can tell you whether a particular action will bring good or bad results for you in the immediate future.\n\nThe base chance for receiving a meaningful reply is 70% + 1% per caster level, to a maximum of 90%; this roll is made secretly. A question may be so straightforward that a successful result is automatic, or so vague as to have no chance of success. If the augury succeeds, you get one of four results:\n\n\u2022Weal (if the action will probably bring good results).\n\u2022Woe (for bad results).\n\u2022Weal and woe (for both).\n\u2022Nothing (for actions that don’t have especially good or bad results).\nIf the spell fails, you get the “nothing” result. A cleric who gets the “nothing” result has no way to tell whether it was the consequence of a failed or successful augury.\n\nThe augury can see into the future only about half an hour, so anything that might happen after that does not affect the result. Thus, the result might not take into account the long-term consequences of a contemplated action. All auguries cast by the same person about the same topic use the same dice result as the first casting.\n\nMaterial Component\nIncense worth at least 25 gp.\n\nFocus\nA set of marked sticks, bones, or similar tokens of at least 25 gp value.",
  },
  //Awaken
  {
    id: "srd42",
    name: "Awaken",
    school: "Transmutation",
    level: "Drd 5",
    components: "V, S, DF, XP",
    castingTime: "24 hours",
    range: "Touch",
    target: "Animal or tree touched",
    duration: "Instantaneous",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    description:
      "You awaken a tree or animal to humanlike sentience. To succeed, you must make a Will save (DC 10 + the animal’s current HD, or the HD the tree will have once awakened).\n\nThe awakened animal or tree is friendly toward you. You have no special empathy or connection with a creature you awaken, although it serves you in specific tasks or endeavors if you communicate your desires to it.\n\nAn awakened tree has characteristics as if it were an animated object, except that it gains the plant type and its Intelligence, Wisdom, and Charisma scores are each 3d6. An awakened plant gains the ability to move its limbs, roots, vines, creepers, and so forth, and it has senses similar to a human’s.\n\nAn awakened animal gets 3d6 Intelligence, +1d3 Charisma, and +2 HD. Its type becomes magical beast (augmented animal). An awakened animal can’t serve as an animal companion, familiar, or special mount.\n\nAn awakened tree or animal can speak one language that you know, plus one additional language that you know per point of Intelligence bonus (if any).\n\nXP Cost\n250 XP.",
  },
  //Baleful Polymorph
  {
    id: "srd43",
    name: "Baleful Polymorph",
    school: "Transmutation",
    level: "Drd 5, Sor/Wiz 5",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    target: "One creature",
    duration: "Permanent",
    savingThrow: "Fortitude negates, Will partial; see text",
    spellResistance: "Yes",
    description:
      "You change the subject into a Small or smaller animal of no more than 1 HD (such as a dog, lizard, monkey, or toad). The subject takes on all the statistics and special abilities of an average member of the new form in place of its own except as follows:\n\n\u2022The target retains its own alignment (and personality, within the limits of the new form’s ability scores).\n\u2022The target retains its own hit points.\n\u2022The target is treated as having its normal Hit Dice for purpose of adjudicating effects based on HD, such as the sleep spell, though it uses the new form’s base attack bonus, base save bonuses, and all other statistics derived from Hit Dice.\n\u2022The target also retains the ability to understand (but not to speak) the languages it understood in its original form. It can write in the languages it understands, but only the form is capable of writing in some manner (such as drawing in the dirt with a paw).\nWith those exceptions, the target’s normal game statistics are replaced by those of the new form. The target loses all the special abilities it has in its normal form, including its class features.\n\nAll items worn or carried by the subject fall to the ground at its feet, even if they could be worn or carried by the new form.\n\nIf the new form would prove fatal to the creature (for example, if you polymorphed a landbound target into a fish, or an airborne target into a toad), the subject gets a +4 bonus on the save.\n\nIf the subject remains in the new form for 24 consecutive hours, it must attempt a Will save. If this save fails, it loses its ability to understand language, as well as all other memories of its previous form, and its Hit Dice and hit points change to match an average creature of its new form. These abilities and statistics return to normal if the effect is later ended.\n\nIncorporeal or gaseous creatures are immune to baleful polymorph, and a creature with the shapechanger subtype (such as a lycanthrope or a doppelganger) can revert to its natural form as a standard action (which ends the spell’s effect).",
  },
  //Bane
  {
    id: "srd44",
    name: "Bane",
    school: "Enchantment",
    subSchool: "Compulsion",
    descriptor: "Fear, Mind-Affecting",

    level: "Clr 1",
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "50 ft.",
    area: "All enemies within 50 ft.",
    duration: "1 min./level",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    description:
      "Bane fills your enemies with fear and doubt. Each affected creature takes a -1 penalty on attack rolls and a -1 penalty on saving throws against fear effects.\n\nBane counters and dispels bless.",
  },
  //Banishment
  {
    id: "srd45",
    name: "Banishment",
    school: "Abjuration",
    level: "Clr 6, Sor/Wiz 7",
    components: "V, S, F",
    castingTime: "1 standard action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    target:
      "One or more extraplanar creatures, no two of which can be more than 30 ft. apart",
    duration: "Instantaneous",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    description:
      "A banishment spell is a more powerful version of the dismissal spell. It enables you to force extraplanar creatures out of your home plane. As many as 2 Hit Dice of creatures per caster level can be banished.\n\nYou can improve the spell’s chance of success by presenting at least one object or substance that the target hates, fears, or otherwise opposes. For each such object or substance, you gain a +1 bonus on your caster level check to overcome the target’s spell resistance (if any), the saving throw DC increases by 2.\n\nCertain rare items might work twice as well as a normal item for the purpose of the bonuses (each providing a +2 bonus on the caster level check against spell resistance and increasing the save DC by 4).\n\nArcane Focus\nAny item that is distasteful to the subject (optional, see above).",
  },
  //Barkskin
  {
    id: "srd46",
    name: "Barkskin",
    school: "Transmutation",
    level: "Drd 2, Rgr 2, Plant 2",
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Touch",
    target: "Living creature touched",
    duration: "10 min./level",
    savingThrow: "None",
    spellResistance: "Yes (harmless)",
    description:
      "Barkskin toughens a creature’s skin. The effect grants a +2 enhancement bonus to the creature’s existing natural armor bonus. This enhancement bonus increases by 1 for every three caster levels above 3rd, to a maximum of +5 at caster level 12th.\n\nThe enhancement bonus provided by barkskin stacks with the target’s natural armor bonus, but not with other enhancement bonuses to natural armor. A creature without natural armor has an effective natural armor bonus of +0.",
  },
  //Bear's Endurance
  {
    id: "srd47",
    name: "Bear's Endurance",
    school: "Transmuation",
    level: "Clr 2, Drd 2, Rgr 2, Sor/Wiz 2",
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Touch",
    target: "Creature touched",
    duration: "1 min./level",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes",
    description:
      "The affected creature gains greater vitality and stamina. The spell grants the subject a +4 enhancement bonus to Constitution, which adds the usual benefits to hit points, Fortitude saves, Constitution checks, and so forth.\n\nHit points gained by a temporary increase in Constitution score are not temporary hit points. They go away when the subject’s Constitution drops back to normal. They are not lost first as temporary hit points are.",
  },
  //Bear's Endurance, Mass
  {
    id: "srd48",
    name: "Bear's Endurance, Mass",
    school: "Transmutation",
    level: "Clr 6,Drd 6, Sor/Wiz 6",
    range: "Close (25 ft. + 5 ft./2 levels)",
    target: "One creature/level, no two of which can be more than 30 ft. apart",
    description:
      "Mass bear’s endurance works like bear’s endurance, except that it affects multiple creatures.",
  },
  //Bestow Curse
  {
    id: "srd49",
    name: "Bestow Curse",
    school: "Necromancy",
    level: "Clr 3, Sor/Wiz 4",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Touch",
    target: "Creature touched",
    duration: "Permanent",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    description:
      "You place a curse on the subject. Choose one of the following three effects.\n\n\u2022-6 decrease to an ability score (minimum 1).\n\u2022-4 penalty on attack rolls, saves, ability checks, and skill checks.\n\u2022Each turn, the target has a 50% chance to act normally; otherwise, it takes no action.\nYou may also invent your own curse, but it should be no more powerful than those described above.\n\nThe curse bestowed by this spell cannot be dispelled, but it can be removed with a break enchantment, limited wish, miracle, remove curse, or wish spell.\n\nBestow curse counters remove curse.",
  },
  //Binding
  {
    id: "srd50",
    name: "Binding",
    school: "Enchantment",
    subSchool: "Compulsion",
    descriptor: "Mind-Affecting",

    level: "Sor/Wiz 8",
    components: "V, S, M",
    castingTime: "One minute",
    range: "Close (25 ft. + 5 ft./2 levels)",
    target: "One living creature",
    duration: "See text (D)",
    savingThrow: "Will negates; see text",
    spellResistance: "Yes",
    description:
      "A binding spell creates a magical restraint to hold a creature. The target gets an initial saving throw only if its Hit Dice equal at least one-half your caster level.\n\nYou may have as many as six assistants help you with the spell. For each assistant who casts suggestion, your caster level for this casting of binding increases by 1. For each assistant who casts dominate animal, dominate person, or dominate monster, your caster level for this casting of binding increases by a number equal to one-third of that assistant’s level, provided that the spell’s target is appropriate for a binding spell. Since the assistants’ spells are cast simply to improve your caster level for the purpose of the binding spell, saving throws and spell resistance against the assistants’ spells are irrelevant. Your caster level determines whether the target gets an initial Will saving throw and how long the binding lasts. All binding spells are dismissible.\n\nRegardless of the version of binding you cast, you can specify triggering conditions that end the spell and release the creature whenever they occur. These triggers can be as simple or elaborate as you desire, but the condition must be reasonable and have a likelihood of coming to pass. The conditions can be based on a creature’s name, identity, or alignment but otherwise must be based on observable actions or qualities. Intangibles such as level, class, Hit Dice, or hit points don’t qualify. Once the spell is cast, its triggering conditions cannot be changed. Setting a release condition increases the save DC (assuming a saving throw is allowed) by 2.\n\nIf you are casting any of the first three versions of binding (those with limited durations), you may cast additional binding spells to prolong the effect, since the durations overlap. If you do so, the target gets a saving throw at the end of the first spell’s duration, even if your caster level was high enough to disallow an initial saving throw. If the creature succeeds on this save, all the binding spells it has received are broken.\n\nThe binding spell has six versions. Choose one of the following versions when you cast the spell.\n\nChaining\nThe subject is confined by restraints that generate an antipathy spell affecting all creatures who approach the subject, except you. The duration is one year per caster level. The subject of this form of binding is confined to the spot it occupied when it received the spell.\n\nSlumber\nThis version causes the subject to become comatose for as long as one year per caster level. The subject does not need to eat or drink while slumbering, nor does it age. This form of binding is more difficult to cast than chaining, making it slightly easier to resist. Reduce the spell’s save DC by 1.\n\nBound Slumber\nThis combination of chaining and slumber lasts for as long as one month per caster level. Reduce the save DC by 2.\n\nHedged Prison\nThe subject is transported to or otherwise brought within a confined area from which it cannot wander by any means. The effect is permanent. Reduce the save DC by 3.\n\nMetamorphosis\nThe subject assumes gaseous form, except for its head or face. It is held harmless in a jar or other container, which may be transparent if you so choose. The creature remains aware of its surroundings and can speak, but it cannot leave the container, attack, or use any of its powers or abilities. The binding is permanent. The subject does not need to breathe, eat, or drink while metamorphosed, nor does it age. Reduce the save DC by 4.\n\nMinimus Containment\nThe subject is shrunk to a height of 1 inch or even less and held within some gem, jar, or similar object. The binding is permanent. The subject does not need to breathe, eat, or drink while contained, nor does it age. Reduce the save DC by 4.\n\nYou can’t dispel a binding spell with dispel magic or a similar effect, though an antimagic field or Mage’s disjunction affects it normally. A bound extraplanar creature cannot be sent back to its home plane due to dismissal, banishment, or a similar effect.\n\nComponents\nThe components for a binding spell vary according to the version of the spell, but they always include a continuous chanting utterance read from the scroll or spellbook page containing the spell, somatic gestures, and materials appropriate to the form of binding used. These components can include such items as miniature chains of special metals, soporific herbs of the rarest sort (for slumber bindings), a bell jar of the finest crystal, and the like\n\nIn addition to the specially made props suited to the specific type of binding (cost 500 gp), the spell requires opals worth at least 500 gp for each HD of the target and a vellum depiction or carved statuette of the subject to be captured.",
  },
  //Black Tentacles
  {
    id: "srd51",
    name: "Black Tentacles",
    school: "Conjuration",
    subSchool: "Creation",
    level: "Sor/Wiz 4",
    components: "V, S, M",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    area: "20-ft.-radius spread",
    duration: "1 round/level (D)",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "This spell conjures a field of rubbery black tentacles, each 10 feet long. These waving members seem to spring forth from the earth, floor, or whatever surface is underfoot—including water. They grasp and entwine around creatures that enter the area, holding them fast and crushing them with great strength.\n\nEvery creature within the area of the spell must make a grapple check, opposed by the grapple check of the tentacles. Treat the tentacles attacking a particular target as a Large creature with a base attack bonus equal to your caster level and a Strength score of 19. Thus, its grapple check modifier is equal to your caster level +8. The tentacles are immune to all types of damage.\n\nOnce the tentacles grapple an opponent, they may make a grapple check each round on your turn to deal 1d6+4 points of bludgeoning damage. The tentacles continue to crush the opponent until the spell ends or the opponent escapes.\n\nAny creature that enters the area of the spell is immediately attacked by the tentacles. Even creatures who aren’t grappling with the tentacles may move through the area at only half normal speed.\n\nMaterial Component\nA piece of tentacle from a giant octopus or a giant squid.",
  },
  //Blade Barrier
  {
    id: "srd52",
    name: "Blade Barrier",
    school: "Evocation",
    descriptor: "Force",
    level: "Clr 6, Good 6, War 6",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    effect:
      "Wall of whirling blades up to 20 ft. long/level, or a ringed wall of whirling blades with a radius of up to 5 ft. per two levels; either form 20 ft. high",
    duration: "1 min./level (D)",
    savingThrow: "Reflex half or Reflex negates; see text",
    spellResistance: "Yes",
    description:
      "An immobile, vertical curtain of whirling blades shaped of pure force springs into existence. Any creature passing through the wall takes 1d6 points of damage per caster level (maximum 15d6), with a Reflex save for half damage.\n\nIf you evoke the barrier so that it appears where creatures are, each creature takes damage as if passing through the wall. Each such creature can avoid the wall (ending up on the side of its choice) and thus take no damage by making a successful Reflex save.\n\nA blade barrier provides cover (+4 bonus to AC, +2 bonus on Reflex saves) against attacks made through it.",
  },
  //Blasphemy
  {
    id: "srd53",
    name: "Blasphemy",
    school: "Evocation",
    descriptor: "Evil, Sonic",
    level: "Clr 7, Evil 7",
    components: "V",
    castingTime: "1 standard action",
    range: "40 ft.",
    area: "Nonevil creatures in a 40-ft.-radius spread centered on you",
    duration: "Insstantaneous",
    savingThrow: "None or Will negates; see text",
    spellResistance: "Yes",
    description:
      "Any nonevil creature within the area of a blasphemy spell suffers the following ill effects.\n\n\u2022HD equal to caster level - Dazed\n\u2022HD up to caster level -1 - Weakened, dazed\n\u2022HD up to caster level -5 - Paralyzed, weakened, dazed\n\u2022HD up to caster level -10 - Killed, paralyzed, weakened, dazed\n\nThe effects are cumulative and concurrent.\n\nNo saving throw is allowed against these effects.\n\nDazed\nThe creature can take no actions for 1 round, though it defends itself normally.\n\nWeakened\nThe creature’s Strength score decreases by 2d6 points for 2d4 rounds.\n\nParalyzed\nThe creature is paralyzed and helpless for 1d10 minutes.\n\nKilled\nLiving creatures die. Undead creatures are destroyed.\n\nFurthermore, if you are on your home plane when you cast this spell, nonevil extraplanar creatures within the area are instantly banished back to their home planes. Creatures so banished cannot return for at least 24 hours. This effect takes place regardless of whether the creatures hear the blasphemy. The banishment effect allows a Will save (at a -4 penalty) to negate.\n\nCreatures whose Hit Dice exceed your caster level are unaffected by blasphemy.",
  },
  //Bless
  {
    id: "srd54",
    name: "Bless",
    school: "Enchantment",
    subSchool: "Compulsion",
    descriptor: "Mind-Affecting",
    level: "Clr 1, Pal 1",
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "50 ft.",
    area:
      "The caster and all allies with a 50-ft. burst, centered on the caster",
    duration: "1 min./level",
    savingThrow: "None",
    spellResistance: "Yes (harmless)",
    description:
      "Bless fills your allies with courage. Each ally gains a +1 morale bonus on attack rolls and on saving throws against fear effects.\n\nBless counters and dispels bane.",
  },
  //Bless Water
  {
    id: "srd55",
    name: "Bless Water",
    school: "Transmutation",
    descriptor: "Good",
    level: "Clr 1, Pal 1",
    components: "V, S, M",
    castingTime: "1 minute",
    range: "Touch",
    target: "Flask of water touched",
    duration: "Instantaneous",
    savingThrow: "Will negates (object)",
    spellResistance: "Yes (object)",
    description:
      "This transmutation imbues a flask (1 pint) of water with positive energy, turning it into holy water.\n\nMaterial Component\n5 pounds of powdered silver (worth 25 gp).",
  },
  //Bless Weapon
  {
    id: "srd56",
    name: "Bless Weapon",
    school: "Transmuation",
    level: "Pal 1",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Touch",
    target: "Weapon touched",
    duration: "1 min./level",
    savingThrow: "None",
    spellResistance: "No",
    description:
      "This transmutation makes a weapon strike true against evil foes. The weapon is treated as having a +1 enhancement bonus for the purpose of bypassing the damage reduction of evil creatures or striking evil incorporeal creatures (though the spell doesn’t grant an actual enhancement bonus). The weapon also becomes good, which means it can bypass the damage reduction of certain creatures. (This effect overrides and suppresses any other alignment the weapon might have.) Individual arrows or bolts can be transmuted, but affected projectile weapons (such as bows) don’t confer the benefit to the projectiles they shoot.\n\nIn addition, all critical hit rolls against evil foes are automatically successful, so every threat is a critical hit. This last effect does not apply to any weapon that already has a magical effect related to critical hits, such as a keen weapon or a vorpal sword.",
  },
  //Blight
  {
    id: "srd57",
    name: "Blight",
    school: "Necromancy",
    level: "Drd 4, Sor/Wiz 5",
    components: "V, S, DF",
    castingTime: "1 standard action",
    range: "Touch",
    duration: "Instantaneous",
    savingThrow: "Fortitude half; see text",
    spellResistance: "Yes",
    description:
      "This spell withers a single plant of any size. An affected plant creature takes 1d6 points of damage per level (maximum 15d6) and may attempt a Fortitude saving throw for half damage. A plant that isn’t a creature doesn’t receive a save and immediately withers and dies.\n\nThis spell has no effect on the soil or surrounding plant life.",
  },
  //Blindness/Deafness
  {
    id: "srd58",
    name: "Blindness/Deafness",
    school: "Necromancy",
    level: "Brd 2, Clr 3, Sor/Wiz 2",
    components: "V",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    target: "One living creature",
    duration: "Permanent (D)",
    savingThrow: "Fortitude negates",
    spellResistance: "Yes",
    description:
      "You call upon the powers of unlife to render the subject blinded or deafened, as you choose.",
  },
  //Blink
  {
    id: "srd59",
    name: "Blink",
    school: "Transmutation",
    level: "Brd 3, Sor/Wiz 3",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Personal",
    target: "You",
    description:
      "You “blink” back and forth between the Material Plane and the Ethereal Plane. You look as though you’re winking in and out of reality very quickly and at random.\n\nBlinking has several effects, as follows.\n\nPhysical attacks against you have a 50% miss chance, and the Blind-Fight feat doesn’t help opponents, since you’re ethereal and not merely invisible. If the attack is capable of striking ethereal creatures, the miss chance is only 20% (for concealment).\n\nIf the attacker can see invisible creatures, the miss chance is also only 20%. (For an attacker who can both see and strike ethereal creatures, there is no miss chance.) Likewise, your own attacks have a 20% miss chance, since you sometimes go ethereal just as you are about to strike.\n\nAny individually targeted spell has a 50% chance to fail against you while you’re blinking unless your attacker can target invisible, ethereal creatures. Your own spells have a 20% chance to activate just as you go ethereal, in which case they typically do not affect the Material Plane.\n\nWhile blinking, you take only half damage from area attacks (but full damage from those that extend onto the Ethereal Plane). You strike as an invisible creature (with a +2 bonus on attack rolls), denying your target any Dexterity bonus to AC.\n\nYou take only half damage from falling, since you fall only while you are material.\n\nWhile blinking, you can step through (but not see through) solid objects. For each 5 feet of solid material you walk through, there is a 50% chance that you become material. If this occurs, you are shunted off to the nearest open space and take 1d6 points of damage per 5 feet so traveled. You can move at only three-quarters speed (because movement on the Ethereal Plane is at half speed, and you spend about half your time there and half your time material.)\n\nSince you spend about half your time on the Ethereal Plane, you can see and even attack ethereal creatures. You interact with ethereal creatures roughly the same way you interact with material ones.\n\nAn ethereal creature is invisible, incorporeal, and capable of moving in any direction, even up or down. As an incorporeal creature, you can move through solid objects, including living creatures.\n\nAn ethereal creature can see and hear the Material Plane, but everything looks gray and insubstantial. Sight and hearing on the Material Plane are limited to 60 feet.\n\nForce effects and abjurations affect you normally. Their effects extend onto the Ethereal Plane from the Material Plane, but not vice versa. An ethereal creature can’t attack material creatures, and spells you cast while ethereal affect only other ethereal things. Certain material creatures or objects have attacks or effects that work on the Ethereal Plane. Treat other ethereal creatures and objects as material.",
  },
  //Blur
  {
    id: "srd60",
    name: "Blur",
    school: "Illusion",
    subSchool: "Glamer",
    level: "Brd 2, Sor/Wiz 2",
    components: "V",
    castingTime: "1 standard action",
    range: "Touch",
    target: "Creature touched",
    duration: "1 min./level (D)",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    description:
      "The subject’s outline appears blurred, shifting and wavering. This distortion grants the subject concealment (20% miss chance).\n\nA see invisibility spell does not counteract the blur effect, but a true seeing spell does.\n\nOpponents that cannot see the subject ignore the spell’s effect (though fighting an unseen opponent carries penalties of its own).",
  },
  //Break Enchantment
  {
    id: "srd61",
    name: "Break Enchantment",
    school: "Abjuration",
    level: "Brd 4, Clr 5, Luck 5, Pal 4, Sor/Wiz 5",
    components: "V, S",
    castingTime: "1 minute",
    range: "Close (25 ft. + 5 ft./2 levels)",
    target: "Up to one creature per level, all within 30 ft. of each other",
    duration: "Instantaneous",
    savingThrow: "See text",
    spellResistance: "No",
    description:
      "This spell frees victims from enchantments, transmutations, and curses. Break enchantment can reverse even an instantaneous effect. For each such effect, you make a caster level check (1d20 + caster level, maximum +15) against a DC of 11 + caster level of the effect. Success means that the creature is free of the spell, curse, or effect. For a cursed magic item, the DC is 25.\n\nIf the spell is one that cannot be dispelled by dispel magic, break enchantment works only if that spell is 5th level or lower.\n\nIf the effect comes from some permanent magic item break enchantment does not remove the curse from the item, but it does frees the victim from the item’s effects.",
  },
  //Bull's Strength
  {
    id: "srd62",
    name: "Bull's Strength",
    school: "Transmuation",
    level: "Clr 2, Drd 2, Pal 2, Sor/Wiz 2, Strength 2",
    components: "V, S, M/DF",
    castingTime: "1 standard action",
    range: "Touch",
    target: "Creature touched",
    duration: "1 min./level",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes (harmless)",
    description:
      "The subject becomes stronger. The spell grants a +4 enhancement bonus to Strength, adding the usual benefits to melee attack rolls, melee damage rolls, and other uses of the Strength modifier.\n\nArcane Material Component\nA few hairs, or a pinch of dung, from a bull.",
  },
  //Bull's Strength, Mass
  {
    id: "srd63",
    name: "Bull's Strength, Mass",
    school: "Transmutation",
    level: "Clr 6, Drd 6, Sor/Wiz 6",
    target: "One creature/level, no two of which can be more than 30 ft. apart",
    description:
      "This spell functions like bull’s strength, except that it affects multiple creatures.",
  },
  //Burning Hands
  {
    id: "srd64",
    name: "Burning Hands",
    school: "Evocation",
    descriptor: "Fire",
    level: "Fire 1, Sor/Wiz 1",
    components: "V, S",
    castingTime: "1 standard action",
    range: "15 ft.",
    area: "Cone-shaped burst",
    duration: "Instantaneous",
    savingThrow: "Reflex half",
    spellResistance: "Yes",
    description:
      "A cone of searing flame shoots from your fingertips. Any creature in the area of the flames takes 1d4 points of fire damage per caster level (maximum 5d4). Flammable materials burn if the flames touch them. A character can extinguish burning items as a full-round action.",
  },
  //Chill touch
  {
    id: "srd14",
    name: "Chill Touch",
    school: "Necromancy",
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
  //Detect magic
  {
    id: "srd4",
    name: "Detect Magic",
    school: "Divination",
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
  //Ghost Sound
  {
    id: "srd3",
    name: "Ghost Sound",
    school: "Illusion (Figment)",
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
  //Know direction
  {
    id: "srd11",
    name: "Know Direction",
    school: "Divination",
    level: "Brd 0, Drd 0",
    components: "V, S",
    castingTime: "1 standard action",
    range: "Personal",
    target: "You",
    duration: "Instantaneous",
    description:
      "You instantly know the direction of north from your current position.\nThe spell is effective in any environment in which 'north' exists, but it may not work in extraplanar settings.\nYour knowledge of north is correct at the moment of casting, but you can get lost again within moments if you don't find some external reference point to help you keep track of direction.",
  },
  //Light
  {
    id: "srd7",
    name: "Light",
    school: "Evocation [Light]",
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
  //Lullaby
  {
    id: "srd10",
    name: "Lullaby",
    school: "Enchantement (Compulsion) [Mind-Affecting]",
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
  //Mage Hand
  {
    id: "srd5",
    name: "Mage Hand",
    school: "Transmutation",
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
  //Mending
  {
    id: "srd1",
    name: "Mending",
    school: "Transmutation",
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
  //Message
  {
    id: "srd6",
    name: "Message",
    school: "Transmutation [Language-Dependent]",
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
  //Open/Close
  {
    id: "srd12",
    name: "Open/Close",
    school: "Transmutation",
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
    school: "Universal",
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
  //Read Magic
  {
    id: "srd8",
    name: "Read Magic",
    school: "Divination",
    level: "Brd 0, Clr 0, Drd 0, Pal 1, Rgr 1, Sor/Wiz 0",
    components: "V, S, AF",
    castingTime: "1 standard action",
    range: "Personal",
    target: "You",
    duration: "10 min./level",
    description:
      "By means of read magic, you can decipher magical inscriptions on objects—books, scrolls, weapons, and the like—that would otherwise be unintelligible.\n\nThis deciphering does not normally invoke the magic contained in the writing, although it may do so in the case of a cursed scroll.\n\nFurthermore, once the spell is cast and you have read the magical inscription, you are thereafter able to read that particular writing without recourse to the use of read magic.\n\nYou can read at the rate of one page (250 words) per minute.\n\nThe spell allows you to identify a glyph of warding with a DC 13 Spellcraft check, a greater glyph of warding with a DC 16 Spellcraft check, or any symbol spell with a Spellcraft check (DC 10 + spell level).\n\nRead magic can be made permanent with a permanency spell.\n\nFocus: A clear crystal or mineral prism.",
  },
];
export default spellCompendium;
