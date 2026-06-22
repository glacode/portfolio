import { useTheme } from '../hooks/useTheme'

const sunIcon = (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const moonIcon = (
  <svg viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const toggle = () => {
    if (theme === 'dark') return 'light'
    return 'dark'
  }

  const icon = theme === 'light' ? sunIcon : moonIcon
  const title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(toggle())}
      aria-label={title}
      title={title}
    >
      {icon}
    </button>
  )
}

export default ThemeToggle
