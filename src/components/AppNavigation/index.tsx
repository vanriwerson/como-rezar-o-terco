import { NavLink } from "react-router-dom";

import "./style.css";
import MobileNavigation from "../MobileNavigation";
import { MISTERIOS_NAVIGATION_ITEMS } from "../../data";

export default function AppNavigation() {
  return (
    <>
      <nav className="navigation-desktop">
        <NavLink to="/">Ritos Iniciais</NavLink>

        {MISTERIOS_NAVIGATION_ITEMS.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}

        <NavLink to="/finais">Ritos Finais</NavLink>
      </nav>

      <MobileNavigation />
    </>
  );
}
