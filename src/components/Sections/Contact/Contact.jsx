import Section from "../../Section/Section.jsx";
import Reveal from "../../Reveal/Reveal.jsx";
import {SITE} from "../../../data/data.js";
import {useAppContext} from "../../../context/AppContext.jsx";

export default function Contact() {
    const { t } = useAppContext()
    return (
        <Section id="contact">
            <Reveal className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-line bg-linear-to-br from-surface to-plight p-8 shadow-soft md:p-10">
                <div>
                    <h2 className="m-0 text-2xl font-bold">{t.contact.title}</h2>
                    <p className="mt-1 text-muted">{t.contact.subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <a className="btn" href={`mailto:${SITE.email}`}>Email</a>
                    <a className="btn-secondary" href={SITE.github}>GitHub</a>
                    <a className="btn-secondary" href={SITE.linkedin}>LinkedIn</a>
                </div>
            </Reveal>
        </Section>
    )
}