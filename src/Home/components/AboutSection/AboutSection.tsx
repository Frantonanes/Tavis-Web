import './AboutSection.css'

const capabilities = [
  'Diseño adaptable a celulares',
  'Catálogos y tiendas online',
  'Paneles de administración',
  'Integraciones con WhatsApp',
  'Dominio y publicación',
  'Optimización y soporte'
]

export default function AboutSection() {
  return (
    <section className="about-section" id="sobre-nosotros">
      <div className="about-section__heading">
        <p className="about-section__eyebrow">
          <span aria-hidden="true" />
          Sobre Tavis
        </p>

        <h2>
          Creamos soluciones digitales pensadas para{' '}
          <span>objetivos reales.</span>
        </h2>

        <p className="about-section__introduction">
          Tavis es un estudio de desarrollo web que ayuda a negocios,
          profesionales y emprendimientos a construir una presencia digital
          clara, funcional y preparada para crecer.
        </p>
      </div>

      <div className="about-section__content">
        <article className="about-section__presentation">
          <span className="about-section__label">
            Nuestra forma de trabajar
          </span>

          <h3>
            Cada proyecto empieza por entender qué necesita tu negocio.
          </h3>

          <p>
            No se trata solamente de crear una página atractiva. Organizamos la
            información, definimos una estructura clara y desarrollamos una
            solución que ayude a presentar tus servicios, mostrar tus productos
            o generar nuevas consultas.
          </p>

          <p>
            Acompañamos el proceso desde la idea inicial hasta la publicación,
            con comunicación directa y decisiones explicadas de forma simple.
          </p>

          <div className="about-section__author">
            <span aria-hidden="true">FT</span>

            <div>
              <strong>Franco Toñanes</strong>
              <small>Desarrollador y creador de Tavis</small>
            </div>
          </div>
        </article>

        <aside className="about-section__capabilities">
          <div className="about-section__capabilities-heading">
            <span>Qué podemos desarrollar</span>
            <strong>Soluciones adaptadas a cada proyecto</strong>
          </div>

          <ul>
            {capabilities.map((capability) => (
              <li key={capability}>
                <span aria-hidden="true">✓</span>
                {capability}
              </li>
            ))}
          </ul>

          <a href="#contacto">
            Contanos sobre tu proyecto
            <span aria-hidden="true">→</span>
          </a>
        </aside>
      </div>
    </section>
  )
}