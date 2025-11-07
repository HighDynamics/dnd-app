import {
  useAbilityScore,
  useCharacter,
  useDiceRoll,
} from "../store/recoilState";
import { DiceRollButton } from "./DiceRollButton";
import { EntityDisclosure } from "./EntityDisclosure";
import { FadedSeparator } from "./FadedSeparator";
import { Heading } from "./Heading";

export function MiscInfo() {
  const character = useCharacter();
  const dexMod = useAbilityScore("dexterity").modifier || 0;
  const initiative = character.initiative.misc + dexMod;
  const roll20 = useDiceRoll(20);

  const speeds = Object.entries(character.speed).filter(
    ([_, value]) => value > 0,
  );
  return (
    <section>
      <Heading>Misc</Heading>
      <div className="flex flex-col gap-2">
        <EntityDisclosure
          buttonChildren={
            <div className="flex justify-between text-lg items-center">
              <span>Initiative</span>
              <div className="flex items-center gap-2">
                <span className="tabular-nums">+{initiative}</span>
                <DiceRollButton
                  onClick={() => roll20(initiative, "Initiative")}
                />
              </div>
            </div>
          }
        >
          <FadedSeparator className="my-2" />
          <div className="flex justify-between flex-wrap gap-y-4">
            <div className="flex flex-col w-1/2">
              <span className="text-label text-sm">Dexterity</span>
              <span className="tabular-nums">{dexMod}</span>
            </div>
            <div className="flex flex-col w-1/2">
              <span className="text-label text-sm">Misc</span>
              <span className="tabular-nums">{character.initiative.misc}</span>
            </div>
          </div>
        </EntityDisclosure>

        {speeds.length > 1 && <div className="text-label mt-6">Speed</div>}
        <EntityDisclosure
          buttonChildren={
            speeds.length > 1 ? (
              <div className="flex justify-between text-lg">
                {speeds.map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-label text-sm">{key}</span>
                    <span className="tabular-nums">{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-between text-lg items-center">
                <span>Speed</span>
                <span className="tabular-nums">{speeds.at(0)?.at(1)} ft.</span>
              </div>
            )
          }
        ></EntityDisclosure>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <span className="text-label mt-6">Type</span>
          <span className="text-lg">{character.type.join(", ")}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-label">Classes</span>
          <div className="grid grid-cols-2 gap-2">
            {character.classes.map((c) => (
              <span key={c.name} className="text-lg">
                {c.name} ({c.level})
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
