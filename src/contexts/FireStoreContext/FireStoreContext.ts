import { createContext } from "react";
import type { Note } from "../../types/note";

export interface FireStoreContextType {
    notes: Note[];
    tags: string[];
}

export const FireStoreContext = createContext<FireStoreContextType | undefined>(undefined);