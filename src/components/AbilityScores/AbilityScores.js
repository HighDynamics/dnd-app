import React, { useContext } from "react";
import { useSetRecoilState } from "recoil";

import { diceRollState } from "../../recoilState.js";
import { Character, abilityModifier, rollDice } from "../dnd.js";
import "./AbilityScores.css";

function renderAbilityScore(score) {
  return typeof score === "number" ? score : "None";
}

const AbilityScores = (props) => {
  const character = useContext(Character);
  const str = character.abilities.score.strength;
  const dex = character.abilities.score.dexterity;
  const con = character.abilities.score.constitution;
  const int = character.abilities.score.intelligence;
  const wis = character.abilities.score.wisdom;
  const cha = character.abilities.score.charisma;
  const strMod = abilityModifier(character, "strength");
  const dexMod = abilityModifier(character, "dexterity");
  const conMod = abilityModifier(character, "constitution");
  const intMod = abilityModifier(character, "intelligence");
  const wisMod = abilityModifier(character, "wisdom");
  const chaMod = abilityModifier(character, "charisma");

  const setRollResult = useSetRecoilState(diceRollState);
  function abilityScoreCodeBlock(abilityString, abilityScore, abilityMod) {
    return (
      <p className="abilityScores">
        {/*button appears on same line*/}
        <button
          className="rollAbility"
          onClick={() => setRollResult(rollDice(20, abilityMod, abilityString))}
        >
          roll
        </button>
        {abilityString}: {renderAbilityScore(abilityScore)} |{" "}
        {renderAbilityScore(abilityMod)}
      </p>
    );
  }
  return (
    <div>
      <div id="statsContainer">
        <h1 id="abilityScoresHeader">Abilities</h1>
        <div id="abilityScoresWrapper">
          {abilityScoreCodeBlock("STR", str, strMod)}
          {abilityScoreCodeBlock("DEX", dex, dexMod)}
          {abilityScoreCodeBlock("CON", con, conMod)}
          {abilityScoreCodeBlock("INT", int, intMod)}
          {abilityScoreCodeBlock("WIS", wis, wisMod)}
          {abilityScoreCodeBlock("CHA", cha, chaMod)}
        </div>
      </div>
    </div>
  );
};

export default AbilityScores;
