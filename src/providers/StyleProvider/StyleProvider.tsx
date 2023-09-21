import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from "react"
import { styleBasic, styleLight, styleDark } from "./styleData"
import { useMode } from "../ModeProvider/ModeProvider"

const StyleContext = createContext({ ...styleBasic, ...styleDark, ...styleLight })

export const useStyle = () => useContext(StyleContext)

export const StyleProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [style, setStyle] = useState({ ...styleBasic, ...styleDark })
    const { mode } = useMode()

    useEffect(() => {
        if (mode === "light") {
            setStyle({ ...styleBasic, ...styleLight })
        }
        if (mode === "dark") {
            setStyle({ ...styleBasic, ...styleDark })
        }
    }, [mode])

    return <StyleContext.Provider value={style} > {children}</StyleContext.Provider>
}