import React from "react";

import "../style/about/about.css";
import "../style/about/aboutContent.css";

import reactLogo from "../assets/icons/react.svg";
import jsLogo from "../assets/icons/js.svg";
import vuejsLogo from "../assets/icons/vuejs.svg";
import htmlLogo from "../assets/icons/html.svg";
import cssLogo from "../assets/icons/css.svg";
import gitLogo from "../assets/icons/Git-Icon.png";
import gitHubLogo from "../assets/icons/GitHub-Mark-120px-plus.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__header-text">
        <h2 className="about__title">Sobre mim</h2>
        <p className="about__sub">
          Me chamo Luan Victor, tenho 19 anos e estudo desenvolvimento web
          Front-end de forma autônoma, tenho experiência com trabalho em equipe
          e, futuramente, pretendo me tornar Full-stack.
        </p>
      </div>
      <div className="about__content">
        <div className="about__info">
          <h3 className="about__skills-title">Minha carreira na programação</h3>
          <p className="about__info-text">
            Desde criança sou interessado em tecnologia, sempre tive curiosidade
            sobre como fazer um projeto que eu achasse legal ou saber, por
            exemplo, como um aplicativo móvel ou um página web foram criados.
            Por ter essa ambição de conhecimento já trilhei por algumas áreas da
            programação, desde desenvolvedor de jogos digitais até desenvolvedor
            web. Assim como qualquer pessoa, já vivi diferentes fases e gostos
            mas o interesse em programação sempre se manteve. Minhas práticas
            estão sendo para o Front-End, porém, por amar sistemas de segurança
            e coisas relacionadas, não descarto a importância do Back-end e
            pretendo estudá-lo assim que possível.
          </p>
        </div>
        <div className="about__skills">
          <h3 className="about__skills-title">Tenho experiência com</h3>
          <ul className="about__skills-list">
            <li className="about__skill-wrapper">
              <div className="skills__img">
                <img className="skill__img" src={jsLogo} alt="Language icon" />
              </div>
              <p className="skill__name">Javascript</p>
            </li>
            <li className="about__skill-wrapper">
              <div className="skills__img">
                <img className="skill__img" src={reactLogo} alt="icon" />
              </div>
              <p className="skill__name">React.JS</p>
            </li>
            <li className="about__skill-wrapper">
              <div className="skills__img">
                <img className="skill__img" src={vuejsLogo} alt="icon" />
              </div>
              <p className="skill__name">Vue.JS</p>
            </li>
            <li className="about__skill-wrapper">
              <div className="skills__img">
                <img className="skill__img" src={htmlLogo} alt="icon" />
              </div>
              <p className="skill__name">HTML5</p>
            </li>
            <li className="about__skill-wrapper">
              <div className="skills__img">
                <img className="skill__img" src={cssLogo} alt="icon" />
              </div>
              <p className="skill__name">CSS3</p>
            </li>
            <li className="about__skill-wrapper">
              <div className="skills__img">
                <img className="skill__img" src={gitLogo} alt="icon" />
              </div>
              <p className="skill__name">Git</p>
            </li>
            <li className="about__skill-wrapper">
              <div className="skills__img">
                <img className="skill__img" src={gitHubLogo} alt="icon" />
              </div>
              <p className="skill__name">GitHub</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
