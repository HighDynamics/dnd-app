import { useSetRecoilState, useRecoilValue } from "recoil";

import { modalTypeState, characterState } from "../../recoilState.js";

const ItemsHeld = (props) => {
  const setModalType = useSetRecoilState(modalTypeState);
  const item = props.value;
  const formattedItem = item.replace(/_/g, " ");
  const buttonAndSpellClass = "spellButtons " + item;
  return (
    <button
      className={buttonAndSpellClass}
      onClick={() => setModalType("Item")}
    >
      {formattedItem}
    </button>
  );
};
const Items = (props) => {
  const character = useRecoilValue(characterState);
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
