import { NavLink, Outlet } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/timeline">Timeline</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
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
