import React, { PropsWithChildren, createContext, useContext, useState } from "react";

type modeType = "dark" | "light"

interface ModeState {
    mode: modeType;
    setMode: (mode: modeType) => void
}

const defaultMode: ModeState = {
    mode: "light",
    setMode: () => {}
}

const ModeContext = createContext(defaultMode)

export const useMode = () => useContext(ModeContext)

export const ModeProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [mode, setMode] = useState<modeType>("light")

    return <ModeContext.Provider value={{ mode, setMode }}>
        {children}
    </ModeContext.Provider>
}