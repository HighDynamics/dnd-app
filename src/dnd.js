import React from 'react';
import './dnd.css';
import { character } from './Arn_Hachem.js'
const { useState, useContext } = React;

function rollDice(size, mod){
  const dice = Math.floor((Math.random() * size) +1)
  const result =
    `${dice} + ${mod} = \n ${dice + mod}`;
  return result
}
const TossDice = React.createContext(null)
const ReadDice = React.createContext(null)
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
function bonusSpellsPerDay(levelNum){
  return Math.ceil((primaryModifier - (levelNum - 1)) / 4)
}
function spellSave(){
  return Math.floor(10 + character.abilities.primaryModifier('charisma'))
}
/******************************Character Info****************************/
const ItemsHeld = (props) => {
  const [toggleInfo, setToggleInfo] = useState(false);
  const item = props.value
  const formattedItem = item.replace(/_/g, ' ')
  const buttonAndSpellClass = 'spellButtons ' + item
  return(
    <button className={buttonAndSpellClass} onClick={() => setToggleInfo(!toggleInfo)}>{formattedItem}</button>
  )
}
const Items = (props) => {
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
  const [toggleInfo, setToggleInfo] = useState(false);
  const spell = props.value
  const formattedSpell = spell.replace(/_/g, ' ')
  const buttonAndSpellClass = 'spellButtons ' + spell
  return(
    <button className={buttonAndSpellClass} onClick={() => setToggleInfo(!toggleInfo)}>{formattedSpell}</button>
  )
}
const SLAs = (props) => {
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

/*const UseSpell = (props) => {
  const newArray = Object.values(character.magic.spells.zero).map(spell => spell)
  function spellList(level) {
    if (character.magic.spells[level].length == 0){
      return 'LEVEL UP FIRST'
    }else if (Array.isArray(character.magic.spells[level])) {
      return '| ' + Object.values(character.magic.spells[level]).map(x => (
        <a href='#' key={x}>{x}</a>))
        .join(' | ') + ' |'
    }
    return '| ' + character.magic.spells[level] + ' |'
  }
  return (
    <div>
      <h1>Level 1</h1>
      <p>{Object.values(character.magic.spells.one).map(x => (
        <a href='#'>{`${x}`}</a>
      ))}</p>
    </div>
  )
} */
const Spellbook = (props) => {
  const [toggleInfo, setToggleInfo] = useState(false);
  const spell = props.value
  const formattedSpell = spell.replace(/\_/g, ' ')
  const buttonAndSpellClass = 'spellButtons ' + spell
  return(
    <button className={buttonAndSpellClass} onClick={() => setToggleInfo(!toggleInfo)}>{formattedSpell}</button>
  )
}
const PrepSpells = (props) => {
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
  function totalSpells(level, levelNum) {
    return character.magic.spellsPerDay[level] + bonusSpellsPerDay(levelNum)
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
      <div className='spellContainer'>
        <div className='spellItems'>
          <div className='spellLevelWrapper'>
            <h2 className='spellLevelHeader'>{casterType()}</h2>
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
  const [toggleInfo, setToggleInfo] = useState(false);
  const spell = props.value
  const formattedSpell = spell.replace(/_/g, ' ')
  const buttonAndSpellClass = 'spellButtons ' + spell
  return(
    <button className={buttonAndSpellClass} onClick={() => setToggleInfo(!toggleInfo)}>{formattedSpell + ' \u221e'}</button>
  )
}
const Spells = (props) => {
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
  //total castings per day
  function totalSpells(level, levelNum) {
    return character.magic.spellsPerDay[level] + bonusSpellsPerDay(levelNum)
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
    <div className='spellContainer'>
    <div className='spellItems'>
    <div className='spellLevelWrapper'>
    <h2 className='spellLevelHeader'>{casterType()}</h2>
    <em className='remainingSpells'>{character.magic.spellsPerDay.zero} remaining today</em>
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
  const [display, setDisplay] = useState('Spells')
  function selection(display){
    switch(display){
      case 'Spells':
        return <Spells />
      case 'Abilities':
        return <ActiveAbilities />
      case 'SLAs':
        return <SLAs />
      default:
        return <Spells />
    }
  }
  function navButtonCodeBlock(name){
    return(
      <button id={name}
              onClick={() => setDisplay(name)}
              className={(display === name ? 'navbarItemsOn' : 'navbarItemsOff')}>
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
      <div id='abilityDisplay'>
        {selection(display)}
      </div>
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
      <button onClick={() => roll(rollDice(20, abilityMod))}>roll</button>
      {abilityString}: {abilityScore} | {abilityMod}
    </p>
    )
  }
  return (
    <div>
    <div className='statsContainer'>
    <h1 id='abilityScoresHeader'>Abilities</h1>
    <div id='abilityScores'>
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
      return ' classSkills'
    }else{
      return ''
    }
  }
  console.log(findClassSkills(skills[0]))
  return (
    <li className={`skills${findClassSkills(skills[0])}`}>
      {formattedSkill} | <span className='skillPoints'>{skillPoints}</span>
    </li>
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
  const [display, setDisplay] = useState('Skills')
  function selection(display){
    switch(display){
      case 'Skills':
        return <Skills />
      case 'Scores':
        return <AbilityScores />
      case 'Passive':
        return <PassiveAbilities />
      default:
        return <Skills />
    }
  }
  function navButtonCodeBlock(name){
    return(
      <button id={name}
              onClick={() => setDisplay(name)}
              className={(display === name ? 'navbarItemsOn' : 'navbarItemsOff')}>
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
      <div id='statsDisplay'>
        {selection(display)}
      </div>
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
            <span id='diceRollResult'>{result}</span>
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
  function screenSwitch(display) {
    switch(display) {
      case 'stats':
        return <StatsSelector />
      case 'ability':
        return <AbilitySelector />
      case 'items':
        return <Items />
      default:
        return <StatsSelector />
    }
  }

    return(
      <div>
        {screenSwitch(props.display)}
        <div id='bottomSpacer'></div>
      </div>
    );

}

const Navbar = (props) => {
  const statIcon = <i id='statIcon' className="far fa-chart-bar"></i>;
  const abilityIcon = <i id="spellIcon" className="fas fa-hand-sparkles"></i>;
  const itemIcon = <i id='itemIcon' className="fas fa-scroll"></i>;
  function navButtonCodeBlock(name, icon){
    return(
      <button id={name}
              onClick={() => props.setDisplay(name)}
              className={(props.display == name ? 'navbarItemsOn' : 'navbarItemsOff')}>
                      {icon}
      </button>
    )
  }
  return (
    <div>
      <ul className='navbarContainer'>
        {navButtonCodeBlock('stats', statIcon)}
        {navButtonCodeBlock('ability', abilityIcon)}
        {navButtonCodeBlock('items', itemIcon)}
      </ul>
    </div>
  );
}
const App = () => {
  const [display, setDisplay] = useState('stats')
  const [rollResult, setRollResult] = useState('Good luck,\n' + character.name)
  return (
    <div id='appWrapper'>
      <div>
        <div id='topWrapper'>
          <ReadDice.Provider value={rollResult}>
            <BasicInfo />
          </ReadDice.Provider>
          <Navbar display={display} setDisplay={setDisplay} />
        </div>
        <div id='mainContent'>
          <TossDice.Provider value={setRollResult}>
            <MainDisplay display={display} setDisplay={setDisplay} />
          </TossDice.Provider>
        </div>
      </div>
    </div>
  )
}

export default App
