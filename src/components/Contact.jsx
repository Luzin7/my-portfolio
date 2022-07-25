import React from "react";

import "../style/contact/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__content">
        <div className="contact__content">
          <div className="contact__header-text">
            <h1 data-aos="flip-up" className="contact__title">
              Obrigado por vir até aqui &#128578;
            </h1>
            <p className="contact__sub">
              Por enquanto isso é tudo! Espero que eu tenha tirado algumas
              dúvidas sobre mim e o que faço. <br /> Sinta-se livre para entrar
              em contato comigo nas redes sociais abaixo e vou responder o mais
              rápido possível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
