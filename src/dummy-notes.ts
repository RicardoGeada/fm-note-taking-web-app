// import type { Note } from "./types/note"

const DUMMY_NOTES = [
    {
        id: "note-0",
        archived: false,
        title: "React Performance Optimization",
        tags: ["Dev", "React"],
        created_at: "2024-10-29T15:23:00Z",
        last_edited: "2024-10-29T15:23:00Z",
        text: `
        Key performance optimization techniques:

        1. Code Splitting
        - Use React.lazy() for route-based splitting
        - Implement dynamic imports for heavy components

        2.	Memoization
        - useMemo for expensive calculations
        - useCallback for function props
        - React.memo for component optimization

        3. Virtual List Implementation
        - Use react-window for long lists
        - Implement infinite scrolling

        TODO: Benchmark current application and identify bottlenecks
        `
    },
    {
        id: "note-1",
        archived: false,
        title: "Japan Travel Planning",
        tags: ["Travel", "Personal"],
        created_at: "2024-10-28T15:23:00Z",
        last_edited: "2024-10-28T15:23:00Z",
        text: `
        `
    },
    {
        id: "note-2",
        archived: false,
        title: "Favorite Pasta Recipes",
        tags: ["Cooking", "Recipes"],
        created_at: "2024-10-27T15:23:00Z",
        last_edited: "2024-10-27T15:23:00Z",
        text: `
        `
    },
    {
        id: "note-3",
        archived: false,
        title: "Weekly Workout Plan",
        tags: ["Dev", "React"],
        created_at: "2024-10-25T15:23:00Z",
        last_edited: "2024-10-25T15:23:00Z",
        text: `
        `
    },
    {
        id: "note-4",
        archived: false,
        title: "Meal Prep Ideas",
        tags: ["Cooking", "Health", "Recipes"],
        created_at: "2024-10-12T15:23:00Z",
        last_edited: "2024-10-12T15:23:00Z",
        text: `
        `
    },
    {
        id: "note-5",
        archived: false,
        title: "Reading List",
        tags: ["Personal", "Dev"],
        created_at: "2024-10-05T15:23:00Z",
        last_edited: "2024-10-05T15:23:00Z",
        text: `
        `
    },
    {
        id: "note-6",
        archived: false,
        title: "Fitness Goals 2025",
        tags: ["Fitness", "Health", "Personal"],
        created_at: "2024-09-22T15:23:00Z",
        last_edited: "2024-09-22T15:23:00Z",
        text: `
        `
    },
]

export default DUMMY_NOTES;