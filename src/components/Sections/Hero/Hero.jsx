import React from 'react';
import {useAppContext} from "../../../context/AppContext.jsx";
import Role from "../../Role/Role.jsx";


function Hero() {
    const {t , language} = useAppContext()
    return (
        <section id="top" className="relative overflow-hidden pb-20 pt-28 md:pt-36">
            <div aria-hidden="true"
                 className="pointer-events-none absolute -top-40 start-1/2 h-[440px] w-[min(700px,100%)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--color-plight),transparent)] opacity-80 rtl:translate-x-1/2" />
            <div className={`container-main relative grid items-center gap-12 md:grid-cols-2`}>
                <div className="min-w-0">
                    <p className="rise m-0 text-muted delay-100">{t.hero.greeting}</p>
                    <h1 className="rise mb-1.5 mt-1 text-4xl font-bold leading-tight md:text-6xl delay-200">{t.personal.name}</h1>
                    <div className="rise delay-300 my-3"><Role roles={t.hero.roles} lang={language}/></div>
                    <p className="rise mt-2 max-w-xl text-lg text-muted delay-400">{t.hero.description}</p>
                    <div className="rise mt-8 flex flex-wrap gap-3 delay-500">
                        <a className="btn" href="#projects">{t.hero.viewProjects}</a>
                        <a className="btn-secondary" href="#contact">{t.nav.cta}</a>
                    </div>
                </div>

                <div className="rise grid justify-items-center gap-3.5 max-md:order-first delay-300">
                    <div className="fl">
                        <div className="avatar">
                            <div className="in"><img src="/me.webp" alt={t.personal.name} className=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;