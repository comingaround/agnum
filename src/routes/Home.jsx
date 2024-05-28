import HomeHero from "../components/home/HomeHero/homeHero";
import HomeCards from "../components/home/HomeCards/homeCards";
import Home_b2b from "../components/home/home_b2b/home_b2b";

export default function Home() {
    return(
        <>
            <HomeHero />
            <HomeCards />
            <Home_b2b />
        </>
    );
}