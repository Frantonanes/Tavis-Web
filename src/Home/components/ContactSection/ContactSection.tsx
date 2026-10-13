
import { useRef, useState } from 'react'
import type { FormEvent } from 'react'

import { getWhatsappLink } from '../../../data/siteData'
import './ContactSection.css'

export default function ContactSection() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [message, setMessage] = useState('')

  const nameInputRef = useRef<HTMLInputElement>(null)

  const directWhatsappLink = getWhatsappLink(
    'Hola, estuve viendo la web de Estudio Tavis y me gustaría consultar por una página web para mi negocio.'
  )

  function toggleForm() {
    if (!isFormOpen) {
      setIsFormOpen(true)

      requestAnimationFrame(() => {
        nameInputRef.current?.focus()
      })
    } else {
      setIsFormOpen(false)
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const cleanName = name.trim()
    const cleanBusiness = business.trim()
    const cleanMessage = message.trim()

    if (!cleanName || !cleanBusiness || !cleanMessage) {
      return
    }

    const whatsappMessage = [
      'Hola, estuve viendo la web de Estudio Tavis y me gustaría hacer una consulta.',
      '',
      `Mi nombre es ${cleanName}.`,
      `Mi negocio o proyecto: ${cleanBusiness}.`,
      '',
      `Lo que necesito: ${cleanMessage}`,
      '',
      'Me gustaría saber cómo podemos empezar.'
    ].join('\n')

    window.location.assign(getWhatsappLink(whatsappMessage))
  }

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-section__heading">
        <p className="contact-section__eyebrow">
          <span aria-hidden="true" />
          Empecemos tu proyecto
        </p>

        <h2>
          Tu próxima web empieza con{' '}
          <span>una conversación.</span>
        </h2>

        <p className="contact-section__introduction">
          Contanos qué tenés en mente. No necesitás conocimientos
          técnicos ni tener todo definido para hacer tu primera
          consulta.
        </p>
      </div>

      <div className="contact-section__content">
        <div className="contact-section__main">
          <div
            className="contact-section__icon"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
            </svg>
          </div>

          <span className="contact-section__label">
            CONTACTO DIRECTO
          </span>

          <h3>Hablemos de tu idea.</h3>

          <p>
            Puede ser una tienda online, una página para mostrar
            tus servicios o simplemente una idea que todavía
            estás pensando.
          </p>

          <p>
            Escribinos y charlamos sobre lo que necesitás.
            Te ayudamos a encontrar una solución para tu negocio.
          </p>

          <a
            className="contact-section__whatsapp"
            href={directWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribinos por WhatsApp
            <span aria-hidden="true">↗</span>
          </a>

          <span className="contact-section__note">
            Primera consulta gratuita y sin compromiso.
          </span>
        </div>

        <div className="contact-section__alternative">
          <div className="contact-section__alternative-top">
            <span className="contact-section__alternative-label">
              OTRA FORMA DE CONSULTAR
            </span>

            <h3>¿Preferís contarnos un poco más?</h3>

            <p>
              Completá tres datos sencillos y preparamos
              un mensaje para que nos lo envíes por WhatsApp.
            </p>
          </div>

          <button
            className="contact-section__expand"
            type="button"
            aria-expanded={isFormOpen}
            aria-controls="contact-quick-form"
            onClick={toggleForm}
          >
            <span>
              {isFormOpen
                ? 'Ocultar formulario'
                : 'Contanos sobre tu proyecto'}
            </span>

            <span
              className={`contact-section__chevron ${
                isFormOpen
                  ? 'contact-section__chevron--open'
                  : ''
              }`}
              aria-hidden="true"
            >
              ↓
            </span>
          </button>

          {isFormOpen && (
            <form
              className="contact-section__form"
              id="contact-quick-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-section__field">
                <label htmlFor="contact-name">
                  ¿Cómo te llamás?
                </label>

                <input
                  ref={nameInputRef}
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  maxLength={80}
                  required
                />
              </div>

              <div className="contact-section__field">
                <label htmlFor="contact-business">
                  ¿A qué se dedica tu negocio?
                </label>

                <input
                  id="contact-business"
                  type="text"
                  name="business"
                  placeholder="Ej: Tengo una barbería"
                  value={business}
                  onChange={(event) =>
                    setBusiness(event.target.value)
                  }
                  maxLength={120}
                  required
                />
              </div>

              <div className="contact-section__field">
                <label htmlFor="contact-message">
                  ¿Qué te gustaría conseguir con tu web?
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Ej: Quiero mostrar mis servicios y recibir consultas."
                  rows={4}
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  maxLength={1000}
                  required
                />
              </div>

              <button
                className="contact-section__submit"
                type="submit"
              >
                Preparar mi consulta
                <span aria-hidden="true">↗</span>
              </button>

              <p className="contact-section__form-note">
                Se abrirá WhatsApp con tu mensaje preparado.
                Podés revisarlo antes de enviarlo.
              </p>
            </form>
          )}
        </div>
      </div>

      <div className="contact-section__trust">
        <span>
          <strong aria-hidden="true">✓</strong>
          Sin compromiso
        </span>

        <span>
          <strong aria-hidden="true">✓</strong>
          Atención personalizada
        </span>

        <span>
          <strong aria-hidden="true">✓</strong>
          Presupuesto a medida
        </span>
      </div>
    </section>
  )
}
