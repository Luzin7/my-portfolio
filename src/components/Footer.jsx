import React from "react";

import { CURRENT_YEAR } from "../utils/getDate";
import linkedinLogo from "../assets/icons/linkedin.svg";
import gitHubLogo from "../assets/icons/GitHub-Mark-Light-120px-plus.png";

import "../style/footer/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h2 className="footer__title">Social</h2>
        <ul className="footer__social-links">
          <li className="social__link-wrapper">
            <a
              href="https://www.linkedin.com/in/lvictordutra/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social__img">
                <img
                  id="linkedin"
                  className="social__logo"
                  src={linkedinLogo}
                  alt="Linkedin"
                />
              </div>
            </a>
          </li>
          <li className="social-link">
            <a
              href="https://github.com/Luzin7"
              target="_blank"
              rel="noreferrer"
            >
              <div className="social__img">
                <img className="social__logo" src={gitHubLogo} alt="GitHub" />
              </div>
            </a>
          </li>
        </ul>
      </div>
      <span>
        Todos os dados atualizados em {CURRENT_YEAR}. Feito por{" "}
        <a href="https://lvictor-portfolio.vercel.app/" target="_blank" rel="noreferrer">
          Luan Victor
        </a>
        . <br /> Algumas imagens fora retiradas da internet e receberam os
        devidos créditos no{" "}
        <a
          href="https://github.com/Luzin7/my-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          repositório
        </a>{" "}
        desse projeto.
      </span>
    </footer>
  );
}

export default Footer;
