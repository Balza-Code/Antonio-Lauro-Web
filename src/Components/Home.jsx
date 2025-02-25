import React from "react";
import hero from "./imgs/1.webp";
import contact from "./imgs/2.webp";
import happy from "./imgs/3.webp";
import book from "./imgs/book.png";
import students from "./imgs/students.png";
import teaching from "./imgs/teaching.png";


export const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="draw"></div>
          <div className="draw2"></div>

          <div className="draw4"></div>
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title">
                Bienvenidos a la E.B.N. Antonio Lauro
              </h1>
              <span className="hero__desc">
                {" "}
                Donde la educación y el crecimiento personal van de la mano.
              </span>
            </div>
            <img className="hero__img" src={hero} alt="" />
          </div>
        </div>
      </section>

      <section className="levels">
        <div className="container">
          <div className="draw3"></div>
          <h2 className="levels__title">
            Garantizamos la formación de los niños
          </h2>
          <div className="levels__container">
            <div className="levels__content--1">
              <div className="level__cont">
                <span className="level__text">Primaria</span>
              </div>
            </div>

            <div className="levels__content--2">
              <div className="level__cont">
                <span className="level__text">Secundaria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="learn ">
        <div className="container learning">
          <h2 className="learn__title">
            Brindamos una educación de calidad, fomentando el desarrollo
            académico.
          </h2>
          <div className="learn__container">
            <div className="learn__content">
              <div className="learn__img">
                <img src={book} alt="" />
              </div>
              <p className="learn__text">
                <h3>Pensamiento Innovador</h3>
                Nuestros programas académicos están diseñados para fomentar el
                pensamiento crítico y la creatividad.
              </p>
            </div>

            <div className="learn__content">
              <div className="learn__img">
                <img src={students} alt="" />
              </div>
              <p className="learn__text">
                <h3>Educación Integral</h3>
                Desde la educación primaria hasta la secundaria, brindamos una
                formación integral y personalizada.
              </p>
            </div>

            <div className="learn__content">
              <div className="learn__img">
                <img src={teaching} alt="" />
              </div>
              <p className="learn__text">
                <h3>Atención Personalizada</h3>
                Ofrecemos clases especializadas y personalizadas para aquellos
                niños que encuentran más difícil el aprendizaje.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about ">
        <div className="container">
          <div className="draw5"></div>
          <div className="about__content">
            <div className="about__img">
              <img src={happy} alt="" />
            </div>
            <div className="about__text">
              <h3>
                En la E.B.N. Antonio Lauro estamos Comprometidos con el
                aprendizaje de tus Hijos
              </h3>
              <ul>
                <li>
                  Cultivamos un entorno educativo donde los niños puedan crecer
                  y desarrollarse integralmente.
                </li>
                <li> Fomentamos valores fundamentales.</li>
                <li> Promovemos el conocimiento y la creatividad.</li>
                <li>
                  Preparamos a los estudiantes para enfrentar los desafíos del
                  futuro con confianza.
                </li>
                <li>
                  Desarrollamos habilidades sólidas en nuestros estudiantes.
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="news ">
        <div className="container">
          <div className="news__content">
            <p className="news__text">
              Mantente al día con las ultimas novedades en Antonio lauro
            </p>
            <button className="btn">Ver Más</button>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <div className="contact__container">
            <div className="contact__content">
              <h2 className="contact__text">
                ¿Que esperas para contactarnos? <br /> ¡Te esperamos!
              </h2>
              <img
                className="contact__img"
                src={contact}
                alt=""
              />
            </div>
            <div className="contact__email">
              
            <span className="email">ebn.antoniolauro@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>E.B.N. Antonio Lauro</p>
      </footer>
    </div>
  );
};
