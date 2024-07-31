import { Link, Outlet } from "react-router-dom";
import "../layout.css";
import { useAuth } from "./auth/AuthContext";
import { handleLogout } from "./Login";

const Layout = () => {
  const user = useAuth(); 

  return (
    <div>
      {user ? (
        <div>
          <nav className="navbar navbar-expand-sm bg-dark justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link menu" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link menu" to="/nosotros">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link menu" to="/mytest">TestDB</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link menu" to="/graph">Grafica</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link menu" onClick={handleLogout}>Cerrar Sesión</button>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      ) : (
        <div>
          <nav className="navbar navbar-expand-sm bg-dark justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link menu" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link menu" to="/nosotros">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link menu" to="/mytest">TestDB</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link menu" to="/graph">Grafica marrana</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link menu" to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      )}
    </div>
  );
}

export default Layout;
