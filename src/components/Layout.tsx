import { NavLink, Outlet } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/contact', label: 'Contact' },
]

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <div className="container">
          <nav>
            <ul>
              {NAV_LINKS.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink to={to} end={end} data-text={label}>
                    {label}
                  </NavLink>
                </li>
              ))}
              <li style={{ marginLeft: 'auto' }}>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Glauco Siliprandi. Built with React & TypeScript.</p>
          <p className="note">
            Note: This is a technical demonstration of a portfolio architecture. Content is
            illustrative.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
