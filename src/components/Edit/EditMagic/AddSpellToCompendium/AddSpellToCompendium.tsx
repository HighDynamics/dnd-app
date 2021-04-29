import { useState } from "react";
import { useSetRecoilState } from "recoil";
import {
  confirmationTypeState,
  ConfirmationType,
  selectionState,
} from "../../../../recoilState";
import { addSpellToServer } from "../../../../utilities/utilities";
import "./AddSpellToCompendium.css";

const AddSpellToCompendium = ({
  allCompendiumUserIds,
  setToggleAddNewSpell,
}: {
  allCompendiumUserIds: number[];
  setToggleAddNewSpell: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const setConfirmationType = useSetRecoilState(confirmationTypeState);
  const setSelection = useSetRecoilState(selectionState);
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [subSchool, setSubschool] = useState("");
  const [descriptor, setDescriptor] = useState("");
  const [level, setLevel] = useState("");
  const [components, setComponents] = useState("");
  const [castingTime, setCastingTime] = useState("");
  const [range, setRange] = useState("");
  const [target, setTarget] = useState("");
  const [effect, setEffect] = useState("");
  const [area, setArea] = useState("");
  const [duration, setDuration] = useState("");
  const [savingThrow, setSavingThrow] = useState("");
  const [spellResistance, setSpellResistance] = useState("");
  const [description, setDescription] = useState("");

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "school":
        setSchool(e.currentTarget.value);
        break;
      case "subSchool":
        setSubschool(e.currentTarget.value);
        break;
      case "descriptor":
        setDescriptor(e.currentTarget.value);
        break;
      case "level":
        setLevel(e.currentTarget.value);
        break;
      case "components":
        setComponents(e.currentTarget.value);
        break;
      case "castingTime":
        setCastingTime(e.currentTarget.value);
        break;
      case "range":
        setRange(e.currentTarget.value);
        break;
      case "target":
        setTarget(e.currentTarget.value);
        break;
      case "effect":
        setEffect(e.currentTarget.value);
        break;
      case "area":
        setArea(e.currentTarget.value);
        break;
      case "duration":
        setDuration(e.currentTarget.value);
        break;
      case "savingThrow":
        setSavingThrow(e.currentTarget.value);
        break;
      case "spellResistance":
        setSpellResistance(e.currentTarget.value);
        break;
      case "description":
        setDescription(e.currentTarget.value);
        break;
    }
  }

  const emptyRequiredFieldClass = (state: string | null) => {
    if (state === "") {
      return "emptyWarn";
    } else {
      return "";
    }
  };

  const renderConfirmation = (confirmationType: ConfirmationType) => {
    setConfirmationType(confirmationType);
    setTimeout(() => setConfirmationType("off"), 3000);
  };

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();

    const newSpell: IServer.PostSpell.Request = {
      name,
      school,
      subSchool,
      descriptor,
      level,
      components,
      castingTime,
      range,
      target,
      effect,
      area,
      duration,
      savingThrow,
      spellResistance,
      description,
    };

    Object.entries(newSpell).forEach(([key, value]) => {
      if (value !== "") return;
      delete newSpell[key as keyof typeof newSpell];
    });

    addSpellToServer(newSpell);
    setToggleAddNewSpell(false);
    setSelection(newSpell);
    renderConfirmation("addSpell");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="formItemsContainer addSpellForm">
          <p className="requiredFieldIndicator">** required</p>
          <label>
            <span className="inputKey">Name**: </span>
            <input
              type="text"
              className={emptyRequiredFieldClass(name)}
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="inputKey">School**: </span>
            <input
              type="text"
              className={emptyRequiredFieldClass(school)}
              name="school"
              value={school}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="inputKey">Sub School: </span>
            <input
              type="text"
              name="subSchool"
              value={subSchool}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="inputKey">Descriptor: </span>
            <input
              type="text"
              name="descriptor"
              value={descriptor}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="inputKey">Level**: </span>
            <input
              type="text"
              className={emptyRequiredFieldClass(level)}
              name="level"
              value={level}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="inputKey">Components: </span>
            <input
              type="text"
              name="components"
              value={components}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="inputKey">Casting Time: </span>
            <input
              type="text"
              name="castingTime"
              value={castingTime}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="inputKey">Range: </span>
            <input
              type="text"
              name="range"
              value={range}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="inputKey">Target: </span>
            <input
              type="text"
              name="target"
              value={target}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="inputKey">Effect: </span>
            <input
              type="text"
              name="effect"
              value={effect}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="inputKey">Area: </span>
            <input
              type="text"
              name="area"
              value={area}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="inputKey">Duration: </span>
            <input
              type="text"
              name="duration"
              value={duration}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="inputKey">Saving Throw: </span>
            <input
              type="text"
              name="savingThrow"
              value={savingThrow}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="inputKey">Spell Resistance: </span>
            <input
              type="text"
              name="spellResistance"
              value={spellResistance}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="inputKey">Description**: </span>
            <textarea
              name="description"
              className={emptyRequiredFieldClass(description)}
              value={description}
              onChange={handleChange}
              rows="10"
              cols="30"
            />
          </label>
          <div className="updateCharacter">
            <input
              className="addSpellButton defaultButton"
              type="submit"
              value="Add Spell"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddSpellToCompendium;
