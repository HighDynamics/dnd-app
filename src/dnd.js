import React from 'react';
import './dnd.css';
import {characters} from './characters'
const { useState, useContext, useEffect } = React;

const character = characters[0];
document.title = character.name;


function rollDice(size, mod, use){
  const dice = Math.floor((Math.random() * size) +1)
  function edgeRollClassAssignment(dice){
    if(dice === 1){
      return 'natOne'
    }else if(dice === 20){
      return 'natTwenty'
    }else{
      return null
    }
  }
  const result =
  <span>
    <span id='rollUse'>{use}</span>
    <div id='rollTopLine'>
      <span id='rollTotal' className={edgeRollClassAssignment(dice)}>{dice}</span> <span id='modTotal'> + {mod} =</span>
    </div>
    <p id='rollModTotal'>{dice + mod}</p>
  </span>
  return result
}
const TossDice = React.createContext(null)
const ReadDice = React.createContext(null)
const GetSetDisplay = React.createContext(null)
const GetSetDisplayTwo = React.createContext(null)
const ToggleInfo = React.createContext(null)
const Selection = React.createContext(null)
/******************************Character Info****************************/
const str = character.abilities.score.strength
const dex = character.abilities.score.dexterity
const con = character.abilities.score.constitution
const int = character.abilities.score.intelligence
const wis = character.abilities.score.wisdom
const cha = character.abilities.score.charisma
function abilityModifier(ability) {
  if(character.abilities.score[ability] === '--'){
    return '--'
  }
  return Math.floor((character.abilities.score[ability] - 10) / 2)
}
const strMod = abilityModifier('strength')
const dexMod = abilityModifier('dexterity')
const conMod = abilityModifier('constitution')
const intMod = abilityModifier('intelligence')
const wisMod = abilityModifier('wisdom')
const chaMod = abilityModifier('charisma')
let primaryModifier = chaMod
function totalSpells(level, levelNum) {
  function bonusSpellsPerDay(levelNum){
    return Math.ceil((primaryModifier - (levelNum - 1)) / 4)
  }
  return character.magic.spellsPerDay[level] + bonusSpellsPerDay(levelNum)
}
function spellSave(){
  return Math.floor(10 + character.abilities.primaryModifier('charisma'))
}
/******************************Character Info****************************/
const ItemsHeld = (props) => {
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
  const item = props.value
  const formattedItem = item.replace(/_/g, ' ')
  const buttonAndSpellClass = 'spellButtons ' + item
  return(
    <button className={buttonAndSpellClass} onClick={() => setToggleInfo(!toggleInfo)}>{formattedItem}</button>
  )
}
const Items = (props) => {
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
  function displayItems(){
    const items = Object.values(character.items).map(
      (s) => <ItemsHeld key={s} value={s} />
    );
    return items;
  }
  return(
    <div>
      <h1>Items</h1>
      <div className='spellContainer'>
        <div className='spellItems'>
          <p className='spellList'>{displayItems()}</p>
        </div>
      </div>
    </div>
  )
}

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

