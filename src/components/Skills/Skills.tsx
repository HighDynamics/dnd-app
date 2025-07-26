import { useSetRecoilState, useRecoilValue } from "recoil";
import { Button } from "../Button";
import { combine as c } from "../../lib";
import { EntityDisclosure } from "../EntityDisclosure";
import { diceRollState, characterState } from "../../recoilState";
import { FadedSeparator } from "../FadedSeparator";
import { roll20, getAbilityMod } from "../../utilities/utilities";

const SkillsListItem = (props: { character: ICharacter; skill: Skill }) => {
  const { character, skill } = props;
  const abilityMod = getAbilityMod(character);
  const setRollResult = useSetRecoilState(diceRollState);

  let formattedSkill = skill.name.replace("Knowledge", "Know:");

  const skillPoints =
    skill.ranks + skill.miscModifier + abilityMod(skill.ability);

  return (
    <EntityDisclosure
      containerClassName={c(skill.classSkill && "!border-emerald-800")}
      buttonChildren={
        <div className="flex items-center justify-between">
          <span className="text-lg">{formattedSkill}</span>
          <div className="flex items-center gap-2">
            <span className="font-mono">+{skillPoints}</span>
            <Button
              className="flex size-8 items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setRollResult(roll20(skillPoints, formattedSkill));
              }}
            >
              <i className="fas fa-dice-d20 opacity-70 duration-100 group-active:opacity-100" />
            </Button>
          </div>
        </div>
      }
    >
      <FadedSeparator className="my-2" />
      <div className="flex flex-col gap-1">
        <span>Ranks: {skill.ranks}</span>
        <span>Misc Mod: {skill.miscModifier}</span>
        <span className="capitalize">
          {skill.ability}: {abilityMod(skill.ability)}
        </span>
      </div>
    </EntityDisclosure>
  );
};

export function Skills() {
  const character = useRecoilValue(characterState);
  return (
    <>
      <h1 className="mb-4 mt-12 text-5xl font-bold opacity-90">Skills</h1>
      <div className="flex flex-col gap-2">
        {character.skills
          .filter((skill) => skill.display)
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((s) => (
            <SkillsListItem key={s.name} skill={s} character={character} />
          ))}
      </div>
    </>
  );
}
