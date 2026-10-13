
import { useEffect, useRef, useState } from 'react'
import { getWhatsappLink } from '../../data/siteData'
import './Footer.css'

type LegalDocument = 'privacy' | 'terms' | 'cookies'

const legalTitles: Record<LegalDocument, string> = {
  privacy: 'Política de privacidad',
  terms: 'Términos de uso',
  cookies: 'Política de cookies'
}

const navigationLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Tipos de web', href: '#estilos' },
  { label: 'Preguntas frecuentes', href: '#preguntas-frecuentes' },
  { label: 'Proyectos', href: '#trabajos' },
  { label: 'Sobre Tavis', href: '#sobre-nosotros' },
  { label: 'Contacto', href: '#contacto' }
]

const whatsappMessage =
  'Hola, estuve viendo la página de Estudio Tavis y me gustaría consultar por el desarrollo de una web.'

export default function Footer() {
  const [openDocument, setOpenDocument] =
    useState<LegalDocument | null>(null)

  const dialogRef = useRef<HTMLElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const lastFocusedElement = useRef<HTMLElement | null>(null)

  const currentYear = new Date().getFullYear()
  const whatsappLink = getWhatsappLink(whatsappMessage)

  function openModal(documentType: LegalDocument) {
    lastFocusedElement.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null

    setOpenDocument(documentType)
  }

  function closeModal() {
    setOpenDocument(null)
  }

  useEffect(() => {
    if (!openDocument) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpenDocument(null)
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return
      }

      const focusableElements =
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )

      const firstElement = focusableElements[0]
      const lastElement =
        focusableElements[focusableElements.length - 1]

      if (!firstElement || !lastElement) {
        event.preventDefault()
        dialogRef.current.focus()
        return
      }

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault()
        lastElement.focus()
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      lastFocusedElement.current?.focus()
    }
  }, [openDocument])

  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <a
              className="site-footer__logo"
              href="#inicio"
              aria-label="Estudio Tavis, volver al inicio"
            >
              Estudio Tavis<span>.</span>
            </a>

            <p>
              Diseñamos y desarrollamos páginas web
              pensadas para cada negocio.
              Soluciones claras, funcionales y a medida.
            </p>

            <span className="site-footer__location">
              Buenos Aires, Argentina
            </span>
          </div>

          <nav
            className="site-footer__navigation"
            aria-label="Navegación del pie de página"
          >
            <span className="site-footer__title">
              Explorar
            </span>

            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-footer__contact">
            <span className="site-footer__title">
              HABLEMOS
            </span>

            <h2>
              ¿Tenés una idea
              <span> en mente?</span>
            </h2>

            <p>
              Contanos sobre tu negocio y lo que necesitás.
              Podemos empezar con una simple conversación.
            </p>

            <a
              className="site-footer__whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar por WhatsApp sobre una página web"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
              </svg>

              Escribinos por WhatsApp

              <span aria-hidden="true">↗</span>
            </a>

            <a
              className="site-footer__instagram"
              href="https://www.instagram.com/estudio.tavis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="18"
                  cy="6"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>

              Seguinos en Instagram
              <span aria-hidden="true">↗</span>
            </a>

            <span className="site-footer__contact-note">
              Primera consulta gratuita y sin compromiso.
            </span>
          </div>
        </div>

        <div
          className="site-footer__legal"
          aria-label="Información legal"
        >
          <span>Información legal</span>

          <div className="site-footer__legal-links">
            <button
              type="button"
              onClick={() => openModal('privacy')}
            >
              Privacidad
            </button>

            <button
              type="button"
              onClick={() => openModal('terms')}
            >
              Términos de uso
            </button>

            <button
              type="button"
              onClick={() => openModal('cookies')}
            >
              Cookies
            </button>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {currentYear} Estudio Tavis.
            Todos los derechos reservados.
          </p>

          <span>
            Diseño y desarrollo web en Argentina.
          </span>
        </div>
      </footer>

      {openDocument && (
        <div
          className="legal-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal()
            }
          }}
        >
          <article
            ref={dialogRef}
            className="legal-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
            tabIndex={-1}
          >
            <button
              ref={closeButtonRef}
              className="legal-modal__close"
              type="button"
              onClick={closeModal}
              aria-label="Cerrar documento"
            >
              <span aria-hidden="true">×</span>
            </button>

            <div className="legal-modal__content">
              <span className="legal-modal__eyebrow">
                Información legal
              </span>

              <h2 id="legal-modal-title">
                {legalTitles[openDocument]}
              </h2>

              {openDocument === 'privacy' && (
                <>
                  <p className="legal-modal__updated">
                    Información vigente del sitio
                  </p>

                  <section>
                    <h3>Responsable</h3>
                    <p>
                      Estudio Tavis es un estudio de
                      desarrollo web dirigido por Franco
                      Toñanes, con sede en Buenos Aires,
                      Argentina.
                    </p>
                  </section>

                  <section>
                    <h3>Información proporcionada</h3>
                    <p>
                      Podés contactarnos directamente por
                      WhatsApp o utilizar el formulario rápido
                      disponible en esta web. Este formulario
                      permite preparar un mensaje con tu nombre,
                      negocio y consulta para abrirlo en WhatsApp.
                      No se envía automáticamente ni se almacena
                      en una base de datos propia del formulario.
                    </p>
                  </section>

                  <section>
                    <h3>Finalidad</h3>
                    <p>
                      La información que decidas enviarnos
                      se utiliza para responder consultas,
                      evaluar proyectos, preparar presupuestos
                      y mantener comunicaciones relacionadas
                      con nuestros servicios.
                    </p>
                  </section>

                  <section>
                    <h3>Servicios de terceros</h3>
                    <p>
                      Al utilizar enlaces a WhatsApp, Instagram
                      u otras plataformas externas, se aplican
                      también las políticas de privacidad de
                      sus respectivos proveedores. Estudio Tavis
                      no vende ni comercializa los datos
                      personales recibidos.
                    </p>
                  </section>

                  <section>
                    <h3>Derechos sobre tus datos</h3>
                    <p>
                      Podés solicitar el acceso, la
                      actualización, la rectificación o la
                      eliminación de tus datos a través de
                      los canales de contacto publicados
                      en esta web, conforme a la legislación
                      aplicable.
                    </p>
                  </section>

                  <section>
                    <h3>Conservación y seguridad</h3>
                    <p>
                      Los datos se conservan durante el tiempo
                      necesario para atender consultas, gestionar
                      la relación comercial o cumplir con
                      obligaciones legales. Adoptamos medidas
                      razonables para proteger la información
                      que recibimos.
                    </p>
                  </section>
                </>
              )}

              {openDocument === 'terms' && (
                <>
                  <p className="legal-modal__updated">
                    Condiciones generales de uso
                  </p>

                  <section>
                    <h3>Finalidad del sitio</h3>
                    <p>
                      Esta página presenta los servicios
                      y proyectos de Estudio Tavis.
                      Su contenido es informativo y puede
                      ser actualizado.
                    </p>
                  </section>

                  <section>
                    <h3>Consultas y presupuestos</h3>
                    <p>
                      Realizar una consulta no implica
                      contratar un servicio. Cada proyecto
                      se evalúa individualmente y se presenta
                      un presupuesto personalizado, sujeto
                      a la aceptación de ambas partes.
                    </p>
                  </section>

                  <section>
                    <h3>Contratación y pagos</h3>
                    <p>
                      Los precios, las cuotas, los plazos
                      y las condiciones de pago se acuerdan
                      en cada presupuesto. Habitualmente
                      solicitamos una seña inicial del 10%
                      para comenzar el desarrollo.
                    </p>
                  </section>

                  <section>
                    <h3>Plazos de desarrollo</h3>
                    <p>
                      El tiempo de entrega depende del tipo
                      de web, las funcionalidades solicitadas,
                      la disponibilidad y las necesidades
                      del cliente. Se establece una fecha
                      estimada en cada propuesta.
                    </p>
                  </section>

                  <section>
                    <h3>Dominio y mantenimiento</h3>
                    <p>
                      El presupuesto inicial contempla
                      el dominio y un período de mantenimiento
                      incluido, cuya duración se acuerda
                      según el proyecto. Posteriormente,
                      el mantenimiento puede incluir
                      alojamiento, soporte, modificaciones
                      acordadas y renovación del dominio,
                      según las condiciones del plan contratado.
                    </p>
                  </section>

                  <section>
                    <h3>Propiedad del proyecto</h3>
                    <p>
                      Una vez abonado completamente el desarrollo,
                      el cliente adquiere los derechos sobre
                      su página web conforme al presupuesto
                      y a las condiciones acordadas, respetando
                      las licencias y los derechos de terceros
                      que pudieran corresponder.
                    </p>
                  </section>

                  <section>
                    <h3>Finalización del mantenimiento</h3>
                    <p>
                      El mantenimiento mensual no es obligatorio
                      de forma permanente. Si el cliente decide
                      finalizarlo, puede coordinar el traslado
                      de su web a otro proveedor. El alojamiento,
                      las renovaciones y otros servicios externos
                      necesarios para mantenerla funcionando
                      deberán gestionarse por separado.
                    </p>
                  </section>

                  <section>
                    <h3>Propiedad intelectual del sitio</h3>
                    <p>
                      Los textos, diseños y elementos visuales
                      propios de esta página pertenecen a
                      Estudio Tavis, salvo indicación contraria.
                      Los proyectos exhibidos conservan
                      los derechos correspondientes a sus
                      respectivos propietarios.
                    </p>
                  </section>

                  <section>
                    <h3>Enlaces externos</h3>
                    <p>
                      Este sitio puede incluir enlaces
                      a plataformas externas. Estudio Tavis
                      no controla su disponibilidad,
                      funcionamiento ni políticas.
                    </p>
                  </section>

                  <section>
                    <h3>Legislación aplicable</h3>
                    <p>
                      Estas condiciones se interpretan
                      conforme a la legislación vigente
                      de la República Argentina y sin
                      afectar los derechos irrenunciables
                      de consumidores y usuarios.
                    </p>
                  </section>
                </>
              )}

              {openDocument === 'cookies' && (
                <>
                  <p className="legal-modal__updated">
                    Información sobre almacenamiento
                  </p>

                  <section>
                    <h3>Uso de cookies</h3>
                    <p>
                      Según la configuración actual declarada
                      de esta web, no utilizamos cookies
                      publicitarias ni de seguimiento.
                      Esta información deberá actualizarse
                      si incorporamos herramientas que
                      cambien ese funcionamiento.
                    </p>
                  </section>

                  <section>
                    <h3>Preferencia de tema</h3>
                    <p>
                      La elección entre modo claro y oscuro
                      se guarda localmente en el navegador
                      mediante localStorage, para recordar
                      la preferencia visual.
                    </p>
                  </section>

                  <section>
                    <h3>Servicios externos</h3>
                    <p>
                      Al acceder a servicios como WhatsApp
                      o Instagram, sus proveedores pueden
                      utilizar cookies y otras tecnologías
                      de almacenamiento conforme a sus
                      propias políticas.
                    </p>
                  </section>

                  <section>
                    <h3>Cambios futuros</h3>
                    <p>
                      Si incorporamos herramientas de
                      analítica, publicidad o medición,
                      revisaremos esta política y
                      solicitaremos el consentimiento
                      correspondiente cuando sea necesario.
                    </p>
                  </section>

                  <section>
                    <h3>Control del almacenamiento</h3>
                    <p>
                      Podés gestionar o eliminar los datos
                      almacenados localmente desde la
                      configuración de tu navegador.
                    </p>
                  </section>
                </>
              )}
            </div>
          </article>
        </div>
      )}
    </>
  )
}
