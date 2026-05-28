import { NavLink } from "react-router-dom";

import "./style.css";
import MobileNavigation from "../MobileNavigation";

export default function AppNavigation() {
  return (
    <>
      <nav className="navigation-desktop">
        <NavLink to="/">Ritos Iniciais</NavLink>

        <NavLink to="/misterios/gozosos">Gozosos</NavLink>

        <NavLink to="/misterios/dolorosos">Dolorosos</NavLink>

        <NavLink to="/misterios/gloriosos">Gloriosos</NavLink>

        <NavLink to="/misterios/luminosos">Luminosos</NavLink>

        <NavLink to="/finais">Ritos Finais</NavLink>
      </nav>

      <MobileNavigation />
    </>
  );
}
