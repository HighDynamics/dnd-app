import React, { useContext } from "react";
import { useRecoilState } from "recoil";

import { toggleInfoState } from "../../recoilState.js";
import { Character } from "../dnd.js";

const ItemsHeld = (props) => {
  const [toggleInfo, setToggleInfo] = useRecoilState(toggleInfoState);
  const item = props.value;
  const formattedItem = item.replace(/_/g, " ");
  const buttonAndSpellClass = "spellButtons " + item;
  return (
    <button
      className={buttonAndSpellClass}
      onClick={() => setToggleInfo(!toggleInfo)}
    >
      {formattedItem}
    </button>
  );
};
const Items = (props) => {
  const character = useContext(Character);
  function displayItems() {
    const items = Object.values(character.items).map((s) => (
      <ItemsHeld key={s} value={s} />
    ));
    return items;
  }
  return (
    <div>
      <h1>Items</h1>
      <div className="spellContainer">
        <div className="spellItems">
          <p className="spellList">{displayItems()}</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
