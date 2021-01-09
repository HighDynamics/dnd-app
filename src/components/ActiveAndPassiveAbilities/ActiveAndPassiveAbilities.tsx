import { useRecoilValue, useSetRecoilState } from "recoil";

import { modalTypeState, characterState } from "../../recoilState";
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

const nameToClassName = (name) => name.replace(/ /g, "_");

const KnownAbility = (props) => {
  const setModalType = useSetRecoilState(modalTypeState);
  const { name, type } = props;
  const buttonAndSpellClass = "spellButtons " + nameToClassName(name);
  return (
    <button
      className={buttonAndSpellClass}
      onClick={() => setModalType("Abilities")}
    >
      {name} {formatType(type)}
    </button>
  );
};

/**
 * @param {object} props
 * @param {"passive"|"active"} props.type
 */
const Abilities = (props) => {
  const character = useRecoilValue(characterState);
  const abilities = character.characterAbilities[props.type].map((a) => (
    <KnownAbility key={a.name} name={a.name} type={a.type} />
  ));
  return (
    <div className="spellContainer">
      <div className="spellItems">
        <p className="spellList">{abilities}</p>
      </div>
    </div>
  );
};

const ActiveAndPassiveAbilities = () => {
  return (
    <>
      <h2 className="abilityHeader">Passive Abilities</h2>
      <Abilities type="passive" />

      <h2 className="abilityHeader">ActiveAbilities</h2>
      <Abilities type="active" />
    </>
  );
};

export default ActiveAndPassiveAbilities;
