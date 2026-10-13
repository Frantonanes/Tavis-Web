
import { useState } from 'react'
import './FaqSection.css'

const faqs = [
  {
    question: '¿Cuánto cuesta desarrollar una página web?',
    answer:
      'Cada proyecto tiene necesidades diferentes, por eso trabajamos con presupuestos personalizados. El precio depende del tipo de página, las funcionalidades y el alcance del desarrollo. Contanos tu idea y preparamos una propuesta clara, sin compromiso.'
  },
  {
    question: '¿Puedo pagar mi página web en cuotas?',
    answer:
      '¡Sí! Ofrecemos planes de pago flexibles, acordados con cada cliente. Para comenzar solicitamos una seña del 10% del presupuesto. El resto se organiza en cuotas y, cuando corresponde, podemos coordinarlas con el mantenimiento para evitar que se acumulen pagos demasiado elevados.'
  },
  {
    question: '¿Cuánto tiempo tarda en estar lista?',
    answer:
      'El plazo depende de las características de tu página y de cuándo necesitás tenerla lista. Antes de empezar, charlamos sobre tus tiempos y acordamos una fecha de entrega realista, teniendo en cuenta la complejidad del proyecto y nuestra disponibilidad.'
  },
  {
    question: '¿Qué necesito para empezar?',
    answer:
      'Solamente necesitamos conocer tu negocio y qué te gustaría lograr con tu web. Si ya tenés logo, imágenes, textos o referencias, podemos utilizarlos como punto de partida. Y si todavía no tenés todo definido, te ayudamos a organizar las ideas.'
  },
  {
    question: '¿El dominio y el mantenimiento están incluidos?',
    answer:
      'El dominio está contemplado en el presupuesto inicial. Además, cada proyecto incluye un período de mantenimiento sin costo adicional, cuya duración depende del presupuesto acordado. Luego ofrecemos un servicio mensual que contempla alojamiento, soporte técnico, modificaciones acordadas y la renovación anual del dominio.'
  },
  {
    question: '¿Qué pasa si no quiero continuar con el mantenimiento?',
    answer:
      'Tu página sigue siendo tuya. Si decidís no continuar con nuestro servicio, podés conservar tu web y trasladarla a otro alojamiento. Te ayudamos a coordinar la transición. A partir de ese momento, el alojamiento, el dominio y los servicios necesarios para mantenerla online quedan bajo tu responsabilidad.'
  },
  {
    question: '¿La página web es realmente mía?',
    answer:
      'Sí. Una vez abonado el desarrollo, la página web te pertenece según las condiciones acordadas. En Tavis podemos encargarnos de su alojamiento y mantenimiento, pero eso no significa que estés obligado a contratar nuestro servicio de forma permanente.'
  }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  function toggleFaq(index: number) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="faq-section" id="preguntas-frecuentes">
      <div className="faq-section__heading">
        <div>
          <p className="faq-section__eyebrow">
            <span aria-hidden="true" />
            Preguntas frecuentes
          </p>

          <h2>
            Todo lo que necesitás saber{' '}
            <span>antes de empezar.</span>
          </h2>
        </div>

        <p className="faq-section__introduction">
          Sabemos que contratar una página web puede generar
          muchas dudas. Por eso, queremos que tengas toda la
          información clara desde el primer momento.
        </p>
      </div>

      <div className="faq-section__content">
        <div className="faq-section__list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <article
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                key={faq.question}
              >
                <h3 className="faq-item__heading">
                  <button
                    type="button"
                    className="faq-item__trigger"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="faq-item__number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="faq-item__question">
                      {faq.question}
                    </span>

                    <span
                      className="faq-item__icon"
                      aria-hidden="true"
                    >
                      <span />
                      <span />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    className="faq-item__answer"
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        <aside className="faq-section__help">
          <div className="faq-section__help-icon" aria-hidden="true">
            ?
          </div>

          <span className="faq-section__help-label">
            HABLEMOS DE TU PROYECTO
          </span>

          <h3>¿Te quedó alguna duda?</h3>

          <p>
            No hace falta que tengas todo decidido.
            Podemos charlar sobre tu negocio, conocer
            lo que necesitás y ayudarte a encontrar
            la mejor solución.
          </p>

          <a href="#contacto" className="faq-section__help-link">
            Hacer una consulta
            <span aria-hidden="true">→</span>
          </a>

          <span className="faq-section__help-note">
            Primera consulta sin compromiso.
          </span>
        </aside>
      </div>
    </section>
  )
}