const KnownActiveAbilities = (props) => {
  const [toggleInfo, setToggleInfo] = useState(false);
  const ability = props.value
  const formattedAbility = ability.replace(/_/g, ' ')
  const buttonAndSpellClass = 'spellButtons ' + ability
  return(
    <button className={buttonAndSpellClass} onClick={() => setToggleInfo(!toggleInfo)}>{formattedAbility}</button>
  )
}
const ActiveAbilities = (props) => {
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
  function displayAbilities(){
    const abilities = Object.values(character.characterAbilities.active).map(
      (s) => <KnownActiveAbilities key={s} value={s} />
    );
    return abilities;
  }
  return(
    <div className='spellContainer'>
      <div className='spellItems'>
        <p className='spellList'>{displayAbilities()}</p>
      </div>
    </div>
  )
}
//getSpellLevel is non-functional - returns undefined
const SpellInfo = (props) => {
  //bring in react context
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
  const [selection, setSelection] = useContext(Selection);
  //edit string for render
  const formattedSpell = selection.replace(/_/g, ' ')
  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
  function getSpellLevel(selection){
    Object.keys(character.magic.spells).forEach((level) => {
      if(Object.values(character.magic.spells[level]).includes(selection)){
        return level
      }
    })
  }
  console.log(Object.keys(character.magic.spells))
  //'zero' 'one' 'two' 'three' 'four' 'five' 'six' 'seven' 'eight' 'nine'
  console.log(Object.values(character.magic.spells.zero).includes(selection))
  //true
  console.log(getSpellLevel(selection))
  //undefined
  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
  return (
    <div id='spellInfo' className='infoSheet'>
      <button id='useSpell'>Use Spell</button>
      <button id='closeButton' onClick={() => setToggleInfo('Off')}>x</button>
      <h3>{formattedSpell}</h3>
      Level: {getSpellLevel(selection)}<br />
      Components:<br />
      Casting Time:<br />
      Range:<br />
      Target or Area:<br />
      Duration:<br />
      Saving Throw:<br />
      SpellResistance:<br />
    </div>
  )
}
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
          <em className='remainingSpells'>{totalSpells(level, levelNum)} remaining today</em>
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
          <i class="fas fa-arrow-left"></i>
        </button>
      <div className='spellContainer'>
        <div className='spellItems'>
          <div className='spellLevelWrapper'>
            <h2 id="levelZeroHeaderPrep" className='spellLevelHeader'>{casterType()}</h2>
            <em className='remainingSpells'>{totalSpells('zero', 0)} remaining today</em>
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
const KnownSpells = (props) => {
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
  const [selection, setSelection] = useContext(Selection);
  const spell = props.value;
  const formattedSpell = spell.replace(/_/g, ' ');
  const buttonAndSpellClass = 'spellButtons ' + spell;
  function displayInfo(spell){
    setToggleInfo('Spell');
    setSelection(spell);
  }
  return(
    <button className={buttonAndSpellClass} onClick={() => displayInfo(spell)}>{formattedSpell + ' \u221e'}</button>
  )
}
const Spells = (props) => {
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
  const [displayTwo, setDisplayTwo] = useContext(GetSetDisplayTwo);
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
  function displaySpells(level){
    const spells = Object.values(character.magic.spells[level]).map(
      (s) => <KnownSpells key={s} value={s} />
    );
    return spells;
  }
  //condense spell block into function
  function spellCodeBlock(level, levelNum, levelRoman){
    return (
      <div className='spellItems'>
      <div className='spellLevelWrapper'>
      <h2 className='spellLevelHeader'>Level {levelRoman}</h2>
      <em className='remainingSpells'>{totalSpells(level, levelNum)} remaining today</em>
      </div>
      <p className='spellList'>{displaySpells(level)}</p>
      <hr/>
      </div>
    )
  }
  return (
    <div>
      <button id='prepSpellsButton' onClick={() => setDisplayTwo('Prep')}>
        <i class="fas fa-book"></i><span>PREP</span>
      </button>
      <div className='spellContainer'>
        <div className='spellItems'>
          <div className='spellLevelWrapper'>
            <h2 id='levelZeroHeader' className='spellLevelHeader'>{casterType()}</h2>
            <em className='remainingSpells'>{totalSpells('zero', 0)} remaining today</em>
          </div>
    <p className='spellList'>{displaySpells('zero')}</p>
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

const KnownPassiveAbilities = (props) => {
  const [toggleInfo, setToggleInfo] = useState(false);
  const ability = props.value
  const formattedAbility = ability.replace(/_/g, ' ')
  const buttonAndSpellClass = 'spellButtons ' + ability
  return(
    <button className={buttonAndSpellClass} onClick={() => setToggleInfo(!toggleInfo)}>{formattedAbility}</button>
  )
}
const PassiveAbilities = (props) => {
  const [toggleInfo, setToggleInfo] = useContext(ToggleInfo);
  function displayAbilities(){
    const abilities = Object.values(character.characterAbilities.passive).map(
      (s) => <KnownPassiveAbilities key={s} value={s} />
    );
    return abilities;
  }
  return(
    <div className='spellContainer'>
      <div className='spellItems'>
        <p className='spellList'>{displayAbilities()}</p>
      </div>
    </div>
  )
}
const AbilityScores = (props) => {
  const roll = useContext(TossDice)
  function abilityScoreCodeBlock(abilityString, abilityScore, abilityMod){
    return(
    <p className='abilityScores'>
      {/*button appears on same line*/}
      <button className='rollAbility' onClick={() => roll(rollDice(20, abilityMod, abilityString))}>roll</button>
      {abilityString}: {abilityScore} | {abilityMod}
    </p>
    )
  }
  return (
    <div>
    <div id='statsContainer'>
    <h1 id='abilityScoresHeader'>Abilities</h1>
    <div id='abilityScoresWrapper'>
      {abilityScoreCodeBlock('STR', str, strMod)}
      {abilityScoreCodeBlock('DEX', dex, dexMod)}
      {abilityScoreCodeBlock('CON', con, conMod)}
      {abilityScoreCodeBlock('INT', int, intMod)}
      {abilityScoreCodeBlock('WIS', wis, wisMod)}
      {abilityScoreCodeBlock('CHA', cha, chaMod)}
    </div>
    </div>
    </div>
  );
}
const SkillsListItem = (props) => {
  const roll = useContext(TossDice);
  // store props to make code simpler
  const skills = props.skills
  // replace underscore with space and store
  let formattedSkill = skills[0].replace(/_/g, ' ');
  // update variable replacing (Know)ledge with :
  formattedSkill = formattedSkill.replace(/ledge/g, ':')
  // store skill points separately
  const skillPoints = skills[1];
  // confirm class skill to add css class
  function findClassSkills(skill){
    if(character.classSkills.hasOwnProperty(skill)){
      return 'classSkills'
    }else{
      return ''
    }
  }
  return (
    <button
      className={`skills ${findClassSkills(skills[0])} ${skills[0]}`}
      onClick={() => roll(rollDice(20, skillPoints, formattedSkill))}>
      {formattedSkill} | <span className='skillPoints'>{skillPoints}</span>
    </button>
  )
}
const Skills = (props) =>  {
  //put character's skills into array as [key, value]
  let skillsArray = Object.keys(character.skills).map((skill) => {
    return [skill, character.skills[skill]]
  });
  // put character's class skills into array as [key, value]
  let classSkillsArray = Object.keys(character.classSkills).map((skill) => {
    return [skill, character.classSkills[skill]];
  });
  // combine both arrays into new array, sorted alphabetically
  let allSkills = [...skillsArray, ...classSkillsArray].sort();
  // pass skills to child component
  const skillsBlock = allSkills.map((s) =>
    <SkillsListItem key={s} skills={s} />
  );
return(
  <>
    <h1 id='skillsHeader'>Skills</h1>
    <ul id='skillsListWrapper' style={{listStyleType: 'none'}}>
      <div id='skillsWrapper'>
        {skillsBlock}
      </div>
    </ul>
  </>
);}
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
    {/*  <div id='statsDisplay'>
        {selection(display)}
      </div>   */}
    </div>
  )
}

