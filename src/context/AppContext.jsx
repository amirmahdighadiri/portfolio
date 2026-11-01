import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import fa from "../data/fa";
import en from "../data/en";

const AppContext = createContext(null);

const languages = {
    fa,
    en,
};

export const AppProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || "fa";
    });
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    const direction = language === "fa" ? "rtl" : "ltr";
    const t = languages[language]

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "fa" ? "en" : "fa"));
    };

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = direction;

        localStorage.setItem("language", language);
    }, [language, direction]);

    useEffect(() => {
        document.documentElement.classList.toggle(
            "dark",
            theme === "dark"
        );

        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <AppContext.Provider
            value={{
                language,
                setLanguage,
                toggleLanguage,
                theme,
                setTheme,
                toggleTheme,
                direction,
                t,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    return useContext(AppContext);
};