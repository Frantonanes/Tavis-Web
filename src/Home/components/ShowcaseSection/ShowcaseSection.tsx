import type { CSSProperties } from 'react'

import './ShowcaseSection.css'
import { projects } from '../../../data/siteData'

export default function ShowcaseSection() {
  return (
    <section
  className="showcase-section"
  id="trabajos"
  aria-labelledby="showcase-title"
>
      <div className="showcase-section__heading">
        <div>
          <p className="showcase-section__eyebrow">
            <span aria-hidden="true" />
            Proyectos realizados
          </p>

          <h2 id="showcase-title">
  Trabajos que reflejan nuestra forma de{' '}
  <span>diseñar y desarrollar.</span>
</h2>
        </div>

        <p className="showcase-section__description">
          Cada proyecto fue creado según las necesidades, la identidad y los
          objetivos de cada negocio.
        </p>
      </div>

      <div className="showcase-section__grid">
        {projects.map((project, index) => {
          const projectDomain = project.url
            .replace(/^https?:\/\/(www\.)?/, '')
            .replace(/\/$/, '')

          return (
            <a
              className="showcase-project"
              href={project.url}
              key={project.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir el sitio web de ${project.name}`}
              style={
                {
                  '--project-background': project.background,
                  '--project-glow': project.glow
                } as CSSProperties
              }
            >
              <div className="showcase-project__preview">
                <div className="showcase-project__browser">
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
                    className="showcase-project__browser-action"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <div className="showcase-project__screen">
                  <img
                    className="showcase-project__logo"
                    src={project.logo}
                    alt={`Logo del proyecto web ${project.name}`}
                    loading="lazy"
                  />

                  <div
                    className="showcase-project__screen-lines"
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>

              <div className="showcase-project__information">
                <div className="showcase-project__top">
                  <span>
                    Proyecto {String(index + 1).padStart(2, '0')}
                  </span>

                  <span>Web desarrollada</span>
                </div>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <span className="showcase-project__link">
                  Ver proyecto
                  <strong aria-hidden="true">→</strong>
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}