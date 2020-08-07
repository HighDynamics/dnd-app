import React, { useContext } from 'react';
import { GetSetDisplayTwo } from './dnd.js'

const AbilitySelector = (props) => {
  const [displayTwo, setDisplayTwo] = useContext(GetSetDisplayTwo)
  function navButtonCodeBlock(name){
    return(
      <button id={name}
              onClick={() => setDisplayTwo(name)}
              className={(displayTwo === name ? 'navbarItemsOn' : 'navbarItemsOff')}>
          {name}
      </button>
    )
  }
  return(
    <div>
      <ul id='abilitySelector' className='navbarContainer'>
        {navButtonCodeBlock('Spells')}
        {navButtonCodeBlock('Abilities')}
        {navButtonCodeBlock('SLAs')}
      </ul>
    </div>
  )
}
const StatsSelector = (props) => {
  const [displayTwo, setDisplayTwo] = useContext(GetSetDisplayTwo);
  function navButtonCodeBlock(name){
    return(
      <button id={name}
              onClick={() => setDisplayTwo(name)}
              className={(displayTwo === name ? 'navbarItemsOn' : 'navbarItemsOff')}>
          {name}
      </button>
    )
  }
  return(
    <div>
      <ul id='statsSelector' className='navbarContainer'>
        {navButtonCodeBlock('Skills')}
        {navButtonCodeBlock('Scores')}
        {navButtonCodeBlock('Passive')}
      </ul>
    </div>
  )
}
const SecondaryNavbar = (props) => {
  function navSwitch(display){
    switch(display){
      case 'stats':
        return <StatsSelector />
      case 'ability':
        return <AbilitySelector />
      case null:
        return null
      default:
        return <StatsSelector />
    }
  }
  return(
      <>
        <div id='secondaryNavbar'>{navSwitch(props.display)}</div>
      </>
  )
}
const PrimaryNavbar = (props) => {
  const statIcon = <i id='statIcon' className="far fa-chart-bar"></i>;
  const abilityIcon = <i id="spellIcon" className="fas fa-hand-sparkles"></i>;
  const itemIcon = <i id='itemIcon' className="fas fa-scroll"></i>;
  function setBothDisplays(name, secondaryName){
    props.setDisplay(name);
    if(secondaryName !== null){
      props.setDisplayTwo(secondaryName)
    }
  }
  function navButtonCodeBlock(name, icon, secondaryName){
    return(
      <button id={name}
              onClick={() => setBothDisplays(name, secondaryName)}
              className={(props.display == name ? 'navbarItemsOn' : 'navbarItemsOff')}>
                      {icon}
      </button>
    )
  }
  return (
    <div>
      <ul id='primaryNavbar' className='navbarContainer'>
        {navButtonCodeBlock('stats', statIcon, 'Skills')}
        {navButtonCodeBlock('ability', abilityIcon, 'Spells')}
        {navButtonCodeBlock(null, itemIcon, 'Items')}
      </ul>
    </div>
  );
}

export { PrimaryNavbar, SecondaryNavbar }
