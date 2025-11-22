import { createContext } from "react";
import type { Note } from "../../types/note";

export interface NotesContextType {
    notes: Note[];
    tags: string[];
    isLoadingNotes: boolean;
    activeNotes: Note[];
    archivedNotes: Note[];
    getNotesByTag: (tag: string) => Note[];
    addNote: (note: Omit<Note, "id">) => Promise<void>,
    deleteNote: (id: string) => Promise<void>,
    archiveNote: (id: string) => Promise<void>,
    restoreNote: (id: string) => Promise<void>,
    updateNote: (id: string, note: Omit<Note, "id" | "archived" | "created_at">) => Promise<void>,
}

export const NotesContext = createContext<NotesContextType | undefined>(undefined);