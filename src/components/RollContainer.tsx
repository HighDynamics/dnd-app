import { combine as c } from "../lib";
import { useCharacter, useDiceRollResult } from "../store/recoilState";

const containerClassName =
  "bg-black text-center min-h-[100px] py-2 border border-stone-700 rounded-sm";

export function RollContainer() {
  const character = useCharacter();
  const roll = useDiceRollResult();

  if (!roll) {
    return (
      <div className={c(containerClassName, "flex flex-col justify-center")}>
        <span>Good Luck,</span>
        <span className="text-xl">{character.name}</span>
      </div>
    );
  }

  const isNat20 = roll.size === 20 && roll.result === 20;
  const isNat1 = roll.size === 20 && roll.result === 1;

  return (
    <div className="bg-black">
      <div
        className={c(
          containerClassName,
          isNat1 && "border-red-400 bg-red-950/20 bg",
          isNat20 && "border-emerald-400 bg-emerald-950/20",
        )}
      >
        <span className="text-label">{roll.use}</span>
        <div className="flex gap-8 items-center justify-center">
          <div className="flex flex-col items-center">
            <span className="text-sm font-sans text-stone-500">
              d{roll.size}
            </span>
            <span
              className={c(
                "text-3xl",
                isNat1 && "text-red-400",
                isNat20 && "text-emerald-400",
              )}
            >
              {roll.result}
            </span>
          </div>
          <div className="text-3xl pt-4">+</div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-sans text-stone-500">Modifier</span>
            <span className="text-3xl">{roll.mod}</span>
          </div>
          <div className="text-3xl pt-4">=</div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-sans text-stone-500">Result</span>
            <span className="text-3xl">{roll.mod + roll.result}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
