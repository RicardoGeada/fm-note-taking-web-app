import { useEffect, useState, type ReactNode } from "react";
import { FireStoreContext } from "./FireStoreContext";
import type { Note } from "../../types/note";

import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useAuthContext } from "../../hooks/useAuthContext";

interface FireStoreProviderProps {
  children: ReactNode;
}

export function FireStoreProvider({ children }: FireStoreProviderProps) {
  const { currentUser } = useAuthContext();
  const [notes, setNotes] = useState<Note[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    if (!currentUser) {
      setNotes([]);
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
      // derive tags from notes
      const allTags = Array.from(new Set(loadedNotes.flatMap((n) => n.tags)));
      setTags(allTags);
    });

    return () => unsubscribe();
  }, [currentUser]);

  const addNote = async (note: Omit<Note, "id">) => {
    if(!currentUser) return;
    await addDoc(collection(db, "users", currentUser.uid, "notes"), note);
  }

  const deleteNote = async (id: string) => {
    if(!currentUser) return;
    const docRef = doc(db, "users", currentUser.uid, "notes", id)
    await deleteDoc(docRef);
  }

  const archiveNote = async (id: string) => {
    if (!currentUser) return;
    const docRef = doc(db, "users", currentUser.uid, "notes", id);
    await updateDoc(docRef, { archived: true });
  }

  const restoreNote = async (id: string) => {
    if (!currentUser) return;
    const docRef = doc(db, "users", currentUser.uid, "notes", id);
    await updateDoc(docRef, { archived: false });
  }

  const value = {
    notes,
    tags,
    addNote,
    deleteNote,
    archiveNote,
    restoreNote
  };

  return (
    <FireStoreContext.Provider value={value}>
      {children}
    </FireStoreContext.Provider>
  );
}
