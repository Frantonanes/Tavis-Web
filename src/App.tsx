import { useEffect, useState } from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ThemeSelection, {
  type Theme
} from './components/ThemeSelection/ThemeSelection'
import Home from './Home/Home'

import './styles.css'

const THEME_STORAGE_KEY = 'tavis-theme'

function App() {
  const [theme, setTheme] = useState<Theme | null>(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return null
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme ?? 'light'
  }, [theme])

  function changeTheme(newTheme: Theme) {
    localStorage.setItem(THEME_STORAGE_KEY, newTheme)
    setTheme(newTheme)
  }

  function toggleTheme() {
    changeTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!theme) {
    return <ThemeSelection onSelect={changeTheme} />
  }

  return (
    <>
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <Home />

      <Footer />
    </>
  )
}

export default App