import React, { useState, useContext } from 'react';
import { ToggleInfo, Character } from './dnd.js'

const KnownSLAs = (props) => {
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
  const spell = props.value
  const formattedSpell = spell.replace(/_/g, ' ')
  const buttonAndSpellClass = 'spellButtons ' + spell
  return(
    <button className={buttonAndSpellClass} onClick={() => setToggleInfo(!toggleInfo)}>{formattedSpell}</button>
  )
}
const SLAs = (props) => {
  const character = useContext(Character)
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
  //cantrips or orisons? or both?
  function casterType() {
    if (character.magic.type.arcane && character.magic.type.divine){
      return 'Cantrips & Orisons'
    } else if (character.magic.type.divine){
      return 'Orisons'
    } else if (character.magic.type.arcane){
      return 'Cantrips'
    }
  }
  function displaySLAs(level){
    const slas = Object.values(character.magic.slas[level]).map(
      (s) => <KnownSLAs key={s} value={s} />
    );
    return slas;
  }
  //condense SLA code block into function
  function spellCodeBlock(level, levelNum, levelRoman){
    return (
      <div className='spellItems'>
        <div className='spellLevelWrapper'>
          <h2 className='spellLevelHeader'>Level {levelRoman}</h2>
        </div>
        <p className='spellList'>{displaySLAs(level)}</p>
        <hr/>
      </div>
    )
  }
  return (
    <div>
      <div className='spellContainer'>
        <div className='spellItems'>
          <div className='spellLevelWrapper'>
            <h2 className='spellLevelHeader'>{casterType()}</h2>
          </div>
          <p className='spellList'>{displaySLAs('zero')}</p>
          <hr/>
        </div>
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
  );
}

export default SLAs
