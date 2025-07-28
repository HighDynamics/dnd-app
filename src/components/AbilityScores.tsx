import { combine as c } from "../lib";
import {
  useAbilityScore,
  useCharacter,
  useDiceRoll,
} from "../store/recoilState";
import { DiceRollButton } from "./DiceRollButton";
import { EntityDisclosure } from "./EntityDisclosure";
import { Heading } from "./Heading";

export const AbilityScores = () => {
  const { name: characterName } = useCharacter();
  const roll20 = useDiceRoll(20);
  const str = useAbilityScore("strength");
  const dex = useAbilityScore("dexterity");
  const con = useAbilityScore("constitution");
  const int = useAbilityScore("intelligence");
  const wis = useAbilityScore("wisdom");
  const cha = useAbilityScore("charisma");
  const abilityScores = [
    { name: "Strength", ...str },
    { name: "Dexterity", ...dex },
    { name: "Constitution", ...con },
    { name: "Intelligence", ...int },
    { name: "Wisdom", ...wis },
    { name: "Charisma", ...cha },
  ];

  return (
    <section>
      <Heading>Ability Scores</Heading>
      <div className="flex flex-col gap-2">
        {abilityScores.map(({ name, score, modifier }) => (
          <EntityDisclosure
            key={name}
            containerClassName={c(!score && "opacity-50")}
            buttonChildren={
              <div className="flex items-center justify-between">
                <span className="text-lg">
                  {name} ({`${score}`})
                </span>
                <div className="flex items-center gap-2">
                  {modifier && (
                    <span className="tabular-nums text-lg">+{modifier}</span>
                  )}
                  <DiceRollButton
                    disabled={!modifier}
                    onClick={() => {
                      if (!modifier) return;
                      roll20(modifier, name);
                    }}
                  />
                </div>
              </div>
            }
          >
            {score ? (
              // TODO: Add the ability score calculation
              <div></div>
            ) : (
              <span>
                {characterName} does not have a {name} score
              </span>
            )}
          </EntityDisclosure>
        ))}
      </div>
    </section>
  );
};
