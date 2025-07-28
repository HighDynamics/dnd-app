import { abbreviateAbility } from "../lib";
import {
  useAbilityScore,
  useCharacter,
  useDiceRoll,
} from "../store/recoilState";
import { camelCaseToTitleCase } from "../utilities/utilities";
import { DiceRollButton } from "./DiceRollButton";
import { EntityDisclosure } from "./EntityDisclosure";
import { FadedSeparator } from "./FadedSeparator";
import { Heading } from "./Heading";

export const DefenseInfo = () => {
  const {
    armorClass,
    damageReduction,
    spellResistance,
    energyResistance,
    saves: saves_,
  } = useCharacter();
  const { fortitude, reflex, will } = saves_;
  const roll20 = useDiceRoll(20);
  const fortMod = useAbilityScore(fortitude.ability).modifier;
  const refMod = useAbilityScore(reflex.ability).modifier;
  const willMod = useAbilityScore(will.ability).modifier;
  const saves = [
    { name: "Fortitude", abilityMod: fortMod || 0, ...fortitude },
    { name: "Reflex", abilityMod: refMod || 0, ...reflex },
    { name: "Will", abilityMod: willMod || 0, ...will },
  ];
  const ac = armorClass;
  const totalAc =
    10 +
    ac.armor +
    ac.deflection +
    ac.dexterity +
    ac.misc +
    ac.naturalArmor +
    ac.shield +
    ac.size;

  return (
    <section>
      <Heading>Defense</Heading>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-label">Armor Class</span>
          <EntityDisclosure
            buttonChildren={
              <div className="flex justify-between text-lg">
                <div className="flex flex-col">
                  <span className="text-label text-sm">Total</span>
                  <span className="tabular-nums">{totalAc}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label text-sm">Touch</span>
                  <span className="tabular-nums">
                    {totalAc - ac.armor - ac.shield}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label text-sm">Flatfooted</span>
                  <span className="tabular-nums">{totalAc - ac.dexterity}</span>
                </div>
              </div>
            }
          >
            <FadedSeparator className="my-2" />
            <div className="flex justify-between flex-wrap gap-y-4">
              <div className="flex flex-col w-1/2">
                <span className="text-label text-sm">Base</span>
                <span className="tabular-nums">10</span>
              </div>
              {Object.entries(ac).map(([key, value]) => (
                <div key={key} className="flex flex-col w-1/2">
                  <span className="text-label text-sm">
                    {camelCaseToTitleCase(key)}
                  </span>
                  <span className="tabular-nums">{value}</span>
                </div>
              ))}
            </div>
          </EntityDisclosure>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-label">Saves</div>
          {saves.map(({ name, base, magic, misc, abilityMod, ability }) => {
            const score = base + magic + misc + abilityMod;
            return (
              <EntityDisclosure
                key={name}
                buttonChildren={
                  <div className="flex items-center justify-between">
                    <span className="text-lg">{name}</span>
                    <div className="flex items-center gap-2">
                      <span className="tabular-nums text-lg">+{score}</span>
                      <DiceRollButton onClick={() => roll20(score, name)} />
                    </div>
                  </div>
                }
              >
                <FadedSeparator className="my-2" />
                <div className="flex">
                  <div className="flex flex-col flex-1">
                    <span className="text-label text-sm">Base</span>
                    <span>{base}</span>
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="text-label text-sm">
                      {abbreviateAbility(ability)}
                    </span>
                    <span>{abilityMod}</span>
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="text-label text-sm">Magic</span>
                    <span>{magic}</span>
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="text-label text-sm">Misc</span>
                    <span>{misc}</span>
                  </div>
                </div>
              </EntityDisclosure>
            );
          })}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-label">Damage Reduction</span>{" "}
            <span>
              {damageReduction.amount} / {damageReduction.weakness}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-label">Spell Resistance</span>
            <span>{spellResistance}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-label">Energy Resistance</span>
          <div className="flex flex-col gap-1 max-w-[60%]">
            {Object.entries(energyResistance).map(([key, value]) => (
              <div className="flex justify-between" key={key}>
                <span className="capitalize">{key}:</span>
                <span className="tabular-nums">
                  {value !== null ? value : "Immune"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
