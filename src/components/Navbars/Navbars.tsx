import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import { mainContentState, secondaryNavbarState } from "../../recoilState";
import type {
  MainContent,
  SecondaryNavbar as SecondaryNav,
} from "../../recoilState";
import "./Navbars.css";

const NavButtonCodeBlock = (props: { name: MainContent }) => {
  const [mainContent, setMainContent] = useRecoilState(mainContentState);
  return (
    <button
      id={props.name}
      onClick={() => setMainContent(props.name)}
      className={
        mainContent === props.name ? "navbarItemsOn" : "navbarItemsOff"
      }
    >
      {props.name}
    </button>
  );
};

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
        <NavButtonCodeBlock name={"Items"} />
      </ul>
    </div>
  );
};

const SecondaryNavbar = () => {
  const secondaryNavbar = useRecoilValue(secondaryNavbarState);
  function navSwitch(display: SecondaryNav) {
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
      <div id="secondaryNavbar">{navSwitch(secondaryNavbar)}</div>
    </>
  );
};
const PrimaryNavbar = () => {
  const [secondaryNavbar, setSecondaryNavbar] = useRecoilState(
    secondaryNavbarState
  );
  const setMainContent = useSetRecoilState(mainContentState);
  const statIcon = <i id="statIcon" className="far fa-chart-bar"></i>;
  const abilityIcon = <i id="spellIcon" className="fas fa-hand-sparkles"></i>;
  const moreIcon = <i id="moreIcon" className="fas fa-cog"></i>;
  function setBothDisplays(name: SecondaryNav, secondaryName: MainContent) {
    setSecondaryNavbar(name);
    if (secondaryName !== null) {
      setMainContent(secondaryName);
    }
  }
  function navButtonCodeBlock(
    name: SecondaryNav,
    icon: React.ReactNode,
    secondaryName: MainContent
  ) {
    return (
      <button
        id={name}
        onClick={() => setBothDisplays(name, secondaryName)}
        className={
          secondaryNavbar === name ? "navbarItemsOn" : "navbarItemsOff"
        }
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
        {navButtonCodeBlock("more", moreIcon, "More")}
      </ul>
    </div>
  );
};

export { PrimaryNavbar, SecondaryNavbar };
