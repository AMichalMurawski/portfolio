import React, { PropsWithChildren, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ModeProvider, useMode } from "./ModeProvider/ModeProvider";
import { StyleProvider, useStyle } from "./StyleProvider/StyleProvider";
import { MediaProvider, useMedia } from "./MediaProvider/MediaProvider";
import { LangProvider } from "./LanguageProvider/LanguageProvider";

const Theme: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
    const { mode } = useMode()
    const style = useStyle()
    const media = useMedia()

    return <ThemeProvider theme={{ mode, ...style, media }}>{children}</ThemeProvider>
}

export const MainProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <LangProvider>
            <MediaProvider>
                <ModeProvider>
                    <StyleProvider>
                        <Theme>
                            {children}
                        </Theme>
                    </StyleProvider>
                </ModeProvider>
            </MediaProvider>
        </LangProvider>
    )
}