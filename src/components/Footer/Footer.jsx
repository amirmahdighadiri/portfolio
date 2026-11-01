import {useAppContext} from "../../context/AppContext.jsx";
import {NAV_IDS} from "../../data/data.js";

export default function Footer() {
    const { t } = useAppContext()
    const year = new Intl.NumberFormat(t.numLoc, { useGrouping: false }).format(new Date().getFullYear())
    return (
        <footer className="border-t border-line bg-surface">
            <div className={`container-main flex flex-wrap items-center justify-between gap-6 py-9`}>
                <div>
                    <b className="text-lg">{t.personal.name}</b>
                    <div className="text-sm text-muted">{t.hero.roles[0]}</div>
                </div>
                <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-1 p-0">
                    {NAV_IDS.map((id, i) => (
                        <li key={id}>
                            <a href={`#${id}`} className="inline-flex min-h-10 items-center text-sm text-muted hover:text-primary">{t.nav.items[i]}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <p className="m-0 border-t border-line p-4 text-center text-sm text-muted">{t.footer.rights.replace('{y}', year)}</p>
        </footer>
    )
}