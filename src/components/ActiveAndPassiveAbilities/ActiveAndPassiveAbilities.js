import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { modalTypeState, characterState } from "../../recoilState.js";
import "./ActiveAndPassiveAbilities.css";

function formatType(type) {
  switch (type) {
    case "supernatural":
      return "(Su)";
    case "extraordinary":
      return "(Ex)";
    default:
      return null;
  }
}

const KnownActiveAbilities = (props) => {
  const setModalType = useSetRecoilState(modalTypeState);
  const { ability, type } = props;
  const formattedAbility = ability.replace(/_/g, " ");
  const buttonAndSpellClass = "spellButtons " + ability;
  return (
    <button
      className={buttonAndSpellClass}
      onClick={() => setModalType("Abilities")}
    >
      {formattedAbility}
      {formatType(type)}
    </button>
  );
};
const ActiveAbilities = (props) => {
  const character = useRecoilValue(characterState);
  function displayAbilities() {
    const abilities = character.characterAbilities.active.map((a) => (
      <KnownActiveAbilities key={a.name} ability={a.name} type={a.type} />
    ));

    return abilities;
  }
  return (
    <div className="spellContainer">
      <div className="spellItems">
        <p className="spellList">{displayAbilities()}</p>
      </div>
    </div>
  );
};
const KnownPassiveAbilities = (props) => {
  const setModalType = useSetRecoilState(modalTypeState);
  const { ability, type } = props;
  const formattedAbility = ability.replace(/_/g, " ");
  const buttonAndSpellClass = "spellButtons " + ability;
  return (
    <button
      className={buttonAndSpellClass}
      onClick={() => setModalType("Abilities")}
    >
      {formattedAbility}
      {formatType(type)}
    </button>
  );
};
const PassiveAbilities = (props) => {
  const character = useRecoilValue(characterState);
  function displayAbilities() {
    const abilities = Object.values(
      character.characterAbilities.passive
    ).map((a) => (
      <KnownPassiveAbilities key={a.name} ability={a.name} type={a.type} />
    ));
    return abilities;
  }
  return (
    <div className="spellContainer">
      <div className="spellItems">
        <p className="spellList">{displayAbilities()}</p>
      </div>
    </div>
  );
};
const ActiveAndPassiveAbilities = (props) => {
  return (
    <>
      <h2 className="abilityHeader">Passive Abilities</h2>
      <PassiveAbilities />
      <h2 className="abilityHeader">ActiveAbilities</h2>
      <ActiveAbilities />
    </>
  );
};
export default ActiveAndPassiveAbilities;
