import { Outlet } from "react-router-dom";
import { ToastProvider } from "../../contexts/ToastContext/ToastProvider";

export default function AppLayout() {
  return (
    <ToastProvider>
      <Outlet />
    </ToastProvider>
  );
}
