import { Link, Outlet } from "react-router-dom";
import "../layout.css";

const Layout = () => {
  return (
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
        <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/mytest">TestDB</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/graph">Grafica marrana</Link>
        </li>
      </ul>
      </nav>
    <Outlet />
    </div>
  );
}

export default Layout;