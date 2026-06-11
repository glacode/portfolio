import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <header>
        <div className="container">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/timeline">Timeline</Link></li>
              <li><Link to="/contact">Contact</Link></li>
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
            Note: This is a technical demonstration of a portfolio architecture. Content is illustrative.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
