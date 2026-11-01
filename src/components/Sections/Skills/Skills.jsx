import Section from "../../Section/Section.jsx";
import SectionTitle from "../../Section/SectionTitle.jsx";
import {useAppContext} from "../../../context/AppContext.jsx";
import Reveal from "../../Reveal/Reveal.jsx";
import {SKILL_GROUPS} from "../../../data/data.js";

const DOT = { use: 'bg-primary', now: 'bg-success animate-pulse', next: 'border-2 border-muted' }

export default function Skills() {
    const { t } = useAppContext()
    return (
        <Section id="skills">
            <SectionTitle title={t.skills.title} subtitle={t.skills.subtitle} />
            <div className="grid gap-5 md:grid-cols-3">
                {SKILL_GROUPS.map((g, i) => (
                    <Reveal key={g.c} delay={i * 0.1} className={`card rv lift min-w-0 ${g.c === 'next' ? 'border-dashed! shadow-none!' : ''}`}>
                        <div className="flex items-center gap-2.5">
                            <span className={`h-2.5 w-2.5 flex-none rounded-full ${DOT[g.c]}`} />
                            <h3 className="m-0 text-lg font-bold">{t.skills.categories[i].title}</h3>
                        </div>
                        <p className="mb-4 mt-0.5 text-sm text-muted">{t.skills.categories[i].description}</p>
                        {g.i.map(([letter, name]) => (
                            <div key={name} dir="ltr" className="mb-2.5 flex items-center gap-3 rounded-xl border border-line px-3 py-2.5 font-medium transition duration-300 last:mb-0 hover:translate-x-1 hover:border-primary hover:bg-plight">
                                <span className={`grid h-9 w-9 flex-none place-items-center rounded-[10px] text-sm font-bold ${g.c === 'next' ? 'bg-canvas text-muted' : 'bg-plight text-primary'}`}>{letter}</span>
                                {name}
                            </div>
                        ))}
                    </Reveal>
                ))}
            </div>
        </Section>
    )
}