import { Link, Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../layout.css";
import { useAuth } from "./auth/AuthContext";
import { handleLogout } from "./Login";

const Layout = () => {
  const user = useAuth();
  const location = useLocation();

  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm bg-dark justify-content-center">
        <ul className="navbar-nav">
          {!user && (
            <>
              <li className="nav-item">
                <Link className="nav-link menu" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link menu" to="Nosotros">Nosotros</Link>
              </li>
            </>
          )}
          {user ? (
            <>
              <li className="nav-item">
                <Link className="nav-link menu" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link menu" to="Nosotros">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link menu" to="/mytest">Mi perfil</Link>
              </li>
              
              <li className="nav-item">
                <button className="nav-link menu" onClick={handleLogout}>Cerrar Sesión</button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link className="nav-link menu" to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="page" timeout={300}>
          <div className="page">
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default Layout;
