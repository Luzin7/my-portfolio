import React from "react";
import "../style/home/home.css";
import "../style/home/homeContent.css";

function Home() {
  return (
    <section data-aos="fade-down" className="home">
      <div className="home__content">
        <img
          className="me__icon"
          src="https://avatars.githubusercontent.com/u/76531786?v=4"
          alt="Luan Victor"
        />
        <h1 className="home__title">
          Olá, meu nome é <strong>Luan Victor</strong>
        </h1>
        <div className="home__info">
          <p className="home__info-text">
            Um apaixonado por tecnologia e desenvolvedor Front-End.
          </p>
        </div>
        <div className="home__link-button">
          <a href="#projects" className="btn home__button">
            Meus projetos
          </a>
        </div>
      </div>
      <div className="scroll">
        <span></span>
        <p className="scroll__text">Role para baixo</p>
      </div>
    </section>
  );
}

export default Home;
