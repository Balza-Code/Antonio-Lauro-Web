import React from "react";

export const About = () => {
  return (
    <div>
      <section className="about-us">
        <div className="container">
          <div className="about-us__img">
            <img src="./escuela.jpg" alt="" />
          </div>


          <article className="about-us__intro">
            
            <div className="intro__text">

            <h2>Formando Futuros con Pasión y Propósito</h2>
            <p>
              En Antonio Lauro creemos que la educación es la base sobre la que
              se construyen sueños, carácter y soluciones para el mundo. Desde
              nuestro inicio en 1975, nos hemos comprometido a ofrecer una
              educación integral que combine excelencia académica, crecimiento
              personal y conciencia social, preparando a nuestros estudiantes
              para los desafíos del mañana.
            </p>
            </div>
            <div className="intro__img">
              <img src="./ambicion.png" alt="" />
            </div>
          </article>

          <div className="about-us__flex">
            <article className="about-us__mision">
              <h2>Nuestra Mision</h2>
              <p>
                Inspiramos a cada estudiante a descubrir su potencial único
                mediante un enfoque pedagógico innovador, centrado en:
              </p>
              <ul>
                <li>
                  Aprendizaje activo: Proyectos prácticos y colaborativos que
                  conectan con la vida real.
                </li>
                <li>
                  Desarrollo emocional: Programas de inteligencia emocional y
                  valores humanos
                </li>
                <li>
                  Inclusión: Un ambiente donde cada niño, sin importar su ritmo
                  de aprendizaje, encuentra su lugar.
                </li>
              </ul>
            </article>

            <article className="about-us__why">
              <h2>¿Por Qué Elegirnos?</h2>
              <ul>
                <li>
                  Profesores comprometidos.
                </li>
                <li>
                  Tecnología y tradición.
                </li>
                
              </ul>
            </article>
          </div>

          <div className="final__container">
            <div className="final__img">
              <img src="./unidad.avif" alt="" />
            </div>
            <article className="about-us__final">
              <h2>Una Familia Educativa</h2>
              <p>
                Más que una escuela, somos una comunidad donde padres,
                estudiantes y docentes trabajamos juntos. Organizamos eventos
                culturales, ferias científicas y actividades extracurriculares
                que fortalecen la confianza y el trabajo en equipo.
              </p>

              <h2>Mirando al Futuro</h2>
              <p>
                Nuestra visión es ser un referente en educación transformadora,
                donde cada alumno no solo aprenda, sino que también aprenda a
                ser. Con un enfoque en habilidades del siglo XXI (como
                pensamiento crítico, resiliencia y adaptabilidad), estamos
                construyendo los líderes, creadores y soñadores del mañana.
              </p>
            </article>
          </div>
          <div className="about-us__welcome">
            <h1>
              ¡Bienvenidos a Antonio Lauro, donde cada día es una oportunidad
              para crecer!
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};
