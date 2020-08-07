import React, { useState, useContext } from 'react';

import Items from './Items.js'
import SLAs from './SLAs.js'
import ActiveAbilities from './ActiveAbilities.js'
import SpellInfo from './SpellInfo.js'
import PrepSpells from './PrepSpells.js'
import Spells from './Spells.js'
import PassiveAbilities from './PassiveAbilities.js'
import AbilityScores from './AbilityScores.js'
import Skills from './Skills.js'

import { ToggleInfo, GetSetDisplayTwo, Selection } from './dnd.js'

const MainDisplay = (props) => {
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
  const [displayTwo, setDisplayTwo] = useContext(GetSetDisplayTwo);
  const [selection, setSelection] = useState('')
  function screenSwitch(display){
    switch(display) {
      case 'Skills':
        return <Skills />
      case 'Scores':
        return <AbilityScores />
      case 'Passive':
        return <PassiveAbilities />
      case 'Spells':
        return <Spells />
      case 'Abilities':
        return <ActiveAbilities />
      case 'SLAs':
        return <SLAs />
      case 'Prep':
        return <PrepSpells />
      case 'Items':
        return <Items />
      default:
        return <Skills />
    }
  }
  function infoSheet(toggleInfo){
    switch(toggleInfo){
      case 'Spell':
        return <SpellInfo />
      case 'Off':
        return null
      default:
        return null
    }
  }
    return(
      <div>
        <Selection.Provider value={[selection, setSelection]}>
          <div id='infoSheet'>{infoSheet(toggleInfo)}</div>
          <div id='mainContent'>{screenSwitch(displayTwo)}</div>
        </Selection.Provider>
      </div>
    );

}

export default MainDisplay
