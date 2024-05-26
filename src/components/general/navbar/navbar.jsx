import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
    return(
        <>
            <div className="navbar_main">
                <div className="navbar_logo">
                    <Link to="/">
                        <img src="https://agnum.lt/VAADIN/build/image_agnum_home-598866d5.png" alt="logo" />
                    </Link>
                </div>
                <div className="navbar_list">
                    <ul>
                        <li>
                            <Link to="/apiemus">Apie mus</Link>
                        </li>
                        <li>
                            <Link to="/paslaugos">Paslaugos</Link>
                        </li>
                        <li>
                            <Link to="/karjera">Karjera</Link>
                        </li>
                        <li>
                            <Link to="/apskaitosimones">Apskaitos Įmonės</Link>
                        </li>
                        <li>
                            <Link to="/atstovai">Atstovai</Link>
                        </li>
                        <li>
                            <Link to="/kontaktai">Kontaktai</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar_callto">

                </div>
            </div>
        </>
    );
}