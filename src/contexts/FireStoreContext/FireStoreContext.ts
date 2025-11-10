import { createContext } from "react";
import type { Note } from "../../types/note";

export interface FireStoreContextType {
    notes: Note[];
    tags: string[];
    addNote: (note: Omit<Note, "id">) => Promise<void>,
}

export const FireStoreContext = createContext<FireStoreContextType | undefined>(undefined);