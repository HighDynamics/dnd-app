import React, { useContext } from 'react'
import { ToggleInfo, Character, PrimaryModifier, GetSetDisplayTwo, totalSpells } from './dnd.js'

const Spellbook = (props) => {
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
  const spell = props.value
  const formattedSpell = spell.replace(/_/g, ' ')
  const buttonAndSpellClass = 'spellButtons ' + spell
  return(
    <button className={buttonAndSpellClass} onClick={() => setToggleInfo(!toggleInfo)}>{formattedSpell}</button>
  )
}
const PrepSpells = (props) => {
  const character = useContext(Character)
  const primaryModifier = useContext(PrimaryModifier)
  const [displayTwo, setDisplayTwo] = useContext(GetSetDisplayTwo)
  function casterType() {
    if (character.magic.type.arcane && character.magic.type.divine){
      return 'Cantrips & Orisons'
    } else if (character.magic.type.divine){
      return 'Orisons'
    } else if (character.magic.type.arcane){
      return 'Cantrips'
    }
  }
  function displaySpells(level){
    const spells = Object.values(character.magic.spellbook[level]).map(
      (s) => <Spellbook key={s} value={s} />
    );
    return spells;
  }
  function spellCodeBlock(level, levelNum, levelRoman){
    return (
      <div className='spellItems'>
        <div className='spellLevelWrapper'>
          <h2 className='spellLevelHeader'>Level {levelRoman}</h2>
          <em className='remainingSpells'>{totalSpells(character, primaryModifier, level, levelNum)} remaining today</em>
        </div>
        <p className='spellList'>{displaySpells(level)}</p>
        <hr/>
      </div>
    )
  }
  return (
    <>
      <div>
        <button id='returnToSpells' onClick={() => setDisplayTwo('Spells')}>
          <i className="fas fa-arrow-left"></i>
        </button>
      <div className='spellContainer'>
        <div className='spellItems'>
          <div className='spellLevelWrapper'>
            <h2 id="levelZeroHeaderPrep" className='spellLevelHeader'>{casterType()}</h2>
            <em className='remainingSpells'>{totalSpells(character, primaryModifier, 'zero', 0)} remaining today</em>
          </div>
          <p className='spellList'>{displaySpells('zero')}</p>
          <hr/>
        </div> {/*0*/}
        {spellCodeBlock('one', 1, 'I')}
        {spellCodeBlock('two', 2, 'II')}
        {spellCodeBlock('three', 3, 'III')}
        {spellCodeBlock('four', 4, 'IV')}
        {spellCodeBlock('five', 5, 'V')}
        {spellCodeBlock('six', 6, 'VI')}
        {spellCodeBlock('seven', 7, 'VII')}
        {spellCodeBlock('eight', 8, 'VIII')}
        {spellCodeBlock('nine', 9, 'IX')}
      </div>
    </div>
    </>
  )
}

export default PrepSpells
