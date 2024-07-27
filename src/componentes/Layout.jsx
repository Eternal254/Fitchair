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
            <nav class="navbar navbar-expand-sm bg-dark justify-content-center">
      
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link" to="/nosotros">Nosotros</Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link" to="/mytest">TestDB</Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link" to="/graph">Grafica marrana</Link>
              </li>
              <li class="nav-item">
              <button  className="nav-link" onClick={handleLogout}>Cerrar Sesión</button>
              </li>
            </ul>
            </nav>
          <Outlet />
          </div>
        ) : (
          <div>
      <nav class="navbar navbar-expand-sm bg-dark justify-content-center">

      <ul class="navbar-nav">
        <li class="nav-item">
          <Link className="nav-link" to="/">Inicio</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/nosotros">Nosotros</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/mytest">TestDB</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/graph">Grafica marrana</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
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