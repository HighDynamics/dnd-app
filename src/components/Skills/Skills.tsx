import { useState } from "react";

import { combine as c } from "../../lib";
import {
  useCharacter,
  useAbilityScore,
  useDiceRoll,
} from "../../store/recoilState";
import { useUpdateCharacter } from "../../store/server";
import { Button } from "../Button";
import { DiceRollButton } from "../DiceRollButton";
import { EntityDisclosure } from "../EntityDisclosure";
import { FadedSeparator } from "../FadedSeparator";
import { Heading } from "../Heading";
import { Input } from "../Input/Input";
import { NumericInput } from "../Input/NumericInput";

const emptySkill: Skill = {
  name: "",
  ability: "strength",
  ranks: 0,
  miscModifier: 0,
  classSkill: false,
  armorCheck: false,
};

function ValueChange(p: { original: number; updated: number }) {
  const diff = p.updated - p.original;
  if (diff === 0) {
    return null;
  }

  const sign = diff > 0 ? "+" : "";
  const colorClass = diff > 0 ? "text-emerald-400" : "text-red-400";

  return (
    <span
      className={c("ml-2 font-mono", colorClass)}
    >{`(${sign}${diff})`}</span>
  );
}

function formatSkillName(name: string) {
  return name.replace("Knowledge", "Know:");
}

