export function getCharacterClassDataByName(
  name: string,
  character: ICharacter,
): DNDClass {
  const classData = character.classes.find((c) => c.name === name);
  if (!classData) {
    throw new Error(`No class data for class ${name}`);
  }
  return classData;
}

/**
 * Spell slots are intrinsically tied to a character class, thus this function
 * requires and returns a full class.
 */
export function incrementSpellSlots(
  classData: DNDClass,
  spellLevel: number,
): DNDClass {
  if (!classData.magic) {
    throw new Error(`No magic data for class: ${classData.name}`);
  }

  const slotsUsed = classData.magic.slotsUsed.map((x, i) =>
    i === spellLevel ? x + 1 : x,
  );

  return {
    ...classData,
    magic: { ...classData.magic, slotsUsed },
  };
}

/**
 * Prepared spell slots are intrinsically tied to a character class, thus this
 * function requires and returns a full class.
 */
export function incrementSpellPrep(
  classData: DNDClass,
  spellId: string,
  action: "prep" | "cast",
): DNDClass {
  if (!classData || !classData.magic) {
    throw new Error(`No magic data for class ${classData.name}`);
  }

  const spellLevel = classData.magic.spellRefs.find(
    (spellRef) => spellRef.id === spellId,
  )?.level;

  return {
    ...classData,
    magic: {
      ...classData.magic,
      spellRefs: classData.magic.spellRefs.map((spellRef) => {
        if (
          spellRef.prepped === undefined ||
          spellRef.numUsed === undefined ||
          spellRef.id !== spellId
        )
          return spellRef;

        return {
          ...spellRef,
          prepped: action === "prep" ? spellRef.prepped + 1 : spellRef.prepped,
          numUsed: action === "cast" ? spellRef.numUsed + 1 : spellRef.numUsed,
        };
      }),
      slotsUsed: classData.magic.slotsUsed.map((x, i) =>
        action === "prep" && spellLevel === i ? x + 1 : x,
      ),
    },
  };
}
