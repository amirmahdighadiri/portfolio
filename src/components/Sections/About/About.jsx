import Section from "../../Section/Section.jsx";
import Reveal from "../../Reveal/Reveal.jsx";
import SectionTitle from "../../Section/SectionTitle.jsx";
import {useAppContext} from "../../../context/AppContext.jsx";
import CodeCard from "../../CodeCart/CodeCart.jsx";

function About() {
    const {t} = useAppContext()
    return (
        <Section id="about">
            <SectionTitle title={t.about.title} subtitle={t.about.subtitle}/>
            <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr] md:gap-14">
                <div className="min-w-0">
                    {t.about.descriptions.map((text, i) => (
                        <Reveal key={i} delay={i * 0.08}><p className="mb-4 max-w-xl text-lg">{text}</p></Reveal>
                    ))}
                </div>
                <CodeCard/>
            </div>
        </Section>
    );
}

export default About;