import { useState, type ReactNode } from "react";
import { ToastContext, type ToastData } from "./ToastContext";
import ToastContainer from "../../components/ToastContainer/ToastContainer";

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  function showToast(toast: Omit<ToastData, "id">) {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, ...toast }]);

    // remove toast after 3 seconds
    setTimeout(() => {
      remove(id);
    }, 3000);
  }

  function remove(id: string) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
        {children}
        <ToastContainer toasts={toasts} onClose={remove}/>
    </ToastContext.Provider>
  );
}
