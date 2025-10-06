import { useMediaQuery } from "react-responsive";
import MobileLayout from "../../../layouts/Mobile/MobileLayout";
import DesktopLayout from "../../../layouts/Desktop/DesktopLayout";

function Home() {
  const isDesktop = useMediaQuery({minWidth: 1080});

  return (
    isDesktop ? <DesktopLayout /> : <MobileLayout />
  );
}

export default Home;
