import Section from "../../Section/Section.jsx";
import SectionTitle from "../../Section/SectionTitle.jsx";
import Reveal from "../../Reveal/Reveal.jsx";
import {useAppContext} from "../../../context/AppContext.jsx";
import Icons from "../../Icons/Icons.jsx";

export default function Specialties() {
    const { t } = useAppContext()
    return (
        <Section id="specialties">
            <SectionTitle title={t.specialties.title} subtitle={t.specialties.subtitle} />
            <div className="grid gap-5 md:grid-cols-3">
                {t.specialties.items.map(({icon, title, description}, i) => (
                    <Reveal key={i} className={`card rv lift flex gap-4`} delay={i * 0.1}>
                        <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-plight text-primary"><Icons name={icon} /></span>
                        <div className="min-w-0">
                            <h3 className="m-0 text-[17px] font-bold">{title}</h3>
                            <p className="mt-1 text-sm text-muted">{description}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    )
}