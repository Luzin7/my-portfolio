import React from "react";
import "../style/home/home.css";
import "../style/home/homeContent.css";

function Home() {
  return (
    <section className="home">
      <div className="home__content">
        <h1 className="home__title">
          Olá, meu nome é <strong>Luan Victor</strong>
        </h1>
        <div className="home__info">
          <p className="home__info-text">
            Um apaixonado por tecnologia que decidiu seguir o caminho da
            programação.
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
