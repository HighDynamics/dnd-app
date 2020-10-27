import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { characterState, diceRollState } from "../../../recoilState";
import { roll20, getAbilityMod } from "../../../utilities/utilities";
import "./AbilityScores.css";

const AbilityScores = (props) => {
  const character = useRecoilValue(characterState);
  const setRollResult = useSetRecoilState(diceRollState);
  const abilityScore = character.abilities.score;
  const modifier = getAbilityMod(character);
  const str = abilityScore.strength;
  const dex = abilityScore.dexterity;
  const con = abilityScore.constitution;
  const int = abilityScore.intelligence;
  const wis = abilityScore.wisdom;
  const cha = abilityScore.charisma;
  const strMod = modifier("strength");
  const dexMod = modifier("dexterity");
  const conMod = modifier("constitution");
  const intMod = modifier("intelligence");
  const wisMod = modifier("wisdom");
  const chaMod = modifier("charisma");
  function renderAbilityScore(score) {
    return typeof score === "number" ? score : "--";
  }
  function abilityScoreCodeBlock(abilityString, abilityScore, abilityMod) {
    return (
      <p className="abilityScores">
        {/*button appears on same line*/}
        <button
          className="rollAbility"
          onClick={() => setRollResult(roll20(abilityMod, abilityString))}
        >
          <i className="fas fa-dice-d20"></i>
        </button>
        {abilityString}: {renderAbilityScore(abilityScore)} |{" "}
        {renderAbilityScore(abilityMod)}
      </p>
    );
  }
  return (
    <>
      <h2 className="abilityScoresHeader">Abilities</h2>
      <div id="abilityScoresWrapper">
        {abilityScoreCodeBlock("STR", str, strMod)}
        {abilityScoreCodeBlock("DEX", dex, dexMod)}
        {abilityScoreCodeBlock("CON", con, conMod)}
        {abilityScoreCodeBlock("INT", int, intMod)}
        {abilityScoreCodeBlock("WIS", wis, wisMod)}
        {abilityScoreCodeBlock("CHA", cha, chaMod)}
      </div>
    </>
  );
};
export default AbilityScores;
