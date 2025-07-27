import { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { combine as c } from "../../lib/string";
import {
  characterState,
  damageState,
  allKnownSpells as allKnownSpells_,
} from "../../store/recoilState";
import { useToast } from "../ActionToast/useToast";

const CharacterType = (props: { value: React.ReactNode }) => {
  return <span>{props.value} / </span>;
};
const CharacterClasses = (props: {
  value: { name: React.ReactNode; level: React.ReactNode };
}) => {
  return (
    <li>
      {props.value.name}({props.value.level})
    </li>
  );
};

const TopComponent = () => {
  const character = useRecoilValue(characterState);
  const [toggle, setToggle] = useState(false);
  const [damage, setDamage] = useRecoilState(damageState);
  const [allKnownSpells, setAllKnownSpells] = useRecoilState(allKnownSpells_);
  const toast = useToast();
  function getCareerLevel() {
    return character.class.reduce((s, c) => Number(s + c.level), 0);
  }

  function resetAllSpells() {
    const resetSpells = {
      spells: allKnownSpells.spells.map((spell) => ({
        ...spell,
        numUsed: 0,
        uses: spell.uses < Number.POSITIVE_INFINITY ? 0 : spell.uses,
      })),
      spellLikeAbilities: allKnownSpells.spellLikeAbilities.map((sla) => ({
        ...sla,
        numUsed: 0,
      })),
    };
    setAllKnownSpells(resetSpells);
  }

  function healDamageOnRest() {
    setDamage(Math.max(0, damage - getCareerLevel()));
  }

  function fullRest() {
    resetAllSpells();
    healDamageOnRest();
    setToggle(false);
    toast("Full rest completed.");
  }
  const type = character.type.map((t) => <CharacterType key={t} value={t} />);
  const classList = character.class.map((c) => (
    <CharacterClasses key={c.name} value={c} />
  ));

  return (
    <div>
      <button
        className={c(
          "flex h-10 w-full items-center justify-between border border-white bg-white/20 px-4",
          toggle ? "text-white" : "text-stone-400",
        )}
        onClick={() => setToggle(!toggle)}
      >
        <h1 className="text-xl">
          {character.name} ({getCareerLevel()})
        </h1>
        <em>
          <i className="fas fa-angle-double-down"></i>
        </em>
      </button>

      {toggle && (
        <div className="absolute right-0 z-10 w-fit border border-t-0 border-white bg-stone-500/90 p-4">
          <div>
            type: <br /> {type}
          </div>
          <ul className="list-none">
            class: <br /> {classList}
          </ul>
          <button
            className="h-8 w-full rounded bg-red-400"
            onClick={() => fullRest()}
          >
            Full Rest
          </button>
        </div>
      )}
    </div>
  );
};

export default TopComponent;
