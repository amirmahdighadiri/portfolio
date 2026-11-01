import {useState , useEffect} from "react";
import { AnimatePresence, motion } from 'motion/react';
function Role({ roles, lang }) {
    const [i, setI] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setI((n) => (n + 1) % roles.length);
        }, 2600);

        return () => clearInterval(id);
    }, [roles.length]);

    return (
        <div
            className="overflow-hidden text-xl font-semibold text-primary md:text-2xl"
            aria-live="polite"
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={`${i}-${lang}`}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block"
                >
                    {roles[i]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}
export default Role;