import styles from "./Tags.module.scss";
import NotesList from "../../../components/NotesList/NotesList";
import SidebarItem from "../../../components/SidebarItem/SidebarItem";
import TagIcon from "../../../assets/images/icon-tag.svg?react";
import MainContentWrapper from "../../../components/MainContentWrapper/MainContentWrapper";
import { useFireStoreContext } from "../../../hooks/useFireStoreContext";
import { useCurrentRouteInfo } from "../../../hooks/useCurrentRouteInfo";

export default function Tags() {
  const { tagId } = useCurrentRouteInfo();
  const { getNotesByTag, tags, isLoadingNotes } = useFireStoreContext();
  const taggedNotes = tagId ? getNotesByTag(tagId) : [];

  return (
    <MainContentWrapper>
      {!isLoadingNotes && !tagId && (
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
      {!isLoadingNotes && tagId && <NotesList notes={taggedNotes} basePath={`/tag/${tagId}`} />}
    </MainContentWrapper>
  );
}
