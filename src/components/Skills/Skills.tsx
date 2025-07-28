import { combine as c } from "../../lib";
import {
  useCharacter,
  useAbilityScore,
  useDiceRoll,
} from "../../store/recoilState";
import { DiceRollButton } from "../DiceRollButton";
import { EntityDisclosure } from "../EntityDisclosure";
import { FadedSeparator } from "../FadedSeparator";
import { Heading } from "../Heading";

const SkillsListItem = ({ skill }: { skill: Skill }) => {
  const { modifier: skillAbilityMod } = useAbilityScore(skill.ability);
  const roll20 = useDiceRoll(20);

  let formattedSkill = skill.name.replace("Knowledge", "Know:");

  const skillPoints = skill.ranks + skill.miscModifier + (skillAbilityMod || 0);

  return (
    <EntityDisclosure
      containerClassName={c(skill.classSkill && "!border-emerald-800")}
      buttonChildren={
        <div className="flex items-center justify-between">
          <span className="text-lg">{formattedSkill}</span>
          <div className="flex items-center gap-2">
            <span className="font-mono">+{skillPoints}</span>
            <DiceRollButton
              className="flex size-8 items-center justify-center"
              onClick={() => roll20(skillPoints, formattedSkill)}
            >
              <i className="fas fa-dice-d20 opacity-70 duration-100 group-active:opacity-100" />
            </DiceRollButton>
          </div>
        </div>
      }
    >
      <FadedSeparator className="my-2" />
      <div className="flex flex-col gap-1">
        <span>Ranks: {skill.ranks}</span>
        <span>Misc Mod: {skill.miscModifier}</span>
        <span className="capitalize">
          {skill.ability}: {skillAbilityMod}
        </span>
      </div>
    </EntityDisclosure>
  );
};

export function Skills() {
  const character = useCharacter();
  return (
    <section className="mt-12">
      <Heading>Skills</Heading>
      <div className="flex flex-col gap-2">
        {character.skills
          .filter((skill) => skill.display)
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((s) => (
            <SkillsListItem key={s.name} skill={s} />
          ))}
      </div>
    </section>
  );
}
