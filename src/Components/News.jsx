import React from "react";
import escuela2 from './imgs/escuela.jpeg';

export const News = () => {
  return (
    <div>
      <div className="container">
        <h1 className="news__title">
          ¡Enterate de las ultimas novedades en Antonio Lauro Aqui y en nuestras
          redes sociales!
        </h1>

        <div className="socials">
          
        </div>

        <article className="news__content--page">
          <img src={escuela2} alt="" />
          <div className="news__text--page">
            <h2>¡Antonio Lauro Completamente renovada!</h2>
            <p>
              Con entusiasmo y dedicación, la Escuela Antonio Lauro presenta su
              renovada infraestructura: aulas equipadas, áreas recreativas
              ampliadas y tecnología de vanguardia, listas para recibir a
              nuestra comunidad en un año escolar lleno de oportunidades
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};
