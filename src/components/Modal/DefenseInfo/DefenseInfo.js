import React from "react";
import { useRecoilValue } from "recoil";

import { characterState } from "../../../recoilState";
import { camelCaseToTitleCase } from "../../../utilities/utilities";

const EnergyResistanceItem = (props) => {
  const item = props.value;
  const defense = props.defense;
  function getResistance(type) {
    if (defense.energyResistance[type] === null) {
      return "Immune";
    }
    return defense.energyResistance[type];
  }
  return (
    <li className="energyResistanceItem">
      {camelCaseToTitleCase(item[0])}: {getResistance(item[0])}
    </li>
  );
};
const DefenseInfo = (props) => {
  const character = useRecoilValue(characterState);
  const defense = character.defense;
  const energyResistanceItems = Object.entries(
    defense.energyResistance
  ).map((item, i) => (
    <EnergyResistanceItem key={i} value={item} defense={defense} />
  ));
  return (
    <>
      <h2 className="HPACHeading">Defense</h2>
      <div>
        <ul>
          <li>
            Damage Reduction: {defense.damageReduction.amount} /
            {defense.damageReduction.weakness}
          </li>
          <li>Spell Resistance: {defense.spellResistance}</li>
          <p className="underline">Energy Resistance</p>
          {energyResistanceItems}
        </ul>
      </div>
    </>
  );
};
export default DefenseInfo;
