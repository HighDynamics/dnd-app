import { useState } from "react";
import { useSetRecoilState } from "recoil";
import useSWR from "swr";

import { mainContentState } from "../../../store/recoilState";
import AddSpellToCharacter from "./AddSpellToCharacter/AddSpellToCharacter";
import AddSpellToCompendium from "./AddSpellToCompendium/AddSpellToCompendium";

const EditMagic = () => {
  const setMainContent = useSetRecoilState(mainContentState);
  const [toggleAddNewSpell, setToggleAddNewSpell] = useState(false);
  const [toggleAddCompendiumSpell, setToggleAddCompendiumSpell] =
    useState(false);
  const { data: spellsResponse } =
    useSWR<IServer.GetSpells.Response>("/api/spells");

  //TODO: include user's added objects in future
  const compendiumSRDObjects = spellsResponse?.spells.filter(
    (object) => object.isSrd,
  );

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
      {toggleAddNewSpell && (
        <AddSpellToCompendium setToggleAddNewSpell={setToggleAddNewSpell} />
      )}
      {toggleAddCompendiumSpell && (
        <AddSpellToCharacter compendiumSRDObjects={compendiumSRDObjects} />
      )}
    </>
  );
};

export default EditMagic;
