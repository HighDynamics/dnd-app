import React, { useContext } from "react";
import { useRecoilState } from "recoil";

import { toggleInfoState } from "../../recoilState.js";
import { Character } from "../dnd.js";

const KnownPassiveAbilities = (props) => {
  const [toggleInfo, setToggleInfo] = useRecoilState(toggleInfoState);
  const ability = props.value;
  const formattedAbility = ability.replace(/_/g, " ");
  const buttonAndSpellClass = "spellButtons " + ability;
  return (
    <button
      className={buttonAndSpellClass}
      onClick={() => setToggleInfo(!toggleInfo)}
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
