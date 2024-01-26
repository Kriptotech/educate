import { useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import AboutUs from "./components/about_us";
import ContactUs from "./components/contact_us";
import CourseCategories from "./components/course_categories";
import Feedback from "./components/feedback";
import GeneralContent from "./components/general_content";
import Hero from "./components/hero";

export default function Homepage() {
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <Hero />
            <GeneralContent />
            <AboutUs />
            <Feedback />
            <CourseCategories />
            <ContactUs />
            <Footer />
        </div>
    );
}
