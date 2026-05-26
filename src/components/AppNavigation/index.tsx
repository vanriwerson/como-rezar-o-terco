import { useState } from "react";

import { NavLink } from "react-router-dom";

import { IconMenu2, IconX } from "@tabler/icons-react";

import "./style.css";

export default function AppNavigation() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

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

      <nav className="navigation-mobile">
        <button
          aria-label="Abrir menu"
          className="navigation-menu-button"
          onClick={() => setOpen((previous) => !previous)}
          type="button"
        >
          {open ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>

        {open && (
          <>
            <div className="navigation-overlay" onClick={closeMenu} />

            <div className="navigation-drawer">
              <NavLink to="/" onClick={closeMenu}>
                Ritos Iniciais
              </NavLink>

              <NavLink to="/misterios/gozosos" onClick={closeMenu}>
                Gozosos
              </NavLink>

              <NavLink to="/misterios/dolorosos" onClick={closeMenu}>
                Dolorosos
              </NavLink>

              <NavLink to="/misterios/gloriosos" onClick={closeMenu}>
                Gloriosos
              </NavLink>

              <NavLink to="/misterios/luminosos" onClick={closeMenu}>
                Luminosos
              </NavLink>

              <NavLink to="/finais" onClick={closeMenu}>
                Ritos Finais
              </NavLink>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
