import { createContext, useEffect, useState } from "react"

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {

    const [lang, setLang] = useState("en")

    const toggleLang = (value) => {
        setLang(value)
        localStorage.setItem("lang", value)
    }

    useEffect(() => {
        const savedLang = localStorage.getItem("lang")
        if (savedLang) {
            setLang(savedLang)
        }
    }, [])

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    )
}