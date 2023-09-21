import React, { PropsWithChildren, createContext, useContext, useState } from "react";

type modeType = "dark" | "light"

export interface ModeState {
    mode: modeType;
    setMode: (mode: modeType) => void;
    toggleMode: () => void
}

const defaultMode: ModeState = {
    mode: "light",
    setMode: () => { },
    toggleMode: () => { }
}

const ModeContext = createContext(defaultMode)

export const useMode = () => useContext(ModeContext)

export const ModeProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [mode, setMode] = useState<modeType>("light")

    const toggleMode = (): void => {
        if (mode === "light") { setMode("dark") }
        if (mode === "dark") { setMode("light") }
    }

    return <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
        {children}
    </ModeContext.Provider>
}