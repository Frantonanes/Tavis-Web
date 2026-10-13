import './HeroSection.css'
import bychandanaPreview from '../../../assets/projects/bychandana-preview.webp'
import jazzmusicPreview from '../../../assets/projects/jazzmusic-preview.webp'

const whatsappNumber = '5491156152870'
const whatsappMessage = encodeURIComponent(
  'Hola, vi Estudio Tavis y me gustaría contarles mi idea para una página web.'
)

export default function HeroSection() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__background" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow"><span aria-hidden="true" /> Diseño y desarrollo web</p>

          <h1 id="hero-title">
            Tu negocio tiene mucho para mostrar.{' '}
            <span>Nosotros creamos dónde.</span>
          </h1>

          <p className="hero__text">
            Diseñamos y desarrollamos páginas web para que puedas mostrar tus productos,
            presentar tus servicios y conectar con nuevos clientes.
          </p>
          <p className="hero__support">
            Nos encargamos de todo el proceso, desde la primera idea hasta que tu web está online.
          </p>

          <div className="hero__actions">
            <a
              className="hero__button hero__button--primary"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contanos tu idea <span aria-hidden="true">↗</span>
            </a>
            <a className="hero__button hero__button--secondary" href="#trabajos">
              Ver nuestros trabajos <span aria-hidden="true">→</span>
            </a>
          </div>

          <ul className="hero__benefits" aria-label="Cómo trabajamos">
            <li><span aria-hidden="true">✓</span> Diseño personalizado</li>
            <li><span aria-hidden="true">✓</span> Acompañamiento durante el proceso</li>
          </ul>
        </div>

        <aside className="hero-projects" aria-label="Ejemplos de páginas web desarrolladas por Estudio Tavis">
          <span className="hero-projects__eyebrow">Proyectos reales de Tavis</span>

          <a className="hero-project hero-project--main" href="https://bychandana.com" target="_blank" rel="noopener noreferrer" aria-label="Ver sitio de ByChandana, tienda online desarrollada por Tavis">
            <span className="hero-project__bar" aria-hidden="true">
              <span className="hero-project__dots"><i /><i /><i /></span>
              <span className="hero-project__address">bychandana.com</span>
            </span>
            <img src={bychandanaPreview} alt="Vista del inicio de la tienda online ByChandana" width="1448" height="1086" fetchPriority="high" />
            <span className="hero-project__name">ByChandana <small>· Tienda online</small></span>
          </a>

          <a className="hero-project hero-project--secondary" href="https://jazzmusicavellaneda.com" target="_blank" rel="noopener noreferrer" aria-label="Ver sitio de Jazz Music, catálogo digital desarrollado por Tavis">
            <span className="hero-project__bar" aria-hidden="true">
              <span className="hero-project__dots"><i /><i /><i /></span>
              <span className="hero-project__address">jazzmusicavellaneda.com</span>
            </span>
            <img src={jazzmusicPreview} alt="Vista del inicio del catálogo de instrumentos Jazz Music" width="1448" height="1086" loading="lazy" />
            <span className="hero-project__name">Jazz Music <small>· Catálogo digital</small></span>
          </a>
        </aside>
      </div>
    </section>
  )
}
