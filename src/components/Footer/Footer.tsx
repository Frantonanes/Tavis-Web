import { useEffect, useState } from 'react'

import './Footer.css'

type LegalDocument = 'privacy' | 'terms' | 'cookies'

export default function Footer() {
  const [openDocument, setOpenDocument] =
    useState<LegalDocument | null>(null)

  const currentYear = new Date().getFullYear()

  useEffect(() => {
    if (!openDocument) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDocument(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
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
              aria-label="Volver al inicio"
            >
              Tavis<span>.</span>
            </a>

            <p>
              Diseñamos y desarrollamos soluciones web claras, funcionales y
              adaptadas a los objetivos de cada negocio.
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
            <a href="#sobre-nosotros">Sobre Tavis</a>
          </nav>

          <div className="site-footer__contact">
            <span className="site-footer__title">
              Empecemos
            </span>

            <h2>¿Tenés una idea para tu próxima web?</h2>

            <p>
              Contanos sobre tu proyecto y te ayudamos a encontrar la solución
              indicada.
            </p>

            <a href="#contacto">
              Hablemos de tu proyecto
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="site-footer__legal">
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
            © {currentYear} Tavis. Todos los derechos reservados.
          </p>

          <span>Diseño y desarrollo web</span>
        </div>
      </footer>

      {openDocument && (
        <div
          className="legal-modal"
          role="presentation"
          onMouseDown={closeModal}
        >
          <article
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
              aria-label="Cerrar"
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
                    Última actualización: 17 de julio de 2026
                  </p>

                  <section>
                    <h3>Responsable</h3>
                    <p>
                      Tavis es un estudio de desarrollo web dirigido por Franco
                      Toñanes, con sede en Buenos Aires, Argentina.
                    </p>
                  </section>

                  <section>
                    <h3>Información recopilada</h3>
                    <p>
                      La web no cuenta actualmente con formularios propios. Los
                      datos que envíes voluntariamente mediante WhatsApp serán
                      utilizados para responder consultas y preparar propuestas
                      relacionadas con nuestros servicios.
                    </p>
                  </section>

                  <section>
                    <h3>Finalidad</h3>
                    <p>
                      La información recibida se utiliza exclusivamente para
                      responder consultas, evaluar proyectos, preparar
                      presupuestos y mantener comunicaciones vinculadas con los
                      servicios solicitados.
                    </p>
                  </section>

                  <section>
                    <h3>Servicios de terceros</h3>
                    <p>
                      Los enlaces a WhatsApp y otros servicios externos están
                      sujetos a las políticas de privacidad de sus respectivos
                      proveedores. Tavis no vende ni comercializa los datos
                      personales recibidos.
                    </p>
                  </section>

                  <section>
                    <h3>Derechos sobre tus datos</h3>
                    <p>
                      Podés solicitar el acceso, actualización, rectificación o
                      eliminación de tus datos mediante los canales de contacto
                      publicados en esta web.
                    </p>
                  </section>

                  <section>
                    <h3>Seguridad y conservación</h3>
                    <p>
                      Los datos se conservarán únicamente durante el tiempo
                      necesario para responder la consulta, mantener la relación
                      comercial o cumplir obligaciones legales.
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
                    Última actualización: 17 de julio de 2026
                  </p>

                  <section>
                    <h3>Finalidad del sitio</h3>
                    <p>
                      Este sitio presenta los servicios y proyectos de Tavis.
                      Su contenido es informativo y puede ser actualizado sin
                      previo aviso.
                    </p>
                  </section>

                  <section>
                    <h3>Consultas y presupuestos</h3>
                    <p>
                      El envío de una consulta no constituye una contratación.
                      Los precios, plazos, entregables y condiciones de cada
                      proyecto serán establecidos mediante una propuesta
                      particular aceptada por ambas partes.
                    </p>
                  </section>

                  <section>
                    <h3>Propiedad intelectual</h3>
                    <p>
                      El diseño, los textos, la identidad visual y los elementos
                      propios de esta web pertenecen a Tavis, salvo que se
                      indique lo contrario. Los proyectos exhibidos conservan
                      los derechos correspondientes de sus propietarios.
                    </p>
                  </section>

                  <section>
                    <h3>Enlaces externos</h3>
                    <p>
                      La web puede contener enlaces a sitios y plataformas de
                      terceros. Tavis no controla su disponibilidad, seguridad
                      ni políticas.
                    </p>
                  </section>

                  <section>
                    <h3>Contratación de servicios</h3>
                    <p>
                      Cada trabajo se regirá por su presupuesto o contrato,
                      donde se definirán alcance, pagos, revisiones, plazos,
                      mantenimiento, dominio, hosting y propiedad del trabajo
                      entregado.
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
                    Última actualización: 17 de julio de 2026
                  </p>

                  <section>
                    <h3>Uso actual</h3>
                    <p>
                      Actualmente, esta web no utiliza cookies publicitarias ni
                      de seguimiento.
                    </p>
                  </section>

                  <section>
                    <h3>Preferencia de tema</h3>
                    <p>
                      La elección entre modo claro y oscuro se almacena
                      localmente en tu navegador mediante localStorage. Esta
                      información no identifica al usuario y se utiliza
                      únicamente para recordar la preferencia visual.
                    </p>
                  </section>

                  <section>
                    <h3>Servicios externos</h3>
                    <p>
                      Al ingresar en enlaces externos, como WhatsApp, esos
                      servicios pueden utilizar sus propias cookies y
                      tecnologías de almacenamiento conforme a sus políticas.
                    </p>
                  </section>

                  <section>
                    <h3>Cambios futuros</h3>
                    <p>
                      Si en el futuro se incorporan herramientas de analítica,
                      publicidad o medición, esta política será actualizada y se
                      solicitará el consentimiento correspondiente cuando sea
                      necesario.
                    </p>
                  </section>

                  <section>
                    <h3>Control del almacenamiento</h3>
                    <p>
                      Podés eliminar la preferencia guardada desde la
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