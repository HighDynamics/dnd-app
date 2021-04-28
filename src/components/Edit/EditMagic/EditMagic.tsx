import { useState } from "react";
import { useSetRecoilState } from "recoil";
import useSWR from "swr";

import { confirmationTypeState, mainContentState } from "../../../recoilState";
import AddSpellToCharacter from "./AddSpellToCharacter/AddSpellToCharacter";
import AddSpellToCompendium from "./AddSpellToCompendium/AddSpellToCompendium";

const EditMagic = () => {
  const setMainContent = useSetRecoilState(mainContentState);
  const [toggleAddNewSpell, setToggleAddNewSpell] = useState(false);
  const [toggleAddCompendiumSpell, setToggleAddCompendiumSpell] = useState(
    false
  );
  const setConfirmationType = useSetRecoilState(confirmationTypeState);
  const { data: spellsResponse } = useSWR<IServer.GetSpells.Response>(
    "/api/spells"
  );

  //TODO: include user's added objects in future
  const compendiumSRDObjects = spellsResponse?.spells.filter((object) =>
    /^srd/.test(object.id)
  );

  const allCompendiumUserIds = spellsResponse?.spells
    .filter((object) => /^\d+/.test(object.id))
    .map((object) => object.id);

  const renderConfirmation = (confirmationType: ConfirmationType) => {
    setConfirmationType(confirmationType);
    setTimeout(() => setConfirmationType("off"), 3000);
  };

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
        <AddSpellToCompendium
          allCompendiumUserIds={allCompendiumUserIds}
          setToggleAddNewSpell={setToggleAddNewSpell}
          renderConfirmation={renderConfirmation}
        />
      )}
      {toggleAddCompendiumSpell && (
        <AddSpellToCharacter
          compendiumSRDObjects={compendiumSRDObjects}
          renderConfirmation={renderConfirmation}
        />
      )}
    </>
  );
};

export default EditMagic;
