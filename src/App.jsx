import './App.css';
import userPng from './assets/images/user.png';

function App() {
  return (
    <>
      <header>
        <title>Hoja de Vida - Sergio Suarez</title>
      </header>
      <main>
          <section id="inicio" className="inicio">
              <div className="contenedor-inicio">
                  <h2>Sergio Suarez</h2>
                  <img src={userPng} className="img" alt=""/>
              </div>     
          </section>

          <section id="sobremi" className="sobremi">
              <h2>Sobre Mi</h2>
              <p>Mi nombre es Sergio Alejandro Suarez tengo 18 años, estudiante de Tecnologia en Sistemas en la Universidad de Caldas, actualmente
                cursando el cuarto semestre. Mis ganas de aprender me permiten aprender de manera rapida. Soy bueno trabajando en equipo
                y permitiendo soluciones de los demas, Me apasiona mucho la Tecnologia y la Programacion resolver problemas y aprender nuevas tecnologias.
              </p>
              <ul>
                <li>Aprendiendo .NET MVC</li>
                <li>Aprendiendo C#</li>
                <li>En curso Programacion Web</li>
              </ul>
          </section>

          <section id="hobbies" className="hobbies">
            <h2>Hobbies</h2>
            <ul>
              <li> <b>Tecnologia :</b> Aprender nuevas tecnologias,programar y ver videos.</li>
              <li> <b>Videojuegos/Series :</b> Me gusta jugar videojuegos en mis tiempos libres, tambien me gusta ver series.</li>
              <li> <b>Futbol :</b> Tambien me gusta jugar y ver futbol en mis tiempos libres.</li>
            </ul>
          </section>

          <section id="experiencia">
              <h2>Experiencia Laboral</h2>
              <ul>
                  <li>
                      <h3>No tengo Experiencia Laboral</h3>
                      <p>Por el momento no cuento con experiencia laboral.</p>
                  </li>
              </ul>
          </section>

          <section id="educacion">
              <h2>Educación</h2>
              <ul>
                  <li>
                      <h4>Colegio Eugenio Pacelli</h4>
                      <p>Bachillerato - 2022.</p>
                  </li>
                  <li>
                      <h3>Universidad Autonoma de Manizales. (Universidad en tu colegio)</h3>
                      <p>Técnico en Programación de Computadores - 2022.</p>
                  </li>
                  <li>
                      <h3>Universidad de Caldas.</h3>
                      <p>Tecnólogo en Sistemas Informáticos - 2025.</p>
                  </li>
              </ul>
          </section>

          <section id="aptitudes">
              <h2>Aptitudes</h2>
              <ul>
                <li>Trabajo en Equipo</li>
                <li>Responsable</li>
                <li>Proactivo</li>
              </ul>
          </section>

        </main>

          <footer>
              <p> <b>Contacto: chechonieto235@gmail.com </b></p>
              <div className="form-group">
                <form action="">
                  <label for="asunto" className="form-label">Asunto</label>
                  <input className="input" type="text" name="asunto" id="asunto"/>
                  <label for="email" className="form-label">Email</label>
                  <input className="input" type="email" name="email" id="email"/>
                  <textarea className="textarea" rows="3"name="message" placeholder="Mensaje"></textarea>
                  <button className="button-enviar">Enviar</button>
                </form>
              </div>
          </footer>
    </>
  );
}

export default App;
