import styles from "./Tags.module.scss";
import NotesList from "../../../components/NotesList/NotesList";
import SidebarItem from "../../../components/SidebarItem/SidebarItem";
import TagIcon from "../../../assets/images/icon-tag.svg?react";
import MainContentWrapper from "../../../components/MainContentWrapper/MainContentWrapper";
import { useFireStoreContext } from "../../../hooks/useFireStoreContext";
import { useCurrentRouteInfo } from "../../../hooks/useCurrentRouteInfo";

export default function Tags() {
  const { tagId } = useCurrentRouteInfo();
  const { notes, tags } = useFireStoreContext();
  const taggedNotes = tagId
    ? notes.filter((note) => note.tags.includes(tagId))
    : [];

  return (
    <MainContentWrapper>
      {!tagId && (
        <div className={styles["tag-list-wrapper"]}>
          <h1 className={styles["tag-list__headline"]}>Tags</h1>
          <ul className={styles["tag-list"]}>
            {tags.map((t) => (
              <SidebarItem
                key={t}
                to={`/tag/${t}`}
                Icon={TagIcon}
                text={t}
              />
            ))}
          </ul>
        </div>
      )}
      {tagId && <NotesList notes={taggedNotes} basePath={`/tag/${tagId}`} />}
    </MainContentWrapper>
  );
}
