import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { modalTypeState, characterState } from "../../recoilState.js";

const KnownActiveAbilities = (props) => {
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const ability = props.value;
  const formattedAbility = ability.replace(/_/g, " ");
  const buttonAndSpellClass = "spellButtons " + ability;
  return (
    <button
      className={buttonAndSpellClass}
      onClick={() => setModalType(!modalType)}
    >
      {formattedAbility}
    </button>
  );
};
const ActiveAbilities = (props) => {
  const character = useRecoilValue(characterState);
  function displayAbilities() {
    const abilities = Object.values(
      character.characterAbilities.active
    ).map((s) => <KnownActiveAbilities key={s} value={s} />);
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

export default ActiveAbilities;
