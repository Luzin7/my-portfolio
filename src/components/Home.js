import React from "react";
import "../style/home/home.css";
import "../style/home/homeContent.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home__content">
        <h1 className="home__title">
          Olá, meu nome é <strong>Luan Victor</strong>
        </h1>
        <div className="home__info">
          <p className="home__info-text">
            Estudo programação de forma autodidata. Desde criança sou
            interessado no mundo da programação, passando por{" "}
            <strong>desenvolvedor de jogos</strong> até{" "}
            <strong>desenvolvedor web</strong>. Minhas práticas, no momento,
            estão sendo para o <strong>Front-End</strong>, porém, por amar
            sistemas de segurança e coisas relacionadas, não descarto a
            importância do Back-End e pretendo estudá-lo assim que possível.
          </p>
        </div>
        <div className="home__link-button">
          <a href="#projeto" className="btn home__button">
            Meus projetos
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
