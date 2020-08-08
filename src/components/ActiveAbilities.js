import React, { useContext } from "react";
import { ToggleInfo, Character } from "./dnd.js";

const KnownActiveAbilities = props => {
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
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
const ActiveAbilities = props => {
  const character = useContext(Character);
  function displayAbilities() {
    const abilities = Object.values(
      character.characterAbilities.active
    ).map(s => <KnownActiveAbilities key={s} value={s} />);
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
