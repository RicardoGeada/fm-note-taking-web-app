import { useContext } from "react";
import { FireStoreContext, type FireStoreContextType } from "../contexts/FireStoreContext/FireStoreContext";

export function useFireStoreContext(): FireStoreContextType {
    const ctx  = useContext(FireStoreContext);
    if (ctx === undefined) {
        throw new Error("useFireStoreContext must be used within a FireStoreProvider");
    }
    return ctx;
}