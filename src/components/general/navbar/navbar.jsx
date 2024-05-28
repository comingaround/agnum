import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="navbar_main">
                <div className="navbar_logo">
                    <Link to="/">
                        <img src="https://agnum.lt/VAADIN/build/image_agnum_home-598866d5.png" alt="logo" />
                    </Link>
                </div>
                <div className="navbar_list">
                    <div className="navbar_burger" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </div>
                    <ul className={menuOpen ? "open" : ""}>
                        <li><Link to="/apiemus">MobX</Link></li>
                        <li><Link to="/paslaugos">Paslaugos</Link></li>
                        <li><Link to="/karjera">Karjera</Link></li>
                        <li><Link to="/apskaitosimones">Apskaitos Įmonės</Link></li>
                        <li><Link to="/atstovai">Atstovai</Link></li>
                        <li><Link to="/kontaktai">Kontaktai</Link></li>
                    </ul>
                </div>
                <div className="navbar_callto">
                    <Link to="/isbandyknemokamai">Išbandyk nemokamai</Link>
                </div>
            </div>
        </>
    );
}
