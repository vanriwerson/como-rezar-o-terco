import { useState } from "react";

import { NavLink } from "react-router-dom";

import { IconMenu2, IconX } from "@tabler/icons-react";

import "./style.css";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <nav className="navigation-mobile">
        <button
          aria-label="Abrir menu"
          className="navigation-menu-button"
          onClick={() => setOpen((previous) => !previous)}
          type="button"
        >
          <IconMenu2 size={24} />
        </button>
      </nav>

      {open && (
        <>
          <div className="navigation-overlay" onClick={closeMenu} />

          <aside className="navigation-drawer">
            <div className="navigation-drawer-header">
              <button
                aria-label="Fechar menu"
                className="navigation-menu-button"
                onClick={closeMenu}
                type="button"
              >
                <IconX size={24} />
              </button>
            </div>

            <div className="navigation-links">
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
          </aside>
        </>
      )}
    </>
  );
}
