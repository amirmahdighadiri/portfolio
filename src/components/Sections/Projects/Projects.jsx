import Section from "../../Section/Section.jsx";
import SectionTitle from "../../Section/SectionTitle.jsx";
import Reveal from "../../Reveal/Reveal.jsx";
import {useAppContext} from "../../../context/AppContext.jsx";
import { PROJECTS } from "../../../data/data.js";

export default function Projects() {
    const { t } = useAppContext()
    return (
        <Section id="projects">
            <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />
            <div className="grid gap-5 md:grid-cols-3">
                {t.projects.items.map(({title, description}, i) => {
                    const { image, demo, github } = PROJECTS[i]
                    return (
                        <Reveal key={i} className={`card rv lift flex flex-col gap-2.5`} delay={i * 0.1}>
                            <div className="grid h-32 place-items-center rounded-xl border border-line bg-linear-to-br from-plight to-transparent text-[13px] text-muted overflow-hidden">
                                <img
                                    src={image}
                                    alt={`${t.projects.imageAlt}: ${title}`}
                                    loading="lazy"
                                    className="aspect-video w-full object-cover"
                                />
                            </div>
                            <h3 className="m-0 text-lg font-bold">{title}</h3>
                            <p className="m-0 text-sm text-muted line-clamp-3">{description}</p>
                            <div dir="ltr" className="mt-auto flex justify-end gap-4 pt-2 text-sm font-semibold text-primary">
                                {demo && (<a href={demo}>Demo</a>)}
                                <a href={github}>GitHub</a>
                            </div>
                        </Reveal>

                    )
                })}
            </div>
        </Section>
    )
}