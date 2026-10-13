import { useState } from 'react'
import './WebStylesSection.css'
import { getWhatsappLink, webStyles } from '../../../data/siteData'

export default function WebStylesSection() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  return (
    <section className="web-styles" id="estilos" aria-labelledby="web-styles-title">
      <div className="web-styles__heading">
        <p className="web-styles__eyebrow">
          <span aria-hidden="true" />
          Soluciones web para tu negocio
        </p>
        <h2 id="web-styles-title">
          Hay una web pensada para <span>lo que necesitás.</span>
        </h2>
        <p>
          Desde mostrar tus servicios hasta vender tus productos online.
          Creamos páginas web adaptadas a tu negocio y a lo que querés lograr.
        </p>
      </div>

      <div className="web-styles__grid">
        {webStyles.map((style, index) => {
          const isExpanded = expandedService === style.title
          const detailsId = `web-style-details-${index}`

          return (
            <article className="web-style-card" key={style.title}>
              <div className="web-style-card__top">
                <span className="web-style-card__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="web-style-card__category">{style.category}</span>
              </div>

              <h3>{style.title}</h3>
              <p className="web-style-card__description">{style.text}</p>

              <button
                className="web-style-card__details-toggle"
                type="button"
                aria-expanded={isExpanded}
                aria-controls={detailsId}
                onClick={() => setExpandedService(isExpanded ? null : style.title)}
              >
                {isExpanded ? 'Ocultar detalles' : 'Ver qué puede incluir'}
                <span aria-hidden="true">{isExpanded ? '−' : '+'}</span>
              </button>

              {isExpanded && (
                <div className="web-style-card__details" id={detailsId}>
                  <p>Según las necesidades de tu proyecto, puede incluir:</p>
                  <ul>
                    {style.features.map((feature) => (
                      <li key={feature}>
                        <span aria-hidden="true">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <a
                className="web-style-card__link"
                href={getWhatsappLink(style.message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Consultar por ${style.title} mediante WhatsApp`}
              >
                Consultar por esta web <span aria-hidden="true">↗</span>
              </a>
            </article>
          )
        })}
      </div>

      <div className="web-styles__maintenance">
        <div className="web-styles__maintenance-icon" aria-hidden="true">✦</div>
        <div className="web-styles__maintenance-content">
          <span>Servicio complementario</span>
          <h3>Tu web también necesita estar cuidada.</h3>
          <p>
            Ofrecemos mantenimiento para mantener tu página actualizada,
            resolver inconvenientes y realizar ajustes cuando los necesites.
            El alcance se define según cada proyecto.
          </p>
        </div>
        <a
          href={getWhatsappLink('Hola, quiero consultar por el servicio de mantenimiento web.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar mantenimiento <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="web-styles__help">
        <div>
          <span>Te ayudamos a elegir</span>
          <h3>¿No sabés qué tipo de web necesitás?</h3>
          <p>
            No hace falta que tengas todo definido. Contanos qué hacés y qué te
            gustaría conseguir. Te ayudamos a encontrar la solución más adecuada.
          </p>
        </div>
        <a
          href={getWhatsappLink('Hola, tengo un negocio y me gustaría que me ayuden a elegir qué tipo de página web necesito.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hablemos de tu proyecto <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
