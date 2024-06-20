import { Link, Outlet } from "react-router-dom";


const Layout = () => {
    return (
        < div >
        <nav>
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
            </ul>
        </nav>
         <hr />
         <Outlet />
        </div >
    )

}
export default Layout;

