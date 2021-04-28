import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { modalTypeState, selectionState } from "../../../../recoilState";

const AddSpellToCharacter = ({
  compendiumSRDObjects,
}: {
  compendiumSRDObjects: ISpell[];
}) => {
  const setModalType = useSetRecoilState(modalTypeState);
  const setSelection = useSetRecoilState(selectionState);
  const [input, setInput] = useState("");

  const getRequiredInfoFromUser = (e) => {
    e.preventDefault();
    const selected = compendiumSRDObjects.find((i) => i.id === input);
    if (selected !== undefined) {
      setSelection(selected);
      setModalType("ConfirmationCharacterSpell");
    } else {
      alert("Can't Find Compendium Item");
    }
  };

  const getCompendiumOptions = () => {
    const options = [];
    compendiumSRDObjects.map((object) =>
      options.push(
        <option key={object.id} value={object.id}>
          {object.name}
        </option>
      )
    );
    return options;
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <form onSubmit={getRequiredInfoFromUser}>
        <input
          type="text"
          list="compendiumSpells"
          value={input}
          onChange={handleChange}
        />
        <datalist id="compendiumSpells">{getCompendiumOptions()}</datalist>
        <input type="submit" />
      </form>
    </>
  );
};
export default AddSpellToCharacter;
