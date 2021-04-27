import { useState } from "react";
import "./EditSpellForm.css";

const emptySpell = {
  name: "",
  school: "",
  subSchool: "",
  descriptor: "",
  level: "",
  components: "",
  castingTime: "",
  range: "",
  target: "",
  effect: "",
  area: "",
  duration: "",
  savingThrow: "",
  spellResistance: "",
  description: "",
};
const EditSpellForm = ({ spell = emptySpell, handleSubmit }) => {
  const [name, setName] = useState(spell.name);
  const [school, setSchool] = useState(spell.school);
  const [subSchool, setSubschool] = useState(spell.subSchool);
  const [descriptor, setDescriptor] = useState(spell.descriptor);
  const [level, setLevel] = useState(spell.level);
  const [components, setComponents] = useState(spell.components);
  const [castingTime, setCastingTime] = useState(spell.castingTime);
  const [range, setRange] = useState(spell.range);
  const [target, setTarget] = useState(spell.target);
  const [effect, setEffect] = useState(spell.effect);
  const [area, setArea] = useState(spell.area);
  const [duration, setDuration] = useState(spell.duration);
  const [savingThrow, setSavingThrow] = useState(spell.savingThrow);
  const [spellResistance, setSpellResistance] = useState(spell.spellResistance);
  const [description, setDescription] = useState(spell.description);
  function handleChange(e) {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "school":
        setSchool(e.target.value);
        break;
      case "subSchool":
        setSubschool(e.target.value);
        break;
      case "descriptor":
        setDescriptor(e.target.value);
        break;
      case "level":
        setLevel(e.target.value);
        break;
      case "components":
        setComponents(e.target.value);
        break;
      case "castingTime":
        setCastingTime(e.target.value);
        break;
      case "range":
        setRange(e.target.value);
        break;
      case "target":
        setTarget(e.target.value);
        break;
      case "effect":
        setEffect(e.target.value);
        break;
      case "area":
        setArea(e.target.value);
        break;
      case "duration":
        setDuration(e.target.value);
        break;
      case "savingThrow":
        setSavingThrow(e.target.value);
        break;
      case "spellResistance":
        setSpellResistance(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="formItemsContainer addSpellForm">
          <label>
            <span className="inputKey">Name: </span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="inputKey">School: </span>
            <input
              type="text"
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
            <span className="inputKey">Level: </span>
            <input
              type="text"
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
            <span className="inputKey">Description: </span>
            <textarea
              name="description"
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

export default EditSpellForm;
