import { useEffect, useState } from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ThemeSelection, {
  type Theme
} from './components/ThemeSelection/ThemeSelection'
import Home from './Home/Home'

import './styles.css'

const THEME_STORAGE_KEY = 'tavis-theme'

type ThemeState = {
  theme: Theme
  showSelection: boolean
}

function getInitialThemeState(): ThemeState {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return {
      theme: savedTheme,
      showSelection: false
    }
  }

  return {
    theme: 'light',
    showSelection: true
  }
}

function App() {
  const [themeState, setThemeState] =
    useState<ThemeState>(getInitialThemeState)

  const { theme, showSelection } = themeState

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    if (!showSelection) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [showSelection])

  function changeTheme(newTheme: Theme) {
    localStorage.setItem(THEME_STORAGE_KEY, newTheme)

    setThemeState({
      theme: newTheme,
      showSelection: false
    })
  }

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    localStorage.setItem(THEME_STORAGE_KEY, newTheme)

    setThemeState({
      theme: newTheme,
      showSelection: false
    })
  }

  return (
    <>
      <Header
  theme={theme}
  onToggleTheme={toggleTheme}
/>

<Home />

<Footer />

      {showSelection && (
        <ThemeSelection onSelect={changeTheme} />
      )}
    </>
  )
}

export default App