const BasicInfo = (props) => {
  const result = useContext(ReadDice);
//toggle for 'more' button
  const [toggle, setToggle] = useState(false);
//display conditional more/less
  const moreLess = () => {
    if(toggle){
      return '(less)'
    } else {
      return '(more)'
    }
  }
  const health = (
      character.hitPoints.total - character.hitPoints.damage + character.hitPoints.temporaryHitPoints
  );
  const type = (character.type).map(
    (t) => <CharacterType key={t} value={t} />
  );
  const classList = (character.class).map(
    (c) => <CharacterClasses key={c} value={c} />
  );
  return (
      <div>
        <div className='topContainer'>
            <button className={(toggle ? 'moreButtonOn' : 'moreButtonOff')} onClick={() => setToggle(!toggle)}>
              <h1 id='nameAndLevel'>{character.name} ({character.level})</h1>
              <em id='moreLess'>{moreLess()}</em>
            </button>

          {toggle === true &&
            <div id='characterInfo'>
              <div id='characterType'>type: <br /> {type}</div>
              <ul id='classList'>class: <br /> {classList}</ul>
            </div>
          }
          <div id='HPACDiceWrapper'>
            <div id='hpacWrapper'>
              <p id='hp'>hp: {health}</p>
              <p id='ac'>ac: {character.armorClass.ac.total}</p>
            </div>
            <div id='diceRollResultWrapper'>{result}</div>
          </div>
        </div>
      </div>
    );
}
const CharacterType = (props) => {
  return(
    <span>{props.value} / </span>
  )
}
const CharacterClasses = (props) => {
  return(
    <li>{props.value}</li>
  )
}

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
const Navbar = (props) => {
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
const App = () => {
  const [display, setDisplay] = useState('stats')
  const [displayTwo, setDisplayTwo] = useState('Skills')
  const [toggleInfo, setToggleInfo] = useState(false);
  const [rollResult, setRollResult] = useState('Good luck,\n' + character.name)
  return (
    <div id='appWrapper'>
      <div>
        <div id='topWrapper'>
          <ReadDice.Provider value={rollResult}>
            <BasicInfo />
          </ReadDice.Provider>
          <Navbar display={display} setDisplay={setDisplay} setDisplayTwo={setDisplayTwo} />
          <GetSetDisplayTwo.Provider value={[displayTwo, setDisplayTwo]}>
            <SecondaryNavbar display={display}/>
          </GetSetDisplayTwo.Provider>
        </div>
        <GetSetDisplay.Provider value={[display, setDisplay]}>
        <GetSetDisplayTwo.Provider value={[displayTwo, setDisplayTwo]}>
          <ToggleInfo.Provider value={[toggleInfo, setToggleInfo]}>
            <TossDice.Provider value={setRollResult}>
              <MainDisplay />
            </TossDice.Provider>
          </ToggleInfo.Provider>
        </GetSetDisplayTwo.Provider>
        </GetSetDisplay.Provider>
        <div id='bottomSpacer'></div>
      </div>
    </div>
  )
}

export default App
