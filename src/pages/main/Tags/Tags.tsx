import { useMediaQuery } from "react-responsive";
import { Outlet, useParams } from "react-router-dom";
import styles from "./Tags.module.scss";
import NotesList from "../../../components/NotesList/NotesList";
import { TAGS , DUMMY_NOTES } from "../../../dummy-notes";
import SidebarItem from "../../../components/SidebarItem/SidebarItem";
import TagIcon from "../../../assets/images/icon-tag.svg?react";

export default function Tags() {
  const isDesktop = useMediaQuery({ minWidth: 1080 });
  const { tagId, noteId } = useParams();
  const taggedNotes = tagId ? DUMMY_NOTES.filter((note) => note.tags.includes(tagId)) : [];

  return (
    <div className={styles["tagged-notes"]}>

      {(!isDesktop && !tagId) && 
        <div className={styles["tag-list-wrapper"]}>
          <h1 className={styles["tag-list__headline"]}>Tags</h1>
          <ul className={styles["tag-list"]}>
            {TAGS.map((t) => (
              <SidebarItem
                key={t.id}
                to={`/tag/${t.id}`}
                Icon={TagIcon}
                text={t.name}
              />
            ))}
          </ul>
        </div>}


      {(tagId) && 
        <>
          <NotesList notes={taggedNotes} basePath={`/tag/${tagId}`} />
          {!isDesktop && noteId && (
            <div className={styles["overlay"]}>
              <Outlet />
            </div>
          )}
          {isDesktop && noteId && <Outlet />}
        </>
      }

    </div>
  );
}
