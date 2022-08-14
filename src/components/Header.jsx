import React from "react";
import "../style/header/header.css";
import "../style/header/headerContent.css";

function Header() {
  function toggleMenu(event) {
    const btn = document.getElementById("btn__mobile");
    const nav = document.querySelector("#nav__header");
    nav.classList.toggle("active");
    const ariaActive = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", ariaActive);

    if (ariaActive) {
      btn.textContent = "X";
    } else {
      btn.textContent = "Menu";
    }
  }
  return (
    <header className="header">
      <div className="header__content">
        <nav id="nav__header">
          <button
            id="btn__mobile"
            className="btn"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            Menu
          </button>
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
        </nav>
      </div>
    </header>
  );
}

export default Header;
