import { useState, type ReactNode } from "react";
import { FireStoreContext } from "./FireStoreContext";
import type { Note } from "../../types/note";


interface FireStoreProviderProps {
    children: ReactNode;
}

export function FireStoreProvider({children}: FireStoreProviderProps) {

    const [notes, setNotes] = useState<Note[] | null>(null);
    const [currentNote, setCurrentNote] = useState<Note | null>(null);


    const value = {
        notes,
        currentNote
    }

    return (
        <FireStoreContext.Provider value={value}>
            {children}
        </FireStoreContext.Provider>
    )
}