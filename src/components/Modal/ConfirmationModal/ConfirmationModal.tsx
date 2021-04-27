import { useRecoilValue } from "recoil";
import { selectionState } from "../../../recoilState";
import { displayCompendiumInfo } from "../../../utilities/utilities";

import CharacterSpell from "./CharacterSpell/CharacterSpell";

const ConfirmationModal = ({ type }: { type: string }) => {
  const selection = useRecoilValue(selectionState);

  return (
    <>
      {type === "CharacterSpell" && <CharacterSpell selection={selection} />}
      <hr className="blackHR" />
      {displayCompendiumInfo(selection)}
    </>
  );
};

export default ConfirmationModal;
