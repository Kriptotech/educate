import { useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ContactInfo from "./components/contact_info";
import Hero from "./components/hero";
import Info from "./components/info";

export default function Contactpage() {
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Hero />
            <Info />
            <ContactInfo />
            <Footer />
        </div>
    );
}
