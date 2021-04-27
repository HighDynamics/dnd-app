import { useState } from "react";
import { useSetRecoilState } from "recoil";
import useSWR from "swr";

import { modalTypeState, selectionState } from "../../../../recoilState";

const AddSpell = () => {
  const setModalType = useSetRecoilState(modalTypeState);
  const setSelection = useSetRecoilState(selectionState);
  const [input, setInput] = useState("");
  const { data: spellsResponse } = useSWR<IServer.GetSpells.Response>(
    "/api/spells"
  );

  const compendiumItems = spellsResponse.spells.filter((spell) =>
    /^srd/.test(spell.id)
  );
  const getCompendiumObjectNames = () => {
    const names = [];
    compendiumItems.map((item) =>
      names.push(
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      )
    );
    return names;
  };
  const getRequiredInfoFromUser = (e) => {
    e.preventDefault();
    const selected = compendiumItems.find((i) => i.id === input);
    if (selected !== undefined) {
      setSelection(selected);
      setModalType("ConfirmationCharacterSpell");
    } else {
      alert("Can't Find Compendium Item");
    }
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
        <datalist id="compendiumSpells">{getCompendiumObjectNames()}</datalist>
        <input type="submit" />
      </form>
    </>
  );
};
export default AddSpell;
