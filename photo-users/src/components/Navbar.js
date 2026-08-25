import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                <Link to="/" className="logo">
                    PhotoUsers
                </Link>

                <div className="nav-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/users">Usuarios</Link>
                    <Link to="/photos">Fotos</Link>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;