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

  const getRequiredInfoFromUser: React.FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();

    const selected = compendiumSRDObjects.find(
      (object) => object.name === input
    );

    if (selected !== undefined) {
      setSelection(selected);
      setModalType("ConfirmationCharacterSpell");
    } else {
      alert("Can't Find Compendium Item");
    }
  };

  const getCompendiumOptions = () =>
    compendiumSRDObjects.map((object) => (
      <option key={object.id} value={object.name} />
    ));

  const handleChange: React.FormEventHandler<HTMLInputElement> = (e) => {
    setInput(e.currentTarget.value);
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
