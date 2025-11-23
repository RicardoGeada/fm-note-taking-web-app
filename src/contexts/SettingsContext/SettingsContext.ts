import { createContext } from "react";

export interface SettingsContextType {
    colorTheme: "light-mode" | "dark-mode" | "system",
    fontTheme: "sans-serif" | "serif" | "monospace",
    isLoadingSettings: boolean,
}

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);