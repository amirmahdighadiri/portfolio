import Reveal from "../Reveal/Reveal.jsx";


const K = ({children}) => <span className="text-primary">{children}</span>
const S = ({children}) => <span className="text-success">{children}</span>
const M = ({children}) => <span className="text-muted">{children}</span>

export default function CodeCard() {
    return (
        <Reveal className="overflow-hidden rounded-2xl border border-line bg-surface shadow-soft" delay={0.1}>
            <div className="flex items-center gap-2 border-b border-line px-4 py-3" dir="ltr">
                <i className="h-3 w-3 rounded-full bg-line"/>
                <i className="h-3 w-3 rounded-full bg-line"/>
                <i className="h-3 w-3 rounded-full bg-primary"/>
                <span className="ms-3 text-xs text-muted">profile.js</span>
            </div>
            <pre dir="ltr" className="m-0 overflow-x-auto p-5 text-left font-mono text-[13px] leading-7 text-ink">
                <div><K>const</K> amirmahdi <M>= {'{'}</M></div>
                <div className="ps-6">role<M>: </M><S>"Front-End Developer"</S><M>,</M></div>
                <div className="ps-6">stack<M>: [</M><S>"React.js"</S><M>, </M><S>"Tailwind CSS"</S><M>],</M></div>
                <div className="ps-6">learning<M>: [</M><S>"Next.js"</S><M>, </M><S>"Python"</S><M>],</M></div>
                <div className="ps-6">goal<M>: </M><S>"smart, data-driven products"</S><M>,</M></div>
                <div><M>{'};'}</M><span className="caret"/></div>
            </pre>
        </Reveal>
    )
}
