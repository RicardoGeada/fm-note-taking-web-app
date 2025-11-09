import { useEffect, useState, type ReactNode } from "react";
import { FireStoreContext } from "./FireStoreContext";
import type { Note } from "../../types/note";

import { collection, onSnapshot, query } from "firebase/firestore";
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

  const value = {
    notes,
    tags
  };

  return (
    <FireStoreContext.Provider value={value}>
      {children}
    </FireStoreContext.Provider>
  );
}
