import { useState } from "react";

import { combine as c } from "../lib";
import { useCharacter } from "../store/recoilState";
import { useUpdateCharacter } from "../store/server";
import { useToast } from "./ActionToast/useToast";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { NumericInput } from "./Input/NumericInput";

function getTextColor(current: number, expected: number) {
  return current > expected
    ? "text-emerald-400"
    : current < expected
      ? "text-red-400"
      : "";
}

export const HitPointInfo = () => {
  const character = useCharacter();
  const toast = useToast();
  const { total, temporary, damage } = character.hitPoints;
  const updateCharacter = useUpdateCharacter();
  const [value, setValue] = useState("");

  const currentHP = total + temporary - damage;
  const textColorClass = getTextColor(currentHP, total);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  function handleDamageSubmit(operator: "add" | "subtract") {
    const n = Math.abs(Number(value));
    if (isNaN(n)) {
      toast("Please enter a valid number");
      setValue("");
      return;
    }

    updateCharacter({
      ...character,
      hitPoints: {
        ...character.hitPoints,
        damage: operator === "add" ? damage + n : Math.max(0, damage - n),
      },
    });
    setValue("");
  }

  function handleTempHPSubmit(operator: "add" | "subtract") {
    const n = Math.abs(Number(value));
    if (isNaN(n)) {
      toast("Please enter a valid number");
      setValue("");
      return;
    }

    updateCharacter({
      ...character,
      hitPoints: {
        ...character.hitPoints,
        temporary:
          operator === "add" ? temporary + n : Math.max(0, temporary - n),
      },
    });
    setValue("");
  }
  return (
    <div>
      <Heading>Hit Points</Heading>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-label text-sm!">Current</span>
          <span className={c(textColorClass, "text-2xl tabular-nums")}>
            {currentHP}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-label text-sm!">Damage</span>
          <span
            className={c(
              "text-2xl tabular-nums",
              damage > 0 ? "text-red-400" : "opacity-50",
            )}
          >
            {damage}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-label text-sm!">Temporary</span>
          <span
            className={c(
              "text-2xl tabular-nums",
              temporary > 0 ? "text-emerald-400" : "opacity-50",
            )}
          >
            {temporary}
          </span>
        </div>
      </div>
      <NumericInput
        className="w-full text-3xl text-center py-2 my-4"
        value={value}
        onChange={handleChange}
      />
      <div className="flex gap-2">
        <div className="flex flex-col gap-2 w-full">
          <Button disabled={!value} onClick={() => handleDamageSubmit("add")}>
            Add Damage
          </Button>
          <Button
            disabled={!value}
            onClick={() => handleDamageSubmit("subtract")}
          >
            Remove Damage
          </Button>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Button disabled={!value} onClick={() => handleTempHPSubmit("add")}>
            Add Temporary HP
          </Button>
          <Button
            disabled={!value}
            onClick={() => handleTempHPSubmit("subtract")}
          >
            Remove Temporary HP
          </Button>
        </div>
      </div>
    </div>
  );
};
