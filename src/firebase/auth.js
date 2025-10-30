import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

export const signUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = async (email, password) => {
    return signInWithEmailAndPassword(email, password);
}

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    //result.user
    return result
}

export const doSignOut = () => {
    return auth.signOut();
}