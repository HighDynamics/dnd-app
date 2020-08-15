import React, { useContext } from "react";
import { GetSetDisplayTwo } from "../dnd.js";
import "./Navbars.css";

function NavButtonCodeBlock(props) {
  const [displayTwo, setDisplayTwo] = useContext(GetSetDisplayTwo);
  return (
    <button
      id={props.name}
      onClick={() => setDisplayTwo(props.name)}
      className={displayTwo === props.name ? "navbarItemsOn" : "navbarItemsOff"}
    >
      {props.name}
    </button>
  );
}

const AbilitySelector = () => {
  return (
    <div>
      <ul id="abilitySelector" className="navbarContainer">
        <NavButtonCodeBlock name={"Spells"} />
        <NavButtonCodeBlock name={"Abilities"} />
        <NavButtonCodeBlock name={"SLAs"} />
      </ul>
    </div>
  );
};

const StatsSelector = () => {
  return (
    <div>
      <ul id="statsSelector" className="navbarContainer">
        <NavButtonCodeBlock name={"Skills"} />
        <NavButtonCodeBlock name={"Scores"} />
        <NavButtonCodeBlock name={"Passive"} />
      </ul>
    </div>
  );
};

const SecondaryNavbar = (props) => {
  function navSwitch(display) {
    switch (display) {
      case "stats":
        return <StatsSelector />;
      case "ability":
        return <AbilitySelector />;
      case null:
        return null;
      default:
        return <StatsSelector />;
    }
  }
  return (
    <>
      <div id="secondaryNavbar">{navSwitch(props.display)}</div>
    </>
  );
};
const PrimaryNavbar = (props) => {
  const statIcon = <i id="statIcon" className="far fa-chart-bar"></i>;
  const abilityIcon = <i id="spellIcon" className="fas fa-hand-sparkles"></i>;
  const itemIcon = <i id="itemIcon" className="fas fa-scroll"></i>;
  function setBothDisplays(name, secondaryName) {
    props.setDisplay(name);
    if (secondaryName !== null) {
      props.setDisplayTwo(secondaryName);
    }
  }
  function navButtonCodeBlock(name, icon, secondaryName) {
    return (
      <button
        id={name}
        onClick={() => setBothDisplays(name, secondaryName)}
        className={props.display === name ? "navbarItemsOn" : "navbarItemsOff"}
      >
        {icon}
      </button>
    );
  }
  return (
    <div>
      <ul id="primaryNavbar" className="navbarContainer">
        {navButtonCodeBlock("stats", statIcon, "Skills")}
        {navButtonCodeBlock("ability", abilityIcon, "Spells")}
        {navButtonCodeBlock(null, itemIcon, "Items")}
      </ul>
    </div>
  );
};

export { PrimaryNavbar, SecondaryNavbar };
