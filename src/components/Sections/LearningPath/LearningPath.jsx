import {useAppContext} from "../../../context/AppContext.jsx";
import Section from "../../Section/Section.jsx";
import SectionTitle from "../../Section/SectionTitle.jsx";
import Reveal from "../../Reveal/Reveal.jsx";
import {STEP_CLASSES} from "../../../data/data.js";

export default function LearningPath() {
    const { t } = useAppContext()
    return (
        <Section id="learning-path">
            <SectionTitle title={t.learningPath.title} subtitle={t.learningPath.subtitle} />
            <ol className="path">
                {t.learningPath.steps.map(({title, description, status}, i) => (
                    <Reveal as="li" key={i} className={STEP_CLASSES[i]} delay={i * 0.1}>
                        <span className="dot" />
                        <h3>{title}{status && <span className="chip">{status}</span>}</h3>
                        <p>{description}</p>
                    </Reveal>
                ))}
            </ol>
        </Section>
    )
}