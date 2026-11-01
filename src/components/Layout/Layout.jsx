import Navbar from "../Navbar/Navbar.jsx"
import Hero from "../Sections/Hero/Hero.jsx";
import About from "../Sections/About/About.jsx";
import Specialties from "../Sections/Specialties/Specialties.jsx";
import Skills from "../Sections/Skills/Skills.jsx";
import Projects from "../Sections/Projects/Projects.jsx";
import LearningPath from "../Sections/LearningPath/LearningPath.jsx";
import Contact from "../Sections/Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Specialties />
                <Skills />
                <Projects />
                <LearningPath />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default Layout;