function DeleteConfirmation(p: {
  skillName: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="absolute z-10 top-0 left-0 size-full flex items-center justify-center bg-black/95 p-4">
      <div className="flex flex-col gap-8">
        <span>Are you sure you want to delete the skill "{p.skillName}"?</span>
        <div className="flex justify-between">
          <Button className="bg-red-700 hover:bg-red-800" onClick={p.onConfirm}>
            Yes, Delete
          </Button>
          <Button
            className="bg-stone-700 hover:bg-stone-800"
            onClick={p.onCancel}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

function SkillsListItem(p: {
  skill: Skill;
  setIsAddingSkill?: (isAdding: boolean) => void;
}) {
  const { skill } = p;
  const isAddingSkill = !!p.setIsAddingSkill;
  const { modifier: skillAbilityMod } = useAbilityScore(skill.ability);
  const [isEditing, setIsEditing] = useState(skill.name === "" ? true : false);
  const [name, setName] = useState(skill.name);
  const [ranks, setRanks] = useState(skill.ranks.toString());
  const [miscMod, setMiscMod] = useState(skill.miscModifier.toString());
  const [isClassSkill, setIsClassSkill] = useState(skill.classSkill);
  const [hasArmorCheckPenalty, setHasArmorCheckPenalty] = useState(
    skill.armorCheck,
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const character = useCharacter();
  const updateCharacter = useUpdateCharacter();
  const roll20 = useDiceRoll(20);

  const skillPoints = skill.ranks + skill.miscModifier + (skillAbilityMod || 0);

  const userHasChanges =
    ranks !== skill.ranks.toString() ||
    miscMod !== skill.miscModifier.toString() ||
    isClassSkill !== skill.classSkill ||
    hasArmorCheckPenalty !== skill.armorCheck ||
    name.trim() !== skill.name;

  function onFinishEditing() {
    if (p.setIsAddingSkill) {
      p.setIsAddingSkill(false);
    }
    setIsEditing(false);
  }

  const onSubmit = () => {
    const updatedSkill: Skill = {
      ...skill,
      name: name.trim(),
      ranks: parseInt(ranks) || 0,
      miscModifier: parseInt(miscMod) || 0,
      classSkill: isClassSkill,
      armorCheck: hasArmorCheckPenalty,
    };

    const existingSkillIndex = character.skills.findIndex(
      (s) => s.name === skill.name,
    );

    const updatedSkills = [...character.skills];
    if (existingSkillIndex >= 0) {
      updatedSkills[existingSkillIndex] = updatedSkill;
    } else {
      updatedSkills.push(updatedSkill);
    }

    updateCharacter({ ...character, skills: updatedSkills });
    setName(updatedSkill.name);
    setRanks(updatedSkill.ranks.toString());
    setMiscMod(updatedSkill.miscModifier.toString());
    setIsClassSkill(updatedSkill.classSkill);
    setHasArmorCheckPenalty(updatedSkill.armorCheck);
  };

  return (
    <EntityDisclosure
      defaultOpen={isAddingSkill}
      containerClassName={c(
        "relative",
        skill.classSkill && "border-emerald-800!",
      )}
      buttonChildren={
        <div
          className="flex items-center justify-between"
          onClick={(e) => isEditing && e.stopPropagation()}
        >
          {isEditing ? (
            <Input
              value={name}
              className="text-lg"
              onChange={(e) => setName(e.currentTarget.value)}
            />
          ) : (
            <span className="text-lg">{formatSkillName(skill.name)}</span>
          )}
          <div className="flex items-center gap-2">
            <span className="font-mono">+{skillPoints}</span>
            <DiceRollButton
              className="flex size-8 items-center justify-center cursor-pointer"
              onClick={() => roll20(skillPoints, formatSkillName(skill.name))}
            >
              <i className="fas fa-dice-d20 opacity-70 duration-100 group-active:opacity-100" />
            </DiceRollButton>
          </div>
        </div>
      }
    >
      <div
        onClick={(e) => {
          isEditing && e.stopPropagation();
        }}
      >
        {isDeleting && (
          <DeleteConfirmation
            skillName={skill.name}
            onConfirm={() => {
              const updatedSkills = character.skills.filter(
                (s) => s.name !== skill.name,
              );
              updateCharacter({ ...character, skills: updatedSkills });
            }}
            onCancel={() => setIsDeleting(false)}
          />
        )}
        <FadedSeparator className="my-2" />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="h-8 flex items-center gap-1">
              <span className="w-26">Ranks:</span>
              {isEditing ? (
                <div className="flex items-center gap-1">
                  <NumericInput
                    className="w-[7ch]"
                    value={ranks}
                    onChange={(e) => setRanks(e.currentTarget.value)}
                  />
                  <ValueChange
                    original={skill.ranks}
                    updated={parseInt(ranks) || 0}
                  />
                </div>
              ) : (
                <span className="ml-2">{skill.ranks}</span>
              )}
            </div>
            <div className="h-8 flex items-center gap-1">
              <span className="w-26">Modifiers:</span>
              {isEditing ? (
                <div className="flex items-center gap-1">
                  <NumericInput
                    className="w-[7ch]"
                    value={miscMod}
                    onChange={(e) => setMiscMod(e.currentTarget.value)}
                  />
                  <ValueChange
                    original={skill.miscModifier}
                    updated={parseInt(miscMod) || 0}
                  />
                </div>
              ) : (
                <span className="ml-2">{skill.miscModifier}</span>
              )}
            </div>
            <div className="capitalize h-8 flex items-center gap-1">
              <span className="w-26">{skill.ability}:</span>{" "}
              <span className="ml-2">{skillAbilityMod}</span>
            </div>
            {isEditing && (
              <>
                <label
                  htmlFor={`class-skill-${skill.name}`}
                  className="flex gap-1 items-center"
                >
                  <input
                    type="checkbox"
                    id={`class-skill-${skill.name}`}
                    checked={isClassSkill}
                    onChange={() => setIsClassSkill(!isClassSkill)}
                  />
                  Class Skill
                </label>
                <label
                  htmlFor={`armor-check-${skill.name}`}
                  className="flex gap-1 items-center"
                >
                  <input
                    type="checkbox"
                    id={`armor-check-${skill.name}`}
                    checked={hasArmorCheckPenalty}
                    onChange={() =>
                      setHasArmorCheckPenalty(!hasArmorCheckPenalty)
                    }
                  />
                  Armor Check Penalty
                </label>
              </>
            )}
          </div>
          <div className="self-end">
            {isEditing ? (
              <div className="flex flex-col gap-1">
                <Button
                  className="size-8"
                  onClick={() => {
                    onFinishEditing();
                    setRanks(skill.ranks.toString());
                    setMiscMod(skill.miscModifier.toString());
                  }}
                >
                  <i className="fas fa-times"></i>{" "}
                </Button>
                {!isAddingSkill && (
                  <Button
                    className="size-8"
                    onClick={() => setIsDeleting(true)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                )}
                <Button
                  disabled={!userHasChanges}
                  onClick={() => {
                    onSubmit();
                    onFinishEditing();
                  }}
                >
                  <i className="fas fa-check"></i>
                </Button>
              </div>
            ) : (
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditing(true);
                }}
              >
                <i className="fas fa-feather"></i>
              </Button>
            )}
          </div>
        </div>
      </div>
    </EntityDisclosure>
  );
}

export function Skills() {
  const character = useCharacter();
  const [isAddingSkill, setIsAddingSkill] = useState(false);

  const sortedSkills = [...character.skills].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <section className="mt-12">
      <div className="flex justify-between items-center">
        <Heading>Skills</Heading>
        <Button
          className="size-8 mr-1 bg-transparent hover:bg-fuchsia-900/50"
          onClick={() => setIsAddingSkill(true)}
        >
          <i className="fas fa-plus"></i>
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        {isAddingSkill && (
          <SkillsListItem
            skill={emptySkill}
            setIsAddingSkill={setIsAddingSkill}
          />
        )}
        {sortedSkills.map((s) => (
          <SkillsListItem key={s.name} skill={s} />
        ))}
      </div>
    </section>
  );
}
