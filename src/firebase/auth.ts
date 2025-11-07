import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

export const signUp = async (email : string, password: string) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    // create document for user in database
    const userRef = doc(db, "users", result.user.uid);
    await setDoc(userRef, {
        createdAt: serverTimestamp(),
    });

    return result
};

export const signIn = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    // create document for user in database
    const userRef = doc(db, "users", result.user.uid);
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) {
      await setDoc(userRef, {
        createdAt: serverTimestamp(),
      });
    }

    return result
}

export const doSignOut = () => {
    return auth.signOut();
}

export const doSendPasswordResetEmail = (email: string) => {
    return sendPasswordResetEmail(auth, email)
}

export const doConfirmPasswordReset = (oobCode: string, newPassword: string) => {
    return confirmPasswordReset(auth, oobCode, newPassword)
}

