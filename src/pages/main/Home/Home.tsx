import { useMediaQuery } from "react-responsive";
import MobileLayout from "../../../layouts/Mobile/MobileLayout";
import DesktopLayout from "../../../layouts/Desktop/DesktopLayout";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { FireStoreProvider } from "../../../contexts/FireStoreContext/FireStoreProvider";

function Home() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const { userLoggedIn } = useAuthContext();

  if (!userLoggedIn) return <Navigate to="/login" />;

  return (
    <FireStoreProvider>
      {isDesktop ? <DesktopLayout /> : <MobileLayout />}
    </FireStoreProvider>
  );
}

export default Home;
