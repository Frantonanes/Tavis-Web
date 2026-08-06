import {
  type ChangeEvent,
  type FormEvent,
  useState
} from 'react'

import { getWhatsappLink } from '../../../data/siteData'
import './ContactSection.css'

type ContactFormData = {
  name: string
  businessName: string
  businessType: string
  websiteType: string
  objective: string
  features: string
  domain: string
  visualIdentity: string
  budget: string
  estimatedDate: string
  additionalDetails: string
}

const initialFormData: ContactFormData = {
  name: '',
  businessName: '',
  businessType: '',
  websiteType: '',
  objective: '',
  features: '',
  domain: '',
  visualIdentity: '',
  budget: '',
  estimatedDate: '',
  additionalDetails: ''
}

const initialInformation = [
  'No necesitás saber qué tipo de web elegir',
  'Podés contarnos tu idea aunque todavía esté empezando',
  'La consulta inicial es sin compromiso'
]

export default function ContactSection() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData)

  const [acceptedPrivacy, setAcceptedPrivacy] =
    useState(false)

  function handleFieldChange(
    event: ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    const fieldName =
      event.target.name as keyof ContactFormData

    setFormData((currentData) => ({
      ...currentData,
      [fieldName]: event.target.value
    }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const message = [
      'Hola, completé el formulario de Estudio Tavis y quiero consultar por un proyecto web.',
      '',
      `Nombre: ${formData.name}`,
      `Negocio o proyecto: ${formData.businessName}`,
      `Rubro o actividad: ${formData.businessType}`,
      `Tipo de web: ${formData.websiteType}`,
      '',
      `Objetivo principal: ${formData.objective}`,
      `Funcionalidades necesarias: ${
        formData.features || 'Todavía no estoy seguro/a'
      }`,
      '',
      `¿Tiene dominio?: ${formData.domain}`,
      `¿Tiene logo o identidad visual?: ${
        formData.visualIdentity
      }`,
      `Presupuesto aproximado: ${
        formData.budget || 'No especificado'
      }`,
      `Fecha estimada: ${
        formData.estimatedDate || 'No especificada'
      }`,
      '',
      `Información adicional: ${
        formData.additionalDetails || 'Sin información adicional'
      }`
    ].join('\n')

    const whatsappLink = getWhatsappLink(message)

    window.open(
      whatsappLink,
      '_blank',
      'noopener,noreferrer'
    )
  }

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
            Contanos tu idea y demos el{' '}
            <span>primer paso.</span>
          </h2>
        </div>

        <p className="contact-section__introduction">
          Completá algunos datos sobre tu negocio y el proyecto.
          Con esa información podremos entender qué necesitás y
          orientarte de una manera más clara.
        </p>
      </div>

      <div className="contact-section__content">
        <article className="contact-section__guide">
          <span className="contact-section__guide-label">
            Antes de comenzar
          </span>

          <h3>No necesitás tener todo resuelto.</h3>

          <p>
            El formulario sirve como punto de partida. Si hay algo
            que todavía no definiste, podemos ayudarte a decidirlo
            durante la consulta.
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
            <strong>¿Qué ocurre después?</strong>

            <span>
              Se abrirá WhatsApp con tus respuestas organizadas.
              Podrás revisar el mensaje antes de enviarlo.
            </span>
          </div>
        </article>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="contact-form__heading">
            <span>Formulario de consulta</span>
            <h3>Hablemos sobre tu proyecto</h3>

            <p>
              Los campos marcados con * son necesarios para preparar
              la consulta.
            </p>
          </div>

          <fieldset className="contact-form__section">
            <legend>Sobre vos y tu negocio</legend>

            <div className="contact-form__grid">
              <div className="contact-form__field">
                <label htmlFor="contact-name">
                  Tu nombre *
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleFieldChange}
                  autoComplete="name"
                  placeholder="Ejemplo: Franco"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-business-name">
                  Nombre del negocio o proyecto *
                </label>

                <input
                  id="contact-business-name"
                  name="businessName"
                  type="text"
                  value={formData.businessName}
                  onChange={handleFieldChange}
                  autoComplete="organization"
                  placeholder="Ejemplo: Mi emprendimiento"
                  required
                />
              </div>

              <div className="contact-form__field contact-form__field--full">
                <label htmlFor="contact-business-type">
                  ¿A qué se dedica? *
                </label>

                <input
                  id="contact-business-type"
                  name="businessType"
                  type="text"
                  value={formData.businessType}
                  onChange={handleFieldChange}
                  placeholder="Ejemplo: indumentaria, gastronomía, servicios profesionales..."
                  required
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="contact-form__section">
            <legend>Sobre la página web</legend>

            <div className="contact-form__grid">
              <div className="contact-form__field contact-form__field--full">
                <label htmlFor="contact-website-type">
                  ¿Qué tipo de web necesitás? *
                </label>

                <select
                  id="contact-website-type"
                  name="websiteType"
                  value={formData.websiteType}
                  onChange={handleFieldChange}
                  required
                >
                  <option value="">
                    Seleccioná una opción
                  </option>

                  <option value="Web de servicios">
                    Web de servicios
                  </option>

                  <option value="Catálogo digital">
                    Catálogo digital
                  </option>

                  <option value="Tienda e-commerce">
                    Tienda e-commerce
                  </option>

                  <option value="Landing page">
                    Landing page
                  </option>

                  <option value="Web personal">
                    Web personal
                  </option>

                  <option value="Mantenimiento web">
                    Mantenimiento web
                  </option>

                  <option value="Todavía no estoy seguro/a">
                    Todavía no estoy seguro/a
                  </option>
                </select>
              </div>

              <div className="contact-form__field contact-form__field--full">
                <label htmlFor="contact-objective">
                  ¿Qué querés conseguir con la web? *
                </label>

                <textarea
                  id="contact-objective"
                  name="objective"
                  value={formData.objective}
                  onChange={handleFieldChange}
                  rows={4}
                  placeholder="Ejemplo: mostrar mis servicios, recibir consultas o vender productos..."
                  required
                />
              </div>

              <div className="contact-form__field contact-form__field--full">
                <label htmlFor="contact-features">
                  ¿Qué te gustaría que pueda hacer?
                </label>

                <textarea
                  id="contact-features"
                  name="features"
                  value={formData.features}
                  onChange={handleFieldChange}
                  rows={3}
                  placeholder="Ejemplo: mostrar productos, recibir pedidos, tener un carrito o administrar contenidos..."
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="contact-form__section">
            <legend>Estado actual del proyecto</legend>

            <div className="contact-form__grid">
              <div className="contact-form__field">
                <label htmlFor="contact-domain">
                  ¿Ya tenés dominio? *
                </label>

                <select
                  id="contact-domain"
                  name="domain"
                  value={formData.domain}
                  onChange={handleFieldChange}
                  required
                >
                  <option value="">
                    Seleccioná una opción
                  </option>

                  <option value="Sí">Sí</option>
                  <option value="No">No</option>

                  <option value="No sé qué es o necesito orientación">
                    No sé qué es o necesito orientación
                  </option>
                </select>
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-visual-identity">
                  ¿Tenés logo o identidad visual? *
                </label>

                <select
                  id="contact-visual-identity"
                  name="visualIdentity"
                  value={formData.visualIdentity}
                  onChange={handleFieldChange}
                  required
                >
                  <option value="">
                    Seleccioná una opción
                  </option>

                  <option value="Sí, ya tengo">
                    Sí, ya tengo
                  </option>

                  <option value="Tengo algunas cosas">
                    Tengo algunas cosas
                  </option>

                  <option value="No">
                    No
                  </option>
                </select>
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-budget">
                  Presupuesto aproximado
                </label>

                <input
                  id="contact-budget"
                  name="budget"
                  type="text"
                  value={formData.budget}
                  onChange={handleFieldChange}
                  inputMode="numeric"
                  placeholder="Opcional"
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-estimated-date">
                  ¿Para cuándo la necesitarías?
                </label>

                <input
                  id="contact-estimated-date"
                  name="estimatedDate"
                  type="text"
                  value={formData.estimatedDate}
                  onChange={handleFieldChange}
                  placeholder="Opcional"
                />
              </div>

              <div className="contact-form__field contact-form__field--full">
                <label htmlFor="contact-additional-details">
                  ¿Querés agregar algo más?
                </label>

                <textarea
                  id="contact-additional-details"
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleFieldChange}
                  rows={4}
                  placeholder="Podés contarnos cualquier detalle que consideres importante."
                />
              </div>
            </div>
          </fieldset>

          <label className="contact-form__consent">
            <input
              type="checkbox"
              checked={acceptedPrivacy}
              onChange={(event) =>
                setAcceptedPrivacy(event.target.checked)
              }
              required
            />

            <span>
              Acepto que la información ingresada se utilice para
              iniciar esta consulta mediante WhatsApp. *
            </span>
          </label>

          <button
            className="contact-form__submit"
            type="submit"
          >
            Preparar consulta en WhatsApp
            <span aria-hidden="true">→</span>
          </button>

          <p className="contact-form__privacy-note">
            Estudio Tavis no almacena las respuestas de este
            formulario. La información se incorpora al mensaje que
            vas a enviar mediante WhatsApp.
          </p>
        </form>
      </div>

      <div className="contact-section__trust">
        <span>Consulta inicial sin compromiso</span>
        <span>Atención personalizada</span>
        <span>Información clara y organizada</span>
      </div>
    </section>
  )
}