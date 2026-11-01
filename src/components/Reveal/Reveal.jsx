import {useEffect, useRef} from 'react'

export default function Reveal({as: Tag = 'div', className = '', delay = 0, children}) {
    const ref = useRef(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        if (!('IntersectionObserver' in window)) {
            el.classList.add('in');
            return
        }
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('in');
                    io.unobserve(e.target)
                }
            }),
            {rootMargin: '0px 0px -60px 0px'}
        )
        io.observe(el)
        return () => io.disconnect()
    }, [])
    return (
        <Tag ref={ref} className={`rv ${className}`} style={{transitionDelay: `${delay}s`}}>
            {children}
        </Tag>
    )
}
