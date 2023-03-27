import React from "react";

import { SKILLS } from "../utils/getSkills";
import pdf from "../assets/pdf/curriculo_victor.pdf";

import "../style/about/about.css";
import "../style/about/aboutContent.css";

function About() {
  return (
    <section id="about" className="about">
      <div data-aos="fade-down" className="about__header-text">
        <h2 className="about__title">Sobre mim</h2>
        <p className="about__sub">
          Me chamo Luan Victor, tenho 20 anos e estudo desenvolvimento web
          Front-end de forma autônoma. Tenho experiência com trabalho em equipe
          e pretendo me tornar Full-stack.
        </p>
      </div>
      <div className="about__content">
        <div className="about__info">
          <h3 data-aos="fade-up" className="about__skills-title">
            Minha carreira na programação
          </h3>
          <p className="about__info-text">
            Desde criança sou interessado em tecnologia, sempre tive curiosidade
            sobre como fazer um projeto que eu achasse legal ou saber, por
            exemplo, como um aplicativo ou um página web foram criados.
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
          <h3 data-aos="fade-up" className="about__skills-title">
            Tenho experiência com
          </h3>
          <ul className="about__skills-list">
            {SKILLS.map((skill) => (
              <li
                data-aos="fade-left"
                key={skill.id}
                className="about__skill-wrapper"
              >
                <div className="skills__img">
                  <img
                    className="skill__img"
                    src={skill.icon}
                    alt="Language icon"
                    loading="lazy"
                  />
                </div>
                <p className="skill__name">{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a
        className="btn about_download"
        href={pdf}
        target="_blank"
        rel="noreferrer"
      >
        Acesse meu currículo
      </a>
    </section>
  );
}

export default About;
