import { useRecoilValue, useSetRecoilState } from "recoil";

import { characterState, diceRollState } from "../../../recoilState";
import { roll20, getAbilityMod } from "../../../utilities/utilities";
import "./AbilityScores.css";

const AbilityScores = () => {
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
  function renderAbilityScore(ability: string, score: number | null) {
    const abilityPath = character.abilities.score[ability.toLowerCase()];
    return abilityPath === null ? "--" : score;
  }
  function abilityScoreCodeBlock(
    abilityString: string,
    abilityScore: number | null,
    abilityMod: number
  ) {
    return (
      <div className='abilityScoresItemsContainer'>
        <span className="abilityNamesAndButton">
        {/*button appears on same line*/}
        <button
          className="rollAbilityButton defaultButton"
          onClick={() => setRollResult(roll20(abilityMod, abilityString))}
        >
          <i className="fas fa-dice-d20"></i>
        </button>
        {abilityString}: 
        </span>
        <span className='abilityScoresAndModifier'>{renderAbilityScore(abilityString, abilityScore)} |{" "}
        {renderAbilityScore(abilityString, abilityMod)}
      </span>
      </div>
    );
  }
  return (
    <>
      <h2 className="abilityScoresHeader">Abilities</h2>
      <div className="abilityScoresWrapper">
        {abilityScoreCodeBlock("Strength", str, strMod)}
        {abilityScoreCodeBlock("Dexterity", dex, dexMod)}
        {abilityScoreCodeBlock("Constitution", con, conMod)}
        {abilityScoreCodeBlock("Intelligence", int, intMod)}
        {abilityScoreCodeBlock("Wisdom", wis, wisMod)}
        {abilityScoreCodeBlock("Charisma", cha, chaMod)}
      </div>
    </>
  );
};
export default AbilityScores;
