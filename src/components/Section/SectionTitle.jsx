import Reveal from "../Reveal/Reveal.jsx";


export default function SectionTitle({ title, subtitle }) {
    return (
        <Reveal className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
            <p className="mt-1.5 text-muted">{subtitle}</p>
        </Reveal>
    )
}