import { createContext } from "react";

export interface SettingsContextType {
    colorTheme: "light-mode" | "dark-mode" | "system",
    fontTheme: "sans-serif" | "serif" | "monospace",
    isLoadingSettings: boolean,
    setFontTheme: (theme: "sans-serif" | "serif" | "monospace") => void;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);