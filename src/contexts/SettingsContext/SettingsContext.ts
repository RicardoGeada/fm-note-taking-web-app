import { createContext } from "react";

export interface SettingsContextType {
    colorTheme: "light" | "dark" | "system",
    fontTheme: "sans-serif" | "serif" | "monospace",
    isLoadingSettings: boolean,
    setFontTheme: (theme: "sans-serif" | "serif" | "monospace") => void;
    setColorTheme: (theme: "light" | "dark" | "system") => void;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);