import React from 'react';
import './dnd.css';

const { useState } = React;

/******************************Character Info****************************/
const character = {
  name: 'Arn Hachem',
  type: ['human', 'sanctified', 'deathless', 'spellstitched', 'archlich'],
  hitPoints: {
    dieSize: 12,
    total: 255,
    damage: 0,
    temporaryHitPoints: 0,
  },
  armorClass: {
    ac: {
      total: 37,
      armor: 6,
      shield: 0,
      dexterity: 12,
      size: 0,
      naturalArmor: 5,
      deflection: 4,
      misc: 0
    },
    touch: 22,
    flatFooted: 23
  },
  size: 'Medium',
  alignment: 'Lawful-Good',
  abilities: {
    score: {
      strength: 18,
      dexterity: 24,
      constitution: '--',
      intelligence: 22,
      wisdom: 17,
      charisma: 35
    },
    modifier: (ability) => {
      if(character.abilities.score[ability] === '--'){
        return '--'
      }
      return Math.floor((character.abilities.score[ability] - 10) / 2)
    },
    primaryModifier: (ability) => {return Math.floor((character.abilities.score[ability] - 10) / 2)}
  },
  speed: 30,
  level: '20',
  class: ['Sorcerer(1)', 'Mindtender(2)', 'Fleshwarper(2)', 'Malconvoker(7)', 'Binder(1)', 'Bard(1)', 'Master of Masks(5)'],
  skills: {
    appraise: 10,
    balance: 12,
    bluff: 41,
    climb: 4,
    concentration: 27,
    craft: 13,
    diplomacy: 18,
    diguise: 39,
    escapeArtist: 12,
    forgery: 6,
    gatherInformation: 9,
    heal: 16,
    hide: 25,
    intimidate: 19,
    jump: 4,
    listen: 4,
    moveSilently: 12,
    ride: 12,
    search: 6,
    senseMotive: 21,
    spot: 4,
    survival: 4,
    swim: 12,
    useRope: 12,
    stealth: 28,
    perception: 19
  },
  classSkills: {
    knowledgeArcana: 26,
    knowledgeDungeoneering: 14,
    knowledgeReligion: 16,
    knowledgePlanes: 8,
    haha: 'haha'
  },
  characterAbilities: [
    'Light_Ray', 'Paralyzing_Touch', 'Positive_Energy_Touch', 'Turn_Undead'
  ],
  magic: {
    slas: {
      zero: '',
      one: ['Chill_Touch', 'Floating_Disk'],
      two: ['Command_Undead', 'Acid_Arrow'],
      three: ['Vampiric_Touch', 'Phantom_Steed'],
      four: ['Affliction', 'Enervation'],
      five: ['Mage\'s_Faithful_Hound', 'Wall_of_Force'],
      six: ['Contingency'],
      seven: '',
      eight: '',
      nine: '',
    },
    spellcaster: true,
    type: {
      arcane: true,
      divine: false,
    },
    spells: {
      zero: ['Mending', 'Arcane_Mark', 'Ghost_Sound', 'Detect_Magic', 'Mage_Hand', 'Message', 'Light', 'Read Magic', 'Acid_Splash', 'Lullaby', 'Know_Direction', 'Open/Close', 'Prestidigitation'],
      one: ['Silent_Image', 'Disguise_Self', 'Magic_Missile', 'Mage_Armor', 'Charm_Person'],
      two: ['Ghoul_Touch', 'Arcane_Lock', 'Knock', 'Alter_Fortune', 'Scorching_Ray'],
      three: ['Shrink_Item', 'Tiny_Hut', 'Ray_of_Exhaustion', 'Explosive_Runes'],
      four: ['Resilient_Sphere', 'Create_Fetch', 'Dimension_Door', 'Polymorph'],
      five: ['Telekinesis', 'Sending', 'Passwall', 'Planar_Binding,_Lesser', 'Feeblemind'],
      six: ['Disintigrate', 'Freezing_Sphere', 'Planar_Binding', 'Permanent_Image'],
      seven: ['Teleport_Object', 'Stun_Ray', 'Waves_of_Exhaustion'],
      eight: ['Polymorph_any_Object', 'Horrid_Wilting', 'Planar_Binding,_Greater', 'Last_Judgment'],
      nine: ['Replicate Casting', 'Sphere of Ultimate Destruction', 'Crushing_Hand']
    },
    spellbook: {
      zero: ['Arcane_Mark', 'Prestidigitation', 'Mage Hand', 'Resistance', 'Disrupt Undead', 'Touch of Fatigue', 'Mending', 'Message', 'Open/Close', 'Preserve Organ', 'No-Light', 'Slash Tongue', 'Silent Portal'],
      one: ['a'],
      two: ['a'],
      three: ['a'],
      four: ['a'],
      five: ['a'],
      six: ['a'],
      seven: ['a'],
      eight: ['a'],
      nine: ['a'],
    },
    spellsPerDay: {
      zero: 8,
      one: 6,
      two: 6,
      three: 6,
      four: 6,
      five: 6,
      six: 6,
      seven: 6,
      eight: 6,
      nine: 6,
    },
    bonusSpellsPerDay: (level) => {
      return Math.ceil((character.abilities.primaryModifier('charisma') - (level - 1)) / 4)
    }, //formula needs fixing
    spellSave: () => {return Math.floor(10 + character.abilities.primaryModifier('charisma'))}
  },
  items: [
    'Mesmerist\'s Gloves', 'Nolzure\'s Orb', 'Vanisher Cloak', 'GateBreaker Ballista Bolt'
  ],
}
const str = character.abilities.score.strength
const dex = character.abilities.score.dexterity
const con = character.abilities.score.constitution
const int = character.abilities.score.intelligence
const wis = character.abilities.score.wisdom
const cha = character.abilities.score.charisma
const strMod = character.abilities.modifier('strength')
const dexMod = character.abilities.modifier('dexterity')
const conMod = character.abilities.modifier('constitution')
const intMod = character.abilities.modifier('intelligence')
const wisMod = character.abilities.modifier('wisdom')
const chaMod = character.abilities.modifier('charisma')
/******************************Character Info****************************/
const KnownSLAs = (props) => {
  const [toggleInfo, setToggleInfo] = useState(false);
  const spell = props.value
  const formattedSpell = spell.replace(/\_/g, ' ')
  const buttonAndSpellClass = 'spellButtons ' + spell
  return(
    <button className={buttonAndSpellClass} onClick={() => setToggleInfo(!toggleInfo)}>{formattedSpell + ' \u221e'}</button>
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

const Abilities = (props) => {
  return(
    <>
      Abilities()
    </>
  )
}

const UseSpell = (props) => {
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
}
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
    return character.magic.spellsPerDay[level] + character.magic.bonusSpellsPerDay(levelNum)
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

const ClassSkillsListItem = (props) => {
  return <li className='skills'>{props.classSkills}{props.skillPoints}</li>
}
const SkillsListItem = (props) => {
  return <li className='skills'>{props.skills}{props.skillPoints}</li>
}
const Skills = (props) =>  {
  let skillsBlock = Object.keys(character.skills).map((skill) =>
    (
      <div className='skillBorderTwo'>
        <SkillsListItem
          key={skill}
          skills={skill.toLowerCase()}
          skillPoints={character.skills[skill]}
        />
      </div>
    )
  )
  let classSkillsBlock = Object.keys(character.classSkills).map((skill) =>
      (
        <div className='skillBorderTwo'>
          <ClassSkillsListItem
            key={skill}
            skills={skill.toLowerCase()}
            skillPoints={character.classSkills[skill]}
          />
        </div>
      )
    );
  return(
    <>
      <h1 id='skillsHeader'>Skills</h1>
      <ul id='skills' style={{listStyleType: 'none'}}>
        {skillsBlock}{classSkillsBlock}
      </ul>
    </>
  );}

const KnownSpells = (props) => {
  const [toggleInfo, setToggleInfo] = useState(false);
  const spell = props.value
  const formattedSpell = spell.replace(/\_/g, ' ')
  const buttonAndSpellClass = 'spellButtons ' + spell
  return(
    <button className={buttonAndSpellClass} onClick={() => setToggleInfo(!toggleInfo)}>{formattedSpell + ' \u221e'}</button>
  )
}

const AbilitySelector = (props) => {
  const [display, setDisplay] = useState('spells')
  function selection(display){
    switch(display){
      case 'Spells':
        return <Spells />
      case 'Abilites':
        return <Abilities />
      case 'SLAs':
        return <SLAs />
    }
  }
  function navButtonCodeBlock(name){
    return(
      <button id={name}
              onClick={() => setDisplay(name)}
              className={(display == name ? 'navbarItemsOn' : 'navbarItemsOff')}>
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
      {selection(display)}
    </div>
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
    return character.magic.spellsPerDay[level] + character.magic.bonusSpellsPerDay(levelNum)
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

const Stats = (props) => {
  return (
    <div>
    <div className='statsContainer'>
    <h1 id='abilitiesHeader'>Abilities</h1>
    <div id='abilities'>
    <p className='abilities'>STR: {str} | {strMod}</p>
    <p className='abilities'>DEX: {dex} | {dexMod}</p>
    <p className='abilities'>CON: {con} | {conMod}</p>
    <p className='abilities'>INT: {int} | {intMod}</p>
    <p className='abilities'>WIS: {wis} | {wisMod}</p>
    <p className='abilities'>CHA: {cha} | {chaMod}</p>
    </div>
    </div>
    <div className='skillsContainer'>
    <Skills />
    </div>
    </div>
  );
}

const Items = (props) => {
  return (
    <div>
      <h1>Items</h1>
      <p>| {character.items.map(x => x).join(' | ')} |</p>
    </div>
  );
}

const BasicInfo = (props) => {
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

          {toggle == true &&
            <div id='characterInfo'>
              <div id='characterType'>type: <br /> {type}</div>
              <ul id='classList'>class: <br /> {classList}</ul>
            </div>
          }
          <p id='hp'>hp: {health}</p>
          <p id='ac'>ac: {character.armorClass.ac.total}</p>
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
        return <Stats />
      case 'spells':
        return <Spells />
      case 'items':
        return <Items />
      case 'ability':
        return <AbilitySelector />
    }
  }

    return(
      <div>
        {screenSwitch(props.display)}
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
  return (
    <div id='appWrapper'>
      <div>
        <div id='topWrapper'>
          <BasicInfo />
          <Navbar display={display} setDisplay={setDisplay} />
        </div>
        <div id='mainContent'>
          <MainDisplay display={display} setDisplay={setDisplay} />
        </div>
      </div>
    </div>
  )
}

export default App
