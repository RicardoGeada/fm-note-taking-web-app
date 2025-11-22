import styles from "./Tags.module.scss";
import NotesList from "../../../components/NotesList/NotesList";
import SidebarItem from "../../../components/SidebarItem/SidebarItem";
import TagIcon from "../../../assets/images/icon-tag.svg?react";
import MainContentWrapper from "../../../components/MainContentWrapper/MainContentWrapper";
import { useNotesContext } from "../../../hooks/useNotesContext";
import { useCurrentRouteInfo } from "../../../hooks/useCurrentRouteInfo";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Tags() {
  const { tagId } = useCurrentRouteInfo();
  const { getNotesByTag, tags, isLoadingNotes } = useNotesContext();
  const navigate = useNavigate();
  const taggedNotes = tagId ? getNotesByTag(tagId) : [];

  useEffect(() => {
    if(!isLoadingNotes && tagId && getNotesByTag(tagId).length === 0) navigate("/all");
  }, [tagId, isLoadingNotes, getNotesByTag, navigate]);

  return (
    <MainContentWrapper>
      {!isLoadingNotes && !tagId && (
        <div className={styles["tag-list-wrapper"]}>
          <h1 className={styles["tag-list__headline"]}>Tags</h1>
          <ul className={styles["tag-list"]}>
            {tags.map((t) => (
              <SidebarItem key={t} to={`/tag/${t}`} Icon={TagIcon} text={t} />
            ))}
          </ul>
        </div>
      )}
      {!isLoadingNotes && tagId && (
        <NotesList notes={taggedNotes} basePath={`/tag/${tagId}`} />
      )}
    </MainContentWrapper>
  );
}
