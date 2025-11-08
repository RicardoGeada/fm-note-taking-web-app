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

  useEffect(() => {
    if(!currentUser) {
        setNotes([]);
        return
    }

    const notesQuery = query(collection(db, "users", currentUser.uid, "notes"));
    const unsubscribe = onSnapshot(notesQuery, (snapshot) => {
        const loadedNotes: Note[] = [];
        snapshot.forEach((doc) => {
            loadedNotes.push({ id: doc.id, ...doc.data() } as Note)
        });

        setNotes(loadedNotes);
    })

    return () => unsubscribe();
  }, [currentUser]);


  const value = {
    notes
  };

  return (
    <FireStoreContext.Provider value={value}>
      {children}
    </FireStoreContext.Provider>
  );
}
