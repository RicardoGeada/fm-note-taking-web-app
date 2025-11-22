import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { NotesContext } from "./NotesContext";
import type { Note } from "../../types/note";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useAuthContext } from "../../hooks/useAuthContext";

interface NotesProviderProps {
  children: ReactNode;
}

export function NotesProvider({ children }: NotesProviderProps) {
  const { currentUser } = useAuthContext();
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoadingNotes, setIsLoadingNotes] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      setNotes([]);
      setIsLoadingNotes(false);
      return;
    }

    const notesQuery = query(collection(db, "users", currentUser.uid, "notes"));
    const unsubscribe = onSnapshot(notesQuery, (snapshot) => {
      // load notes
      const loadedNotes: Note[] = [];
      snapshot.forEach((doc) => {
        loadedNotes.push({ id: doc.id, ...doc.data() } as Note);
      });
      setNotes(loadedNotes);
      setIsLoadingNotes(false);
    });

    return () => unsubscribe();
  }, [currentUser]);


  const tags = useMemo(() => {
    if(!notes.length) return [];
    return Array.from(new Set(notes.flatMap((n) => n.tags))).sort()
  }, [notes]);


  const activeNotes = useMemo(() => notes.filter((n) => !n.archived), [notes]);
  const archivedNotes = useMemo(() => notes.filter((n) => n.archived), [notes]);
  const getNotesByTag = useCallback((tag: string) => notes.filter((n) => n.tags.includes(tag)), [notes]);



  const addNote = async (note: Omit<Note, "id">) => {
    if (!currentUser) return;
    await addDoc(collection(db, "users", currentUser.uid, "notes"), note);
  };

  const deleteNote = async (id: string) => {
    if (!currentUser) return;
    const docRef = doc(db, "users", currentUser.uid, "notes", id);
    await deleteDoc(docRef);
  };

  const archiveNote = async (id: string) => {
    if (!currentUser) return;
    const docRef = doc(db, "users", currentUser.uid, "notes", id);
    await updateDoc(docRef, { archived: true });
  };

  const restoreNote = async (id: string) => {
    if (!currentUser) return;
    const docRef = doc(db, "users", currentUser.uid, "notes", id);
    await updateDoc(docRef, { archived: false });
  };

  const updateNote = async (id: string, note: Omit<Note, "id" | "archived" | "created_at">) => {
    if (!currentUser) return;
    const docRef = doc(db, "users", currentUser.uid, "notes", id);
    await updateDoc(docRef, {...note});
  }

  const value = {
    notes,
    tags,
    isLoadingNotes,
    activeNotes,
    archivedNotes,
    getNotesByTag,
    addNote,
    deleteNote,
    archiveNote,
    restoreNote,
    updateNote,
  };

  return (
    <NotesContext.Provider value={value}>
      {children}
    </NotesContext.Provider>
  );
}
