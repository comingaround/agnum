import "./homeCards.css";
import ArrowRight from "../../general/arrowRight/arrowRight";

export default function HomeCards() {
    return(
        <>
            <div className="homeCards_main">
                <h2>Programos</h2>
                <div className="hCm_cards">
                    <div className="hCm_card_item">
                        <h6>Elit</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dolores.</p>
                        <button>Sužinoti daugiau</button>
                        <div className="card_arrow_right">
                            <ArrowRight />
                        </div>
                    </div>
                    <div className="hCm_card_item">
                        <h6>Agnum</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem voluptates ullam praesentium?</p>
                        <button>Sužinoti daugiau</button>
                    </div>
                    <div className="hCm_card_item">
                        <h6>Terminalinis <br /> Agnum</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque eos exercitationem omnis hic repellendus.</p>
                        <button>Sužinoti daugiau</button>
                    </div>
                    <div className="hCm_card_item">
                        <h6>Virtualus <br /> Agnum</h6>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quibusdam!</p>
                        <button>Sužinoti daugiau</button>
                    </div>
                </div>
            </div>
        </>
    );
} 