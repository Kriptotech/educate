import Footer from "../../components/footer";
import Header from "../../components/header";
import AboutUs from "./components/about_us";
import GeneralContent from "./components/general_content";
import Feedback from "./components/feedback";
import Hero from "./components/hero";
import { useEffect } from "react";

export default function Aboutpage() {
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Hero />
            <AboutUs />
            <GeneralContent />
            <Feedback />
            <Footer />
        </div>
    );
}
