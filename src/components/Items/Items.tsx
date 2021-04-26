import { useSetRecoilState } from "recoil";

import { modalTypeState, selectionState } from "../../recoilState";
import itemCompendium from "../../server/items";

import "./Items.css";

const ItemsHeld = ({ item }: { item: IItem }) => {
  const setSelection = useSetRecoilState(selectionState);
  const setModalType = useSetRecoilState(modalTypeState);
  const formattedItem = item.name.replace(/_/g, " ");
  const buttonAndSpellClass = "spellButtons " + formattedItem;
  function displayInfo(item: IItem) {
    setModalType("Item");
    setSelection(item);
  }
  return (
    <button className={buttonAndSpellClass} onClick={() => displayInfo(item)}>
      {formattedItem}
    </button>
  );
};
const Items = () => {
  function displayItems() {
    const items = itemCompendium.map((i) => <ItemsHeld key={i.id} item={i} />);
    return items;
  }
  return (
    <div>
      <h1 className="itemsHeader">Items</h1>
      <div className="itemsContainer">
        <div className="spellItems">
          <p className="spellList">{displayItems()}</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
