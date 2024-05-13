import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import NewsSection from "../components/NewsSection.jsx";
import AdvantagesSection from "../components/AdvantagesSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";
import AboutUsSection from "../components/AboutUsSection.jsx";
import PartnersSection from "../components/PartnersSection.jsx";

function Home() {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <AboutUsSection />
            <NewsSection/>
            <AdvantagesSection/>
            <PartnersSection/>
            <ContactSection/>
            <Footer/>
        </div>
    );
}

export default Home;