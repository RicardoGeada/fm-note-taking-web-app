import { useMatch, useMatches } from "react-router-dom";

export function useCurrentRouteInfo() {
    const matches = useMatches() as Array<{ handle?: { title?:string } }>;
    const current = matches.find((m) => m.handle?.title);
    const title = current?.handle?.title ?? "";

    const isArchivedRoute = !!useMatch("/archived/*");

    return {
        title,
        isArchivedRoute
    }
}