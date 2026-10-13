
import './ShowcaseSection.css'
import { projects } from '../../../data/siteData'

export default function ShowcaseSection() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  )

  return (
    <section className="showcase-section" id="trabajos">
      <div className="showcase-section__heading">
        <div>
          <p className="showcase-section__eyebrow">
            <span aria-hidden="true" />
            Proyectos realizados
          </p>

          <h2>
            Cada negocio es diferente.{' '}
            <span>Su web también debería serlo.</span>
          </h2>
        </div>

        <p className="showcase-section__description">
          Conocé algunos de los proyectos que desarrollamos.
          Cada página fue pensada para representar la identidad
          de su negocio y responder a sus necesidades.
        </p>
      </div>

      <div className="showcase-section__projects">
        {featuredProjects.map((project, index) => {
          const projectDomain = new URL(project.url)
            .hostname.replace(/^www\./, '')

          return (
            <article
              className="showcase-project"
              key={project.name}
              style={{
                '--project-background': project.background,
                '--project-glow': project.glow
              } as React.CSSProperties}
            >
              <div className="showcase-project__visual">
                <div className="showcase-project__visual-glow" />

                <div className="showcase-project__browser">
                  <div className="showcase-project__browser-top">
                    <div
                      className="showcase-project__browser-dots"
                      aria-hidden="true"
                    >
                      <span />
                      <span />
                      <span />
                    </div>

                    <span className="showcase-project__domain">
                      {projectDomain}
                    </span>

                    <span
                      className="showcase-project__browser-icon"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>

                  <div className="showcase-project__screen">
                    <img
                      src={project.preview}
                      alt={`Captura de la página web de ${project.name}`}
                      loading="lazy"
                      decoding="async"
                      width="1448"
                      height="1086"
                    />
                  </div>
                </div>

                <span className="showcase-project__visual-label">
                  Proyecto desarrollado por Tavis
                </span>
              </div>

              <div className="showcase-project__content">
                <div className="showcase-project__metadata">
                  <span>
                    Proyecto {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="showcase-project__type">
                    {project.type}
                  </span>
                </div>

                <h3>{project.name}</h3>

                <p className="showcase-project__description">
                  {project.description}
                </p>

                <div className="showcase-project__features">
                  <h4>Qué desarrollamos</h4>

                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>
                        <span aria-hidden="true">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="showcase-project__actions">
                  <a
                    className="showcase-project__visit"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar el sitio web de ${project.name} (abre en otra pestaña)`}
                  >
                    Visitar sitio web
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="showcase-section__footer">
        <div>
          <span className="showcase-section__footer-label">
            TU PROYECTO PUEDE SER EL PRÓXIMO
          </span>

          <h3>¿Te imaginás una web así para tu negocio?</h3>

          <p>
            Contanos qué tenés en mente y veamos cómo podemos
            llevar tu idea a internet.
          </p>
        </div>

        <a href="#contacto" className="showcase-section__cta">
          Hablemos de tu proyecto
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
