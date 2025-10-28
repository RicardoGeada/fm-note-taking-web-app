import { useMatch, useMatches } from "react-router-dom";

export function useCurrentRouteInfo() {
    const matches = useMatches() as Array<{ handle?: { title?:string, isNewNote?:boolean, isSettingsChildRoute?: boolean } }>;
    const current = matches.find((m) => m.handle?.title);
    const title = current?.handle?.title ?? "";

    const isArchivedRoute = !!useMatch("/archived/*");
    const tagMatch = useMatch("/tag/:tagId/*");
    const isTagRoute = !!tagMatch;
    const tagId = tagMatch?.params?.tagId ?? null;
    const isSearchRoute = !!useMatch("/search");
    const isNewNoteRoute = matches.some(m => m.handle?.isNewNote);
    const isSettingsRoute = matches.some(m => m.handle?.isSettingsChildRoute);

    return {
        title,
        isArchivedRoute,
        isTagRoute, 
        tagId,
        isSearchRoute,
        isNewNoteRoute,
        isSettingsRoute
    }
}