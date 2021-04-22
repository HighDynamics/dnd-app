import { useRecoilValue } from "recoil";
import { selectionState } from "../../../recoilState";
import { displayCompendiumInfo } from "../../../utilities/utilities";

const ItemInfo = () => {
  const item = useRecoilValue(selectionState) as IItem;
  return (
    <>
      <div>{displayCompendiumInfo(item)}</div>
    </>
  );
};
export default ItemInfo;
