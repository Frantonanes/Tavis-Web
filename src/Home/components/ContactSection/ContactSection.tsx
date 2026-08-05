import { contactOptions } from '../../../data/siteData'
import './ContactSection.css'

const initialInformation = [
  'Qué tipo de negocio o proyecto tenés',
  'Qué objetivo querés alcanzar con la web',
  'Si ya contás con textos, imágenes o identidad visual'
]

export default function ContactSection() {
  return (
    <section
  className="contact-section"
  id="contacto"
  aria-labelledby="contact-title"
>
      <div className="contact-section__heading">
        <div>
          <p className="contact-section__eyebrow">
            <span aria-hidden="true" />
            Empecemos un proyecto
          </p>

          <h2 id="contact-title">
  El primer paso puede ser una{' '}
  <span>consulta simple.</span>
</h2>
        </div>

        <p className="contact-section__introduction">
          Contanos qué necesitás y te ayudamos a definir la mejor solución para
          tu negocio, con una propuesta clara y adaptada a tus objetivos.
        </p>
      </div>

      <div className="contact-section__content">
        <article className="contact-section__guide">
          <span className="contact-section__guide-label">
            Para comenzar
          </span>

          <h3>No necesitás tener todo resuelto.</h3>

          <p>
            Con algunos datos iniciales podemos entender tu idea, orientarte y
            definir qué tipo de web se adapta mejor al proyecto.
          </p>

          <ul>
            {initialInformation.map((information) => (
              <li key={information}>
                <span aria-hidden="true">✓</span>
                {information}
              </li>
            ))}
          </ul>

          <div className="contact-section__note">
            <strong>Consulta inicial sin compromiso</strong>
            <span>Comunicación directa durante todo el proceso.</span>
          </div>
        </article>

        <div className="contact-section__options">
          {contactOptions.map((option, index) => (
            <a
              className="contact-section__card"
              href={option.href}
              key={option.title}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${option.title} mediante WhatsApp`}
            >
              <span className="contact-section__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="contact-section__card-content">
                <h3>{option.title}</h3>
                <p>{option.text}</p>
              </div>

              <span className="contact-section__arrow" aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="contact-section__trust">
        <span>Atención personalizada</span>
        <span>Propuesta clara</span>
        <span>Diseño adaptado a tu negocio</span>
      </div>
    </section>
  )
}