import { useContext } from "react";
import { NotesContext, type NotesContextType } from "../contexts/NotesContext/NotesContext";

export function useNotesContext(): NotesContextType {
    const ctx  = useContext(NotesContext);
    if (ctx === undefined) {
        throw new Error("useNotesContext must be used within a NotesProvider");
    }
    return ctx;
}