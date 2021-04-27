import { useState } from "react";
import { useSetRecoilState } from "recoil";

import { mainContentState } from "../../../recoilState";
import AddSpell from "./AddSpell/AddSpell";
import EditSpellForm from "./EditSpellForm/EditSpellForm";

const EditMagic = () => {
  const setMainContent = useSetRecoilState(mainContentState);
  const [toggleAddNewSpell, setToggleAddNewSpell] = useState(false);
  const [toggleAddCompendiumSpell, setToggleAddCompendiumSpell] = useState(
    false
  );

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <button className="backButton" onClick={() => setMainContent("More")}>
        <i className="fas fa-arrow-left"></i>
      </button>
      <button
        className=""
        onClick={() => setToggleAddCompendiumSpell(!toggleAddCompendiumSpell)}
      >
        Add Spell To Character
      </button>
      <button
        className=""
        onClick={() => setToggleAddNewSpell(!toggleAddNewSpell)}
      >
        Add Spell To Compendium
      </button>
      {toggleAddNewSpell && <EditSpellForm handleSubmit={handleSubmit} />}
      {toggleAddCompendiumSpell && <AddSpell />}
    </>
  );
};

export default EditMagic;
