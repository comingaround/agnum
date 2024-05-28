import "./footer.css";

export default function Footer() {
    return(
        <>
            <footer className="footer_main">
                <div className="footer_logo">
                    <img src="https://agnum.lt/VAADIN/build/image_agnum_home-598866d5.png" alt="logo" />
                </div>
                <div className="footer_button">
                    <button>Išbandyk nemokamai</button>
                </div>
                <div className="footer_contacts">
                    <h6>Kontaktai</h6>
                    <p>Telefono numeris: +370 6123 4567</p>
                    <p>El. paštas: info@agnum.lt</p>
                    <p>Adresas: Teatro g. 1</p>
                </div>
            </footer>
        </>
    );
}