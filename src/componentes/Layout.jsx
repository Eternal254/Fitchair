import { Link, Outlet } from "react-router-dom";
import "../layout.css";


const Layout = () => {
    return (
        < div >
            <ul>
                <li>
                    <Link to="/inicio">Inicio</Link>
                </li>
                <li>
                    <Link to="/nosotros">Nosotros</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/bd">data</Link>
                </li>
            </ul>
            <Outlet />
        </div >
    )

}
export default Layout;

