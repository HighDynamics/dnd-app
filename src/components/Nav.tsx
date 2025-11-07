import { NavLink } from "react-router";

import { combine as c } from "../lib";

const links = [
  {
    to: "/skills",
    label: "Skills",
    icon: <i className="fas fa-solid fa-bolt"></i>,
  },
  {
    to: "/items",
    label: "Items",
    icon: <i className="fas fa-solid fa-suitcase"></i>,
  },
  {
    to: "/main",
    label: "Main",
    icon: <i className="fas fa-solid fa-heart"></i>,
  },
  {
    to: "/spells",
    label: "Spells",
    icon: <i className="fas fa-hand-sparkles"></i>,
  },
  {
    to: "/abilities",
    label: "Abilities",
    icon: <i className="fas fa-solid fa-star"></i>,
  },
];

export function Nav() {
  return (
    <div className="flex items-center justify-between bg-indigo-950 py-2 px-5">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            c(
              "text-white flex flex-col items-center justify-center font-sans py-2 px-3 rounded-sm opacity-50",
              isActive && "text-fuchsia-400! opacity-100! bg-black/70",
            )
          }
        >
          {link.icon}
          <span className="text-sm">{link.label}</span>
        </NavLink>
      ))}
    </div>
  );
}
