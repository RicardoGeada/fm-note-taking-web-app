import { useEffect, useState, type ReactNode } from "react";
import { SettingsContext } from "./SettingsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { getInitialFont } from "../../utils/settingsUtils";

interface UserSettings {
  colorTheme: "light-mode" | "dark-mode" | "system";
  fontTheme: "sans-serif" | "serif" | "monospace";
}

interface SettingsProviderProps {
  children: ReactNode;
}

const defaultSettings: UserSettings = {
  colorTheme: "system",
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
      document.documentElement.setAttribute("data-font", settings.fontTheme);
      localStorage.setItem("fontTheme", settings.fontTheme);
    }
  }, [isLoadingSettings, settings.fontTheme]);

  const value = {
    ...settings,
    isLoadingSettings,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
