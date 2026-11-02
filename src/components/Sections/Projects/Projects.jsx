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
                {t.projects.items.map(({title, description ,status}, i) => {
                    const { image, demo, github } = PROJECTS[i]
                    return (
                        <Reveal key={i} className={`card rv lift flex flex-col gap-2.5`} delay={i * 0.1}>
                            <div className="group relative aspect-video overflow-hidden rounded-xl border border-line">
                                <img
                                    src={image}
                                    alt={`${t.projects.imageAlt}: ${title}`}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100"></div>

                                <div className="absolute bottom-3 left-3 grid size-9 translate-y-2 place-items-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <span className="text-xl">↗</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold">{title}</h3>
                                {status && (<span className="chip">
                                        {status}
                                     </span>)}
                            </div>

                            <p className="m-0 text-sm text-muted text-justify line-clamp-3">{description}</p>
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