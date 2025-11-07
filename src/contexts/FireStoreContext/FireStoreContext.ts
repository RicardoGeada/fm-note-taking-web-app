import { createContext } from "react";
import type { Note } from "../../types/note";

export interface FireStoreContextType {
    notes: Note[] | null;
    currentNote: Note | null;
}

export const FireStoreContext = createContext<FireStoreContextType | undefined>(undefined);