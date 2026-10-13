import './WebStylesSection.css'
import { getWhatsappLink, webStyles } from '../../../data/siteData'

export default function WebStylesSection() {
  return (
    <section className="web-styles" id="estilos">
      <div className="web-styles__heading">
        <p className="web-styles__eyebrow">
          <span aria-hidden="true" />
          Opciones para tu negocio
        </p>

        <h2>
          Hay una web pensada para{' '}
          <span>lo que necesitás.</span>
        </h2>

        <p>
          Descubrí qué tipo de página puede ayudarte a mostrar tu negocio,
          vender tus productos o conseguir nuevas consultas.
        </p>
      </div>

      <div className="web-styles__grid">
        {webStyles.map((style, index) => (
          <article className="web-style-card" key={style.title}>
            <span className="web-style-card__number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className="web-style-card__heading">
              <span>{style.category}</span>
              <h3>{style.title}</h3>
            </div>

            <p className="web-style-card__description">
              {style.text}
            </p>

            <ul className="web-style-card__features">
              {style.features.map((feature) => (
                <li key={feature}>
                  <span aria-hidden="true">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              className="web-style-card__link"
              href={getWhatsappLink(style.message)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Consultar por ${style.category} mediante WhatsApp`}
            >
              Consultar
              <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}