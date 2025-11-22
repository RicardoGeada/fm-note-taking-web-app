import type { ReactNode } from "react";
import { SettingsContext } from "./SettingsContext";

interface SettingsProviderProps {
    children: ReactNode;
}

export function SettingsProvider({children}: SettingsProviderProps) {
    const colorTheme : "light-mode" | "dark-mode" | "system" = "light-mode";
    const fontTheme : "sans-serif" | "serif" | "monospace" = "sans-serif";

    const value = {
        colorTheme,
        fontTheme,
    }

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    )
}