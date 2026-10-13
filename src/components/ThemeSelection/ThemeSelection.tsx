import './ThemeSelection.css'

export type Theme = 'light' | 'dark'

type ThemeSelectionProps = {
  onSelect: (theme: Theme) => void
}

export default function ThemeSelection({
  onSelect
}: ThemeSelectionProps) {
  return (
    <section className="theme-selection">
      <div className="theme-selection__content">
        <div className="theme-selection__brand">
          <img
            src="/isologo-tavis-dark.png"
            alt="Tavis"
          />
        </div>

        <span className="theme-selection__eyebrow">
          Bienvenido a Tavis
        </span>

        <h1>¿Cómo querés explorar nuestra web?</h1>

        <p>
          Una misma experiencia, con dos estilos diferentes.
        </p>

        <div className="theme-selection__options">
          <button
            className="theme-option theme-option--light"
            type="button"
            onClick={() => onSelect('light')}
            aria-label="Explorar Tavis en modo claro"
          >
            <span
              className="theme-option__preview"
              aria-hidden="true"
            >
              <span className="theme-option__browser">
                <span className="theme-option__browser-top" />
                <span className="theme-option__browser-title" />
                <span className="theme-option__browser-text" />
                <span className="theme-option__browser-button" />
              </span>
            </span>

            <span className="theme-option__information">
              <strong>Modo claro</strong>
              <small>Elegante, cálido y minimalista</small>
            </span>

            <span
              className="theme-option__arrow"
              aria-hidden="true"
            >
              →
            </span>
          </button>

          <button
            className="theme-option theme-option--dark"
            type="button"
            onClick={() => onSelect('dark')}
            aria-label="Explorar Tavis en modo oscuro"
          >
            <span
              className="theme-option__preview"
              aria-hidden="true"
            >
              <span className="theme-option__browser">
                <span className="theme-option__browser-top" />
                <span className="theme-option__browser-title" />
                <span className="theme-option__browser-text" />
                <span className="theme-option__browser-button" />
              </span>
            </span>

            <span className="theme-option__information">
              <strong>Modo oscuro</strong>
              <small>Tecnológico, moderno y dinámico</small>
            </span>

            <span
              className="theme-option__arrow"
              aria-hidden="true"
            >
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}