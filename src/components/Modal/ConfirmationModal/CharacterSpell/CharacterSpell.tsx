import { ReactEventHandler, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  characterState,
  confirmationTypeState,
  ConfirmationType,
  modalTypeState,
} from "../../../../recoilState";
import { persistCharacter, clone } from "../../../../utilities/utilities";

import "./CharacterSpell.css";

const AddSla = ({
  spellName,
  slaLevel,
  setSlaLevel,
  usesPerDay,
  setUsesPerDay,
}: {
  spellName: string;
  slaLevel: number;
  setSlaLevel: ReactEventHandler;
  usesPerDay: number;
  setUsesPerDay: ReactEventHandler;
}) => {
  return (
    <>
      <div className="asHeader">As SLA</div>
      Cast {spellName} at level{" "}
      <input
        type="number"
        className="numberInput twoDigit"
        min="0"
        max="9"
        value={slaLevel}
        onChange={(e) => setSlaLevel(e.currentTarget.value)}
      />
      <br />
      Uses per day{" "}
      <input
        type="number"
        className="numberInput twoDigit"
        value={usesPerDay}
        onChange={(e) => setUsesPerDay(e.currentTarget.value)}
      />
    </>
  );
};

const AddInnateOrSpellbook = ({
  spellName,
  spellLevel,
  setSpellLevel,
}: {
  spellName: string;
  spellLevel: number;
  setSpellLevel: ReactEventHandler;
}) => {
  return (
    <>
      <div className="asHeader">As Spell Known or Spellbook</div>
      Add spell {spellName} at level{" "}
      <input
        type="number"
        className="numberInput twoDigit"
        min="0"
        max="9"
        value={spellLevel}
        onChange={(e) => setSpellLevel(e.currentTarget.value)}
      />
    </>
  );
};

const CharacterSpell = ({ selection }: { selection: ISpell }) => {
  const character = useRecoilValue(characterState);
  const setModalType = useSetRecoilState(modalTypeState);
  const setConfirmationType = useSetRecoilState(confirmationTypeState);
  const [innate, setInnate] = useState(false);
  const [spellbook, setSpellbook] = useState(false);
  const [sla, setSla] = useState(false);
  const [spellLevel, setSpellLevel] = useState(0);
  const [slaLevel, setSlaLevel] = useState(0);
  const [usesPerDay, setUsesPerDay] = useState(1);

  const isSelected = (buttonClicked: boolean): string => {
    return buttonClicked
      ? "defaultButton defaultButtonSelected"
      : "defaultButton";
  };

  const renderConfirmation = (confirmationType: ConfirmationType) => {
    setConfirmationType(confirmationType);
    setTimeout(() => setConfirmationType("off"), 3000);
  };

  const confirmAddSpell = () => {
    const updatedCharacter = clone(character);
    if (innate) {
      updatedCharacter.magic.spellRefs.push({
        id: selection.id,
        level: Number(spellLevel),
        innate: true,
      });
    }
    if (spellbook) {
      updatedCharacter.magic.spellRefs.push({
        id: selection.id,
        level: Number(spellLevel),
        innate: false,
      });
    }
    if (sla) {
      updatedCharacter.magic.slaRefs.push({
        id: selection.id,
        level: Number(slaLevel),
        uses: Number(usesPerDay),
        frequency: "day",
      });
    }
    persistCharacter(updatedCharacter);
    setModalType("Off");
    renderConfirmation("addSpell");
  };

  return (
    <>
      <div className="addSpellHeader">Add '{selection.name}' in </div>
      <div className="setSpellAsList">
        <button
          className={isSelected(innate)}
          onClick={() => setInnate(!innate)}
        >
          Spells Known
        </button>
        <button
          className={isSelected(spellbook)}
          onClick={() => setSpellbook(!spellbook)}
        >
          Spellbook
        </button>
        <button className={isSelected(sla)} onClick={() => setSla(!sla)}>
          SLAs Known
        </button>
      </div>
      <div className="detailsForConfirmation">
        {(innate || spellbook || sla) && <hr className="blackHR" />}
        {(innate || spellbook) && (
          <>
            <AddInnateOrSpellbook
              spellName={selection.name}
              spellLevel={spellLevel}
              setSpellLevel={setSpellLevel}
            />
            <br />
          </>
        )}
        {sla && (
          <>
            <AddSla
              spellName={selection.name}
              slaLevel={slaLevel}
              setSlaLevel={setSlaLevel}
              usesPerDay={usesPerDay}
              setUsesPerDay={setUsesPerDay}
            />
            <br />
          </>
        )}
        {(innate || spellbook || sla) && (
          <div className="addSpellButtonContainer">
            <button
              className="defaultButton addSpellButton"
              onClick={confirmAddSpell}
            >
              Add Spell
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default CharacterSpell;
