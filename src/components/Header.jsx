import React from "react";
import "../style/header/header.css";
import "../style/header/headerContent.css";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="#home" className="header__link">
                Início
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#about" className="header__link">
                Sobre
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#projects" className="header__link">
                Projetos
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#contact" className="header__link">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
