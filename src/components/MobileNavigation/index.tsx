import { useState } from "react";

import { NavLink } from "react-router-dom";

import { IconMenu2, IconX } from "@tabler/icons-react";

import "./style.css";
import { MISTERIOS_NAVIGATION_ITEMS } from "../../data";

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
          onClick={() => setOpen(true)}
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
              <div className="navigation-section">
                <span className="navigation-section-title">Mistérios</span>

                <div className="navigation-sub-links">
                  {MISTERIOS_NAVIGATION_ITEMS.map((item) => (
                    <NavLink key={item.to} to={item.to} onClick={closeMenu}>
                      {item.icon}
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="footer-divider" />

              <div className="navigation-section">
                <NavLink to="/" onClick={closeMenu}>
                  Ritos Iniciais
                </NavLink>

                <NavLink to="/finais" onClick={closeMenu}>
                  Ritos Finais
                </NavLink>
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
