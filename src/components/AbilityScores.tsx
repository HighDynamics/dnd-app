import { useSetRecoilState } from "recoil";

import { combine as c } from "../lib";
import {
  diceRollState,
  useAbilityScore,
  useCharacter,
} from "../store/recoilState";
import { roll20 } from "../utilities/utilities";
import { Button } from "./Button";
import { EntityDisclosure } from "./EntityDisclosure";
import { Heading } from "./Heading";

export const AbilityScores = () => {
  const { name: characterName } = useCharacter();
  const setRollResult = useSetRecoilState(diceRollState);
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
                  <Button
                    className="flex size-8 items-center justify-center"
                    disabled={!modifier}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!modifier) return;

                      setRollResult(roll20(modifier, name));
                    }}
                  >
                    <i className="fas fa-dice-d20 opacity-70 duration-100 group-active:opacity-100" />
                  </Button>
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
