import './HeroSection.css'

const whatsappNumber = '5491156152870'

export default function HeroSection() {
  const whatsappMessage = encodeURIComponent(
    'Hola, quiero dar el paso de tener una página web para mi negocio.'
  )

  return (
    <section className="hero" id="inicio">
      <div className="hero__background" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <p className="eyebrow">
            <span />
            El próximo paso para tu negocio
          </p>

          <h1>
            Tu negocio está más cerca de tener{' '}
            <span>su propia web.</span>
          </h1>

          <p className="hero__text">
            Creamos páginas web profesionales para emprendimientos y negocios
            que quieren crecer, mostrar lo que hacen y generar nuevas
            oportunidades. Te acompañamos durante todo el proceso para que dar
            el paso sea más simple de lo que imaginás.
          </p>

          <div className="hero__actions">
            <a
              className="button button--primary"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              Quiero mi página web
            </a>

            <a className="button button--secondary" href="#estilos">
              Ver opciones de web
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <aside
          className="hero-preview"
          aria-label="Vista previa de una web profesional"
        >
          <div className="hero-preview__top">
            <div className="hero-preview__dots">
              <span />
              <span />
              <span />
            </div>

            <div className="hero-preview__url">tavisweb.com.ar</div>
          </div>

          <div className="hero-preview__hero">
            <span className="hero-preview__line hero-preview__line--large" />
            <span className="hero-preview__line" />
            <span className="hero-preview__line hero-preview__line--small" />
            <span className="hero-preview__button" />
          </div>

          <div className="hero-preview__cards">
            {[1, 2, 3].map((card) => (
              <div className="hero-preview__card" key={card}>
                <span />
                <strong />
                <p />
              </div>
            ))}
          </div>

          <div className="hero-preview__footer">
            <span />
            <span />
            <span />
          </div>

          <div className="hero-preview__tag hero-preview__tag--responsive">
            Responsive
          </div>

          <div className="hero-preview__tag hero-preview__tag--optimized">
            Optimizado
          </div>
        </aside>
      </div>
    </section>
  )
}