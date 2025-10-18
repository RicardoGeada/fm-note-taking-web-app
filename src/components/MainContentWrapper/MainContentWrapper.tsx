import styles from "./MainContentWrapper.module.scss";
import { Outlet, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";

type Props = {
    children: React.ReactNode,
    className?: string,
}

export default function MainContentWrapper({ children, className }: Props) {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const { noteId } = useParams();

  return (
    <div className={clsx(styles["main-content-wrapper"], className) }>
      {children}

      {!isDesktop && noteId && (
        <div className={styles["overlay"]}>
          <Outlet />
        </div>
      )}

      {isDesktop && noteId && <Outlet />}
    </div>
  );
}