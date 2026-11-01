import Section from "../../Section/Section.jsx";
import SectionTitle from "../../Section/SectionTitle.jsx";
import Reveal from "../../Reveal/Reveal.jsx";
import {useAppContext} from "../../../context/AppContext.jsx";

export default function Projects() {
    const { t } = useAppContext()
    return (
        <Section id="projects">
            <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />
            <div className="grid gap-5 md:grid-cols-3">
                {t.projects.items.map(({title, text}, i) => (
                    <Reveal key={i} className={`card rv lift flex flex-col gap-2.5`} delay={i * 0.1}>
                        <div className="grid h-32 place-items-center rounded-xl border border-line bg-linear-to-br from-plight to-transparent text-[13px] text-muted"></div>
                        <h3 className="m-0 text-lg font-bold">{title}</h3>
                        <p className="m-0 text-sm text-muted">{text}</p>
                        <div dir="ltr" className="mt-auto flex justify-end gap-4 pt-2 text-sm font-semibold text-primary">
                            <a href="#">Demo</a>
                            <a href="#">GitHub</a>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    )
}