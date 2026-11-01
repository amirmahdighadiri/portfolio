import {useState,useEffect} from 'react';
import Icon from "../Icons/Icons.jsx";
import {NAV_IDS} from "../../data/data.js";
import {useAppContext} from "../../context/AppContext.jsx";

function Navbar() {
    const {t,theme ,toggleLanguage, toggleTheme} = useAppContext();
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false)

    const closeMenu = () => setIsOpenMenu(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16)
        onScroll()
        window.addEventListener('scroll', onScroll, {passive: true})
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        if (!isOpenMenu) return
        const onKey = (e) => e.key === 'Escape' && setIsOpenMenu(false)
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [isOpenMenu])

    return (
        <header className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${scrolled || isOpenMenu ? 'border-line bg-surface/85 shadow-soft backdrop-blur-md' : 'border-transparent'}`}>
            <div className={`container-main flex h-16 items-center justify-between`}>
                <a href="#top" className="flex items-center gap-2 text-lg font-bold">
                    <i className="h-2.5 w-2.5 rounded-full bg-primary"/>
                    {t.personal.short}
                </a>

                <nav className="hidden md:block" aria-label="main">
                    <ul className="m-0 flex list-none gap-1 p-0">
                        {NAV_IDS.map((id, i) => (
                            <li key={id}>
                                <a href={`#${id}`}
                                   className="block rounded-lg px-3 py-1.5 text-sm text-muted transition hover:text-primary">
                                    {t.nav.items[i]}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-2">
                    <button type="button" className={`icon-btn text-sm font-semibold`}  aria-label="" onClick={toggleLanguage}>
                        {t.ui.languageButton}
                    </button>
                    <button type="button" className="icon-btn" onClick={toggleTheme}>
                        <Icon name={theme === 'light' ? 'moon' : 'sun'} size={18}/>
                    </button>
                    <a className={`btn hidden min-h-10! py-1.5! md:inline-flex`} href="#contact">{t.nav.cta}</a>
                    <button type="button" className={`icon-btn md:hidden`} aria-expanded={isOpenMenu} aria-controls="mm" onClick={()=>setIsOpenMenu(prev => !prev)}>
                        <Icon name={isOpenMenu ? 'x' : 'menu'}/>
                    </button>
                </div>
            </div>

            {isOpenMenu && (
                <div id="mm" className="menu border-t border-line bg-surface">
                    <div className={`container-main py-4`}>
                        {NAV_IDS.map((id, i) => (
                            <a key={id} href={`#${id}`} onClick={closeMenu}
                               className="flex min-h-12 items-center rounded-xl px-3 hover:bg-plight">
                                {t.nav.items[i]}
                            </a>
                        ))}
                        <a className={`btn mt-3 w-full`} href="#contact" onClick={closeMenu}>{t.nav.cta}</a>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;