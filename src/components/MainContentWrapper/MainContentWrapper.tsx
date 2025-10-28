import styles from "./MainContentWrapper.module.scss";
import { Outlet, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import { useCurrentRouteInfo } from "../../hooks/useCurrentRouteInfo";

type Props = {
    children: React.ReactNode,
    className?: string,
}

export default function MainContentWrapper({ children, className }: Props) {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const { noteId } = useParams();
  const { isNewNoteRoute, isSettingsRoute } = useCurrentRouteInfo();

  return (
    <div className={clsx(styles["main-content-wrapper"], className) }>
      {children}

      {!isDesktop && (noteId || isNewNoteRoute || isSettingsRoute) && (
        <div className={styles["overlay"]}>
          <Outlet />
        </div>
      )}

      {isDesktop && (noteId || isNewNoteRoute || isSettingsRoute) && <Outlet />}
    </div>
  );
}