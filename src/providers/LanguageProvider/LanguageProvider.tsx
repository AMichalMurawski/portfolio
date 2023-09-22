import { PropsWithChildren, createContext, useContext, useState } from "react";

type LangType = "en" | "pl"

interface LangState {
    lang: LangType;
    setLang: (lang: LangType) => void;
    toggleLang: () => void
}

const defaultLang: LangState = {
    lang: "en",
    setLang: () => { },
    toggleLang: () => { }
}

const LangContext = createContext(defaultLang)

export const useLang = () => useContext(LangContext)

export const LangProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [lang, setLang] = useState<LangType>("en")

    const toggleLang = (): void => {
        if (lang === "en") { setLang("pl") }
        if (lang === "pl") { setLang("en") }
    }

    return <LangContext.Provider value={{ lang, setLang, toggleLang }}>
        {children}
    </LangContext.Provider>
}