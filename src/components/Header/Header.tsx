import { useState } from 'react'

import type { Theme } from '../ThemeSelection/ThemeSelection'
import './Header.css'

type HeaderProps = {
  theme: Theme
  onToggleTheme: () => void
}

export default function Header({
  theme,
  onToggleTheme
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isDark = theme === 'dark'

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          className="brand"
          href="#inicio"
          aria-label="Ir al inicio de Estudio Tavis"
          onClick={closeMenu}
        >
          <img
            className="brand__logo"
            src={
              isDark
                ? '/isologo-tavis-dark.png'
                : '/isologo-tavis-light.png'
            }
            alt="Estudio Tavis"
          />
        </a>

        <nav
          className={`nav ${isMenuOpen ? 'nav--open' : ''}`}
          id="main-navigation"
          aria-label="Navegación principal"
        >
          <a href="#inicio" onClick={closeMenu}>
            Inicio
          </a>

          <a href="#estilos" onClick={closeMenu}>
            Servicios
          </a>

          <a href="#trabajos" onClick={closeMenu}>
            Trabajos
          </a>

          <a href="#sobre-nosotros" onClick={closeMenu}>
            Sobre nosotros
          </a>

          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={
              isDark
                ? 'Cambiar al modo claro'
                : 'Cambiar al modo oscuro'
            }
            title={
              isDark
                ? 'Cambiar al modo claro'
                : 'Cambiar al modo oscuro'
            }
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />

                <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 14.4A8.5 8.5 0 0 1 9.6 3.5 8.5 8.5 0 1 0 20.5 14.4Z" />
              </svg>
            )}
          </button>

          <a className="header-cta" href="#contacto">
            Consultar
          </a>

          <button
            className={`menu-toggle ${
              isMenuOpen ? 'menu-toggle--open' : ''
            }`}
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}