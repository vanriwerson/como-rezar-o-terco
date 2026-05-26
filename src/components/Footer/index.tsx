import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

import "./style.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-divider" />

      <p className="footer-text">Conheça o Desenvolvedor:</p>

      <div className="footer-socials">
        <a
          href="https://github.com/vanriwerson"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="footer-social-link"
        >
          <IconBrandGithub size={22} stroke={1.8} />
        </a>

        <a
          href="https://www.linkedin.com/in/bruno-riwerson/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="footer-social-link"
        >
          <IconBrandLinkedin size={22} stroke={1.8} />
        </a>
      </div>

      <p className="credits-link">
        Saiba mais sobre o projeto <NavLink to="/creditos">Aqui!</NavLink>
      </p>

      <span className="footer-copy">
        © {currentYear} • Rezando o Santo Terço
      </span>
    </footer>
  );
}
