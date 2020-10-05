import React, { useContext } from "react";
import { useRecoilState } from "recoil";

import { modalTypeState } from "../../recoilState.js";
import { Character } from "../dnd.js";

const KnownPassiveAbilities = (props) => {
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
const PassiveAbilities = (props) => {
  const character = useContext(Character);
  function displayAbilities() {
    const abilities = Object.values(
      character.characterAbilities.passive
    ).map((s) => <KnownPassiveAbilities key={s} value={s} />);
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

export default PassiveAbilities;
