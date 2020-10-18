import React from "react";
import { useRecoilValue } from "recoil";

import { characterState } from "../../../recoilState";
import { camelCaseToTitleCase, getAC } from "../../../utilities/utilities";

const ArmorClassItem = (props) => {
  const item = props.value;
  return (
    <li className="armorClassItem">
      {camelCaseToTitleCase(item[0])}: {item[1]}
    </li>
  );
};
const ArmorClassInfo = (props) => {
  const character = useRecoilValue(characterState);
  const currentAC = getAC(character);
  const armorClassItems = Object.entries(
    character.armorClass
  ).map((item, i) => <ArmorClassItem key={i} value={item} />);
  return (
    <>
      <h2 className="HPACHeading">Armor Class</h2>
      <div>
        <ul>
          <li className="currentAC">Total: {currentAC}</li>
          {armorClassItems}
        </ul>
      </div>
    </>
  );
};
export default ArmorClassInfo;