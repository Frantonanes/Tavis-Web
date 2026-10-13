
import './AboutSection.css'

const processSteps = [
  {
    number: '01',
    title: 'Nos contás tu idea',
    description:
      'Charlamos sobre tu negocio, qué necesitás y qué te gustaría lograr. No hace falta que tengas todo definido.'
  },
  {
    number: '02',
    title: 'Preparamos una propuesta',
    description:
      'Definimos juntos las secciones, funcionalidades, tiempos estimados y presupuesto. Todo explicado de forma clara.'
  },
  {
    number: '03',
    title: 'Diseñamos y desarrollamos',
    description:
      'Creamos tu página respetando la identidad de tu negocio. Te mostramos los avances y revisamos los ajustes acordados.'
  },
  {
    number: '04',
    title: 'Publicamos tu web',
    description:
      'Comprobamos que todo funcione correctamente, revisamos la experiencia en celulares y dejamos tu web disponible en internet.'
  }
]

export default function AboutSection() {
  return (
    <section className="about-section" id="sobre-nosotros">
      <div className="about-section__heading">
        <p className="about-section__eyebrow">
          <span aria-hidden="true" />
          Sobre Estudio Tavis
        </p>

        <h2>
          Detrás de cada web, hay personas que{' '}
          <span>se involucran con tu proyecto.</span>
        </h2>

        <p className="about-section__introduction">
          Somos un estudio de diseño y desarrollo web que
          acompaña a negocios, profesionales y emprendedores
          a construir su presencia en internet.
        </p>
      </div>

      <div className="about-section__content">
        <article className="about-section__presentation">
          <span className="about-section__label">
            Nuestra forma de pensar
          </span>

          <h3>
            Una buena web empieza por entender tu negocio.
          </h3>

          <p>
            Para nosotros, desarrollar una página web es mucho
            más que conseguir un diseño atractivo. Se trata
            de crear un espacio que represente tu identidad,
            muestre lo que ofrecés y facilite que las personas
            puedan encontrarte y contactarte.
          </p>

          <p>
            Por eso, escuchamos tu idea, te ayudamos a tomar
            decisiones y explicamos cada etapa de manera
            sencilla. Queremos que participes del proyecto,
            sin que necesites conocimientos técnicos.
          </p>

          <div className="about-section__author">
            <span className="about-section__avatar" aria-hidden="true">
              FT
            </span>

            <div className="about-section__author-info">
              <strong>Franco Toñanes</strong>
              <small>Desarrollador y creador de Tavis</small>
            </div>
          </div>
        </article>

        <aside className="about-section__principles">
          <span className="about-section__principles-label">
            Lo que nos importa
          </span>

          <h3>
            Tu proyecto merece atención desde el primer día.
          </h3>

          <ul>
            <li>
              <span aria-hidden="true">✓</span>
              <div>
                <strong>Comunicación directa</strong>
                <p>
                  Hablás con quienes trabajan en tu página,
                  sin intermediarios innecesarios.
                </p>
              </div>
            </li>

            <li>
              <span aria-hidden="true">✓</span>
              <div>
                <strong>Diseño personalizado</strong>
                <p>
                  Cada web se adapta a la identidad y
                  las necesidades de tu negocio.
                </p>
              </div>
            </li>

            <li>
              <span aria-hidden="true">✓</span>
              <div>
                <strong>Acompañamiento</strong>
                <p>
                  Te orientamos durante el desarrollo
                  y resolvemos tus dudas.
                </p>
              </div>
            </li>
          </ul>
        </aside>
      </div>

      <div className="about-process">
        <div className="about-process__heading">
          <div>
            <span className="about-process__eyebrow">
              ASÍ TRABAJAMOS
            </span>

            <h3>
              De la primera charla a{' '}
              <span>tu web online.</span>
            </h3>
          </div>

          <p>
            Un proceso claro, organizado y sin complicaciones.
            Sabés qué estamos haciendo y qué sigue en cada etapa.
          </p>
        </div>

        <ol className="about-process__steps">
          {processSteps.map((step) => (
            <li className="about-process__step" key={step.number}>
              <span className="about-process__number">
                {step.number}
              </span>

              <h4>{step.title}</h4>

              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="about-section__contact">
        <div>
          <h3>¿Tenés una idea para tu negocio?</h3>
          <p>
            No hace falta que tengas todo resuelto.
            Contanos qué tenés en mente y vemos cómo
            podemos ayudarte.
          </p>
        </div>

        <a href="#contacto">
          Contanos tu proyecto
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
