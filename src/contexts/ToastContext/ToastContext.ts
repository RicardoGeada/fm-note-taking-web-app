import { createContext } from "react";

export type ToastData = {
  id: string;
  text: string;
  error?: boolean;
  link?: {
    text: string;
    to: string;
  };
};

interface ToastContextType {
    showToast: (toast: Omit<ToastData, "id">) => void;
}

export const ToastContext = createContext<ToastContextType | null>(null);
