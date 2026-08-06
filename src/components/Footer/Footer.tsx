import { useEffect, useRef, useState } from 'react'

import './Footer.css'

type LegalDocument = 'privacy' | 'terms' | 'cookies'

export default function Footer() {
  const [openDocument, setOpenDocument] =
    useState<LegalDocument | null>(null)

  const modalRef = useRef<HTMLElement>(null)
  const previousFocusedElement = useRef<HTMLElement | null>(null)

  const currentYear = new Date().getFullYear()

  useEffect(() => {
    if (!openDocument) {
      return
    }

    previousFocusedElement.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusableSelector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(',')

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDocument(null)
        return
      }

      if (
        event.key !== 'Tab' ||
        !modalRef.current
      ) {
        return
      }

      const focusableElements = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          focusableSelector
        )
      )

      const firstElement = focusableElements[0]
      const lastElement =
        focusableElements[focusableElements.length - 1]

      if (!firstElement || !lastElement) {
        return
      }

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault()
        lastElement.focus()
        return
      }

      if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previousFocusedElement.current?.focus()
    }
  }, [openDocument])

  function closeModal() {
    setOpenDocument(null)
  }

  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <a
              className="site-footer__logo"
              href="#inicio"
              aria-label="Volver al inicio de Estudio Tavis"
            >
              Estudio Tavis<span>.</span>
            </a>

            <p>
              Diseñamos y desarrollamos soluciones web claras,
              funcionales y adaptadas a los objetivos de cada negocio.
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
              Navegación
            </span>

            <a href="#inicio">Inicio</a>
            <a href="#estilos">Tipos de web</a>
            <a href="#trabajos">Proyectos</a>
            <a href="#sobre-nosotros">
              Sobre Estudio Tavis
            </a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className="site-footer__contact">
            <span className="site-footer__title">
              Empecemos
            </span>

            <h2>¿Tenés una idea para tu próxima web?</h2>

            <p>
              Contanos sobre tu proyecto y te ayudamos a encontrar la
              solución indicada.
            </p>

            <a href="#contacto">
              Hablemos de tu proyecto
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div
          className="site-footer__legal"
          aria-label="Información legal"
        >
          <button
            type="button"
            onClick={() => setOpenDocument('privacy')}
          >
            Privacidad
          </button>

          <button
            type="button"
            onClick={() => setOpenDocument('terms')}
          >
            Términos de uso
          </button>

          <button
            type="button"
            onClick={() => setOpenDocument('cookies')}
          >
            Cookies
          </button>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {currentYear} Estudio Tavis. Todos los derechos
            reservados.
          </p>

          <span>Diseño y desarrollo web</span>
        </div>
      </footer>

      {openDocument && (
        <div
          className="legal-modal"
          onMouseDown={closeModal}
        >
          <article
            ref={modalRef}
            className="legal-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="legal-modal__close"
              type="button"
              onClick={closeModal}
              aria-label="Cerrar documento legal"
              autoFocus
            >
              <span aria-hidden="true">×</span>
            </button>

            <div className="legal-modal__content">
              {openDocument === 'privacy' && (
  <>
    <span className="legal-modal__eyebrow">
      Información legal
    </span>

    <h2 id="legal-modal-title">
      Política de privacidad
    </h2>

    <p className="legal-modal__updated">
      Última actualización: 6 de agosto de 2026
    </p>

    <section>
      <h3>Responsable</h3>

      <p>
        Estudio Tavis es un estudio de diseño y desarrollo web
        dirigido por Franco Toñanes, con sede en Buenos Aires,
        Argentina.
      </p>
    </section>

    <section>
      <h3>Información ingresada</h3>

      <p>
        El formulario de consulta puede solicitar tu nombre, el
        nombre y rubro de tu negocio, el tipo de web que necesitás,
        los objetivos del proyecto, las funcionalidades deseadas y
        otra información que decidas proporcionar voluntariamente.
      </p>
    </section>

    <section>
      <h3>Funcionamiento del formulario</h3>

      <p>
        Las respuestas se procesan localmente en tu navegador para
        preparar un mensaje de WhatsApp. Estudio Tavis no recibe,
        almacena ni transmite esta información mientras completás el
        formulario. Los datos se comparten únicamente cuando decidís
        enviar el mensaje desde WhatsApp.
      </p>
    </section>

    <section>
      <h3>Finalidad</h3>

      <p>
        Una vez enviado el mensaje, la información se utiliza para
        responder la consulta, comprender las necesidades del
        proyecto, brindar orientación, preparar presupuestos y
        mantener comunicaciones relacionadas con los servicios
        solicitados.
      </p>
    </section>

    <section>
      <h3>Consentimiento</h3>

      <p>
        Antes de preparar la consulta, el formulario solicita tu
        aceptación para utilizar la información ingresada con la
        finalidad de iniciar la comunicación mediante WhatsApp.
        Podés decidir no completar el formulario y utilizar otro
        canal de contacto disponible.
      </p>
    </section>

    <section>
      <h3>WhatsApp y servicios externos</h3>

      <p>
        Al continuar hacia WhatsApp, el tratamiento de la
        información también queda sujeto a las condiciones y
        políticas de privacidad de esa plataforma. Estudio Tavis no
        controla el funcionamiento ni las prácticas de privacidad de
        servicios externos.
      </p>
    </section>

    <section>
      <h3>Uso y comercialización de datos</h3>

      <p>
        Estudio Tavis no vende, alquila ni comercializa los datos
        personales recibidos. La información se utiliza únicamente
        para gestionar consultas y relaciones vinculadas con los
        servicios ofrecidos.
      </p>
    </section>

    <section>
      <h3>Conservación</h3>

      <p>
        Los mensajes y datos recibidos se conservarán solamente
        durante el tiempo necesario para responder la consulta,
        preparar una propuesta, mantener la relación comercial o
        cumplir obligaciones legales.
      </p>
    </section>

    <section>
      <h3>Derechos sobre tus datos</h3>

      <p>
        Podés solicitar el acceso, actualización, rectificación o
        eliminación de los datos compartidos con Estudio Tavis
        mediante los canales de contacto publicados en esta web.
      </p>
    </section>
  </>
)}

              {openDocument === 'terms' && (
  <>
    <span className="legal-modal__eyebrow">
      Información legal
    </span>

    <h2 id="legal-modal-title">
      Términos de uso
    </h2>

    <p className="legal-modal__updated">
      Última actualización: 6 de agosto de 2026
    </p>

    <section>
      <h3>Finalidad del sitio</h3>

      <p>
        Este sitio presenta los servicios, proyectos y formas de
        contacto de Estudio Tavis. Su contenido es informativo y
        puede ser actualizado sin previo aviso.
      </p>
    </section>

    <section>
      <h3>Formulario de consulta</h3>

      <p>
        El formulario organiza la información proporcionada por el
        usuario y prepara un mensaje para enviarlo mediante
        WhatsApp. Completar el formulario no envía automáticamente
        la información ni constituye una contratación.
      </p>
    </section>

    <section>
      <h3>Exactitud de la información</h3>

      <p>
        El usuario es responsable de revisar que la información
        ingresada sea correcta antes de enviar el mensaje. Estudio
        Tavis no se responsabiliza por errores o datos incompletos
        proporcionados durante la consulta.
      </p>
    </section>

    <section>
      <h3>Consultas y presupuestos</h3>

      <p>
        El envío de una consulta no implica la aceptación de un
        trabajo ni genera una obligación de contratación. Los
        precios, plazos, entregables y condiciones se establecerán
        mediante una propuesta particular aceptada por ambas partes.
      </p>
    </section>

    <section>
      <h3>Contratación de servicios</h3>

      <p>
        Cada proyecto se regirá por su presupuesto o acuerdo, donde
        podrán definirse alcance, pagos, revisiones, plazos,
        mantenimiento, dominio, hosting y propiedad del trabajo
        entregado.
      </p>
    </section>

    <section>
      <h3>Propiedad intelectual</h3>

      <p>
        El diseño, los textos, la identidad visual y los elementos
        propios de esta web pertenecen a Estudio Tavis, salvo que se
        indique lo contrario. Los proyectos exhibidos conservan los
        derechos correspondientes de sus propietarios.
      </p>
    </section>

    <section>
      <h3>Enlaces y servicios externos</h3>

      <p>
        La web puede contener enlaces a WhatsApp y otras plataformas
        de terceros. Estudio Tavis no controla su disponibilidad,
        funcionamiento, seguridad ni políticas.
      </p>
    </section>

    <section>
      <h3>Legislación aplicable</h3>

      <p>
        Estos términos se interpretan conforme a la legislación
        vigente de la República Argentina, respetando los derechos
        irrenunciables de consumidores y usuarios.
      </p>
    </section>
  </>
)}
              {openDocument === 'cookies' && (
  <>
    <span className="legal-modal__eyebrow">
      Información legal
    </span>

    <h2 id="legal-modal-title">
      Política de cookies
    </h2>

    <p className="legal-modal__updated">
      Última actualización: 6 de agosto de 2026
    </p>

    <section>
      <h3>Uso actual</h3>

      <p>
        Actualmente, esta web no utiliza cookies publicitarias ni
        herramientas de seguimiento o analítica.
      </p>
    </section>

    <section>
      <h3>Preferencia de tema</h3>

      <p>
        La elección entre modo claro y oscuro se guarda localmente
        en tu navegador mediante localStorage. Este almacenamiento
        no es una cookie, no permite identificarte y se utiliza
        únicamente para recordar tu preferencia visual.
      </p>
    </section>

    <section>
      <h3>Formulario de consulta</h3>

      <p>
        El formulario no utiliza cookies ni almacena sus respuestas
        en el navegador. La información se usa solamente para
        preparar el mensaje de WhatsApp que el usuario puede decidir
        enviar.
      </p>
    </section>

    <section>
      <h3>Servicios externos</h3>

      <p>
        Al ingresar en servicios externos, como WhatsApp, esas
        plataformas pueden utilizar sus propias cookies y
        tecnologías de almacenamiento conforme a sus respectivas
        políticas.
      </p>
    </section>

    <section>
      <h3>Cambios futuros</h3>

      <p>
        Si en el futuro se incorporan herramientas de analítica,
        publicidad o medición, esta política será actualizada y se
        solicitará el consentimiento correspondiente cuando resulte
        necesario.
      </p>
    </section>

    <section>
      <h3>Control del almacenamiento</h3>

      <p>
        Podés eliminar la preferencia de tema guardada desde la
        configuración de almacenamiento o datos del sitio de tu
        navegador.
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