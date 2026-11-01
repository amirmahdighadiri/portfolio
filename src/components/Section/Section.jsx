function Section({id, children }) {
    return (
        <section id={id} className="border-t border-line py-16 md:py-20">
            <div className="container-main">{children}</div>
        </section>
    );
}

export default Section;