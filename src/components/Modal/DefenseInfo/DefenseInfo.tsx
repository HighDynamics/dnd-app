import { useRecoilValue, useSetRecoilState } from "recoil";

import { characterState, diceRollState } from "../../../recoilState";
import {
  camelCaseToTitleCase,
  roll20,
  getAbilityMod,
} from "../../../utilities/utilities";
import "./DefenseInfo.css";

const EnergyResistanceItem = (props: {
  defense: ICharacter["defense"];
  value: ObjEntries<typeof defense.energyResistance>;
}) => {
  const item = props.value;
  const defense = props.defense;
  function getResistance(type: typeof item[0]) {
    if (defense.energyResistance[type] === null) {
      return "Immune";
    }
    return defense.energyResistance[type];
  }
  return (
    <li className="energyResistanceItem">
      | {camelCaseToTitleCase(item[0])}: {getResistance(item[0])} |
    </li>
  );
};
const WillSaveItem = (props: { value: [string, number] }) => {
  const item = props.value;
  return (
    <li className="willSaveItem">
      | {camelCaseToTitleCase(item[0])}: {item[1]} |
    </li>
  );
};

const ReflexSaveItem = (props: { value: [string, number] }) => {
  const item = props.value;
  return (
    <li className="reflexSaveItem">
      | {camelCaseToTitleCase(item[0])}: {item[1]} |
    </li>
  );
};

const FortitudeSaveItem = (props: { value: [string, number] }) => {
  const item = props.value;
  return (
    <li className="fortitudeSaveItem">
      | {camelCaseToTitleCase(item[0])}: {item[1]} |
    </li>
  );
};

const DefenseInfo = () => {
  const character = useRecoilValue(characterState);
  const setRoll = useSetRecoilState(diceRollState);
  const defense = character.defense;
  const getMod = getAbilityMod(character);
  const conMod = getMod("constitution");
  const dexMod = getMod("dexterity");
  const wisMod = getMod("wisdom");
  const fortSave = getSavesTotalValue("fortitude");
  const refSave = getSavesTotalValue("reflex");
  const willSave = getSavesTotalValue("will");
  const energyResistanceItems = Object.entries(
    defense.energyResistance
  ).map((item, i) => (
    <EnergyResistanceItem
      key={i}
      value={item as ObjEntries<typeof defense.energyResistance>}
      defense={defense}
    />
  ));
  function getSavesTotalValue(type: keyof ICharacter["defense"]["saves"]) {
    switch (type) {
      case "fortitude":
        return (
          Object.values(defense.saves.fortitude).reduce((x, y) => x + y) +
          conMod
        );
      case "reflex":
        return (
          Object.values(defense.saves.reflex).reduce((x, y) => x + y) + dexMod
        );
      case "will":
        return (
          Object.values(defense.saves.will).reduce((x, y) => x + y) + wisMod
        );
      default:
        return null;
    }
  }
  function getSavesBreakdown(type: keyof ICharacter["defense"]["saves"]) {
    switch (type) {
      case "fortitude":
        return Object.entries(defense.saves.fortitude).map((item, i) => (
          <FortitudeSaveItem key={i} value={item} />
        ));
      case "reflex":
        return Object.entries(defense.saves.reflex).map((item, i) => (
          <ReflexSaveItem key={i} value={item} />
        ));
      case "will":
        return Object.entries(defense.saves.will).map((item, i) => (
          <WillSaveItem key={i} value={item} />
        ));
      default:
        return null;
    }
  }
  return (
    <>
      <h2 className="defenseHeading">Defense</h2>
      <div>
        <p className="damageReduction">
          <strong>Damage Reduction:</strong> {defense.damageReduction.amount} /
          {defense.damageReduction.weakness}
        </p>
        <p className="spellResistance">
          <strong>Spell Resistance:</strong> {defense.spellResistance}
        </p>
        <div className="savesContainer">
          <p className="savesHeading">Saves</p>
          <div className="fortitudeSaveContainer">
            <button
              className="fortitudeSaveButton defaultButton"
              onClick={() => setRoll(roll20(fortSave, "Fortitude"))}
            >
              Fortitude: {fortSave} <i className="fas fa-dice-d20"></i>
            </button>
            <ul className="savesBreakdownContainer">
              {getSavesBreakdown("fortitude")}
              <li className="saveMod">| Modifier: {conMod} |</li>
            </ul>
          </div>
          <div className="reflexSaveContainer">
            <button
              className="reflexSaveButton defaultButton"
              onClick={() => setRoll(roll20(refSave, "Reflex"))}
            >
              Reflex: {refSave} <i className="fas fa-dice-d20"></i>
            </button>
            <ul className="savesBreakdownContainer">
              {getSavesBreakdown("reflex")}
              <li className="saveMod">| Modifier: {dexMod} |</li>
            </ul>
          </div>
          <div className="willSaveContainer">
            <button
              className="willSaveButton defaultButton"
              onClick={() => setRoll(roll20(willSave, "Will"))}
            >
              Will: {willSave} <i className="fas fa-dice-d20"></i>
            </button>
            <ul className="savesBreakdownContainer">
              {getSavesBreakdown("will")}
              <li className="saveMod">| Modifier: {wisMod} |</li>
            </ul>
          </div>
        </div>
        <p className="energyResistanceHeading">Energy Resistance</p>
        <ul className="energyResistanceItemsContainer">
          {energyResistanceItems}
        </ul>
      </div>
    </>
  );
};
export default DefenseInfo;
