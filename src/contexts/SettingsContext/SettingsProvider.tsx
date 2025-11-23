import { useEffect, useState, type ReactNode } from "react";
import { SettingsContext } from "./SettingsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";

interface UserSettings {
  colorTheme: "light-mode" | "dark-mode" | "system";
  fontTheme: "sans-serif" | "serif" | "monospace";
}

interface SettingsProviderProps {
  children: ReactNode;
}

const defaultSettings: UserSettings = {
  colorTheme: "system",
  fontTheme: "sans-serif",
};

export function SettingsProvider({ children }: SettingsProviderProps) {
  const { currentUser } = useAuthContext();
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [isLoadingSettings, setIsLoadingSettings] = useState(true);

  useEffect(() => {
    if (!currentUser) {
        setSettings(defaultSettings);
        setIsLoadingSettings(false);
        return;
    }

    const docRef = doc(db, "users", currentUser.uid, "settings");
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
        if(snapshot.exists()) {
            setSettings(snapshot.data() as UserSettings);
        } else {
            setSettings(defaultSettings);
        }
        setIsLoadingSettings(false);
    })

    return () => unsubscribe();
  }, [currentUser])

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
