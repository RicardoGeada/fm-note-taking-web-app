import { useContext } from "react";
import { SettingsContext, type SettingsContextType } from "../contexts/SettingsContext/SettingsContext";

export function useSettingsContext(): SettingsContextType {
    const ctx = useContext(SettingsContext);
    if (ctx === undefined) {
        throw new Error("useSettingsContext must be used within a SettingsProvider")
    }
    return ctx;
}