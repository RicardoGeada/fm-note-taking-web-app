import { useEffect, useState, type ReactNode } from "react";
import { SettingsContext } from "./SettingsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { getInitialFont, getInitialTheme } from "../../utils/settingsUtils";

interface UserSettings {
  colorTheme: "light" | "dark" | "system";
  fontTheme: "sans-serif" | "serif" | "monospace";
}

interface SettingsProviderProps {
  children: ReactNode;
}

const defaultSettings: UserSettings = {
  colorTheme: getInitialTheme(),
  fontTheme: getInitialFont(),
};

export function SettingsProvider({ children }: SettingsProviderProps) {
  const { currentUser } = useAuthContext();
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [isLoadingSettings, setIsLoadingSettings] = useState(true);

  // --- Sync from Firestore ---
  useEffect(() => {
    if (!currentUser) {
      setSettings(defaultSettings);
      setIsLoadingSettings(false);
      return;
    }

    const docRef = doc(db, "users", currentUser.uid, "settings", "preferences");
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data() as UserSettings;
        setSettings(data);
        localStorage.setItem("fontTheme", data.fontTheme);
        localStorage.setItem("colorTheme", data.colorTheme);
      } else {
        setSettings(defaultSettings);
      }
      setIsLoadingSettings(false);
    });

    return () => unsubscribe();
  }, [currentUser]);

  // --- Apply DOM updates ---
  useEffect(() => {
    if (!isLoadingSettings) {
      const { fontTheme, colorTheme } = settings;
      document.documentElement.setAttribute("data-font", fontTheme);
      localStorage.setItem("fontTheme", fontTheme);
      
      if (colorTheme === "light") {
        document.documentElement.setAttribute("data-theme", "light");
      } else if (colorTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      localStorage.setItem("colorTheme", colorTheme);
    }
  }, [isLoadingSettings, settings]);

  const setFontTheme = (theme: "sans-serif" | "serif" | "monospace") => {
    setSettings(prev => {return {
      ...prev,
      fontTheme: theme,
    }})
  }

  const setColorTheme = (theme: "light" | "dark" | "system") => {
    setSettings(prev => {return {
      ...prev,
      colorTheme: theme,
    }})
  }

  const value = {
    ...settings,
    isLoadingSettings,
    setFontTheme,
    setColorTheme,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
