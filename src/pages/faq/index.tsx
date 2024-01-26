import { useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ContactUs from "./components/contact_us";
import Hero from "./components/hero";
import Questions from "./components/questions";

export default function FrequentlyAskedQuestionsPage() {
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Hero />
            <Questions />
            <ContactUs />
            <Footer />
        </div>
    );
}
