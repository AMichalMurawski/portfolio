import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "./useMediaQuery";

interface MediaState {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
}

const defaultMedia: MediaState = {
    mobile: false,
    tablet: false,
    desktop: false,
}

const MediaContext = createContext(defaultMedia)

export const useMedia = () => useContext(MediaContext)

interface PropsType {
    children: unknown;
    custom: number
}

export const MediaProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {

    const mobile = useMediaQuery(480)
    const tablet = useMediaQuery(768)
    const desktop = useMediaQuery(1200)

    return <MediaContext.Provider value={{ mobile, tablet, desktop }}>{children}</MediaContext.Provider>
}