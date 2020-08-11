export default {
  spells: [
    {
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
        "Mending repairs small breaks or tears in objects (but not warps, such as might be caused by a warp wood spell). It will weld broken metallic objects such as a ring, a chain link, a medallion, or a slender dagger, providing but one break exists.\n\nCeramic or wooden objects with multiple breaks can be invisibly rejoined to be as strong as new. A hole in a leather sack or a wineskin is completely healed over by mending. The spell can repair a magic item, but the item’s magical abilities are not restored. The spell cannot mend broken magic rods, staffs, or wands, nor does it affect creatures (including constructs)."
    },
    {
      name: "Arcane_Mark",
      type: "Universal",
      level: "Sor/Wiz 0",
      components: "V, S",
      castingTime: "1 standard action",
      range: "0 ft.",
      effect:
        "One personal rune or mark, all of which must fit within 1 sq. ft.",
      duration: "Permanent",
      savingThrow: "None",
      spellResistance: "No",
      description:
        "This spell allows you to inscribe your personal rune or mark, which can consist of no more than six characters. The writing can be visible or invisible. An arcane mark spell enables you to etch the rune upon any substance without harm to the material upon which it is placed. If an invisible mark is made, a detect magic spell causes it to glow and be visible, though not necessarily understandable.\n\nSee invisibility, true seeing, a gem of seeing, or a robe of eyes likewise allows the user to see an invisible arcane mark. A read magic spell reveals the words, if any. The mark cannot be dispelled, but it can be removed by the caster or by an erase spell.\n\nIf an arcane mark is placed on a living being, normal wear gradually causes the effect to fade in about a month.\n\nArcane mark must be cast on an object prior to casting instant summons on the same object (see that spell description for details)."
    }
  ]
};
