// import type { Note } from "./types/note"
const TAGS = [
  { id: "dev", name: "Dev" },
  { id: "react", name: "React" },
  { id: "travel", name: "Travel" },
  { id: "typescript", name: "TypeScript" },
  { id: "health", name: "Health" },
  { id: "personal", name: "Personal" },
  { id: "cooking", name: "Cooking" },
  { id: "recipes", name: "Recipes" },
  { id: "shopping", name: "Shopping" },
  { id: "fitness", name: "Fitness" },
];

const DUMMY_NOTES = [
  {
    id: "note-0",
    archived: false,
    title: "React Performance Optimization",
    tags: ["dev", "react"],
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
    `,
  },
  {
    id: "note-1",
    archived: false,
    title: "Japan Travel Planning",
    tags: ["travel", "personal"],
    created_at: "2024-10-28T15:23:00Z",
    last_edited: "2024-10-28T15:23:00Z",
    text: `
        `,
  },
  {
    id: "note-2",
    archived: false,
    title: "Favorite Pasta Recipes",
    tags: ["cooking", "recipes"],
    created_at: "2024-10-27T15:23:00Z",
    last_edited: "2024-10-27T15:23:00Z",
    text: `
        `,
  },
  {
    id: "note-3",
    archived: false,
    title: "Weekly Workout Plan",
    tags: ["dev", "react"],
    created_at: "2024-10-25T15:23:00Z",
    last_edited: "2024-10-25T15:23:00Z",
    text: `
        `,
  },
  {
    id: "note-4",
    archived: false,
    title: "Meal Prep Ideas",
    tags: ["cooking", "health", "recipes"],
    created_at: "2024-10-12T15:23:00Z",
    last_edited: "2024-10-12T15:23:00Z",
    text: `
        `,
  },
  {
    id: "note-5",
    archived: false,
    title: "Reading List",
    tags: ["personal", "dev"],
    created_at: "2024-10-05T15:23:00Z",
    last_edited: "2024-10-05T15:23:00Z",
    text: `
        `,
  },
  {
    id: "note-6",
    archived: false,
    title: "Fitness Goals 2025",
    tags: ["fitness", "health", "personal"],
    created_at: "2024-09-22T15:23:00Z",
    last_edited: "2024-09-22T15:23:00Z",
    text: `
        `,
  },
  {
    id: "note-7",
    archived: true,
    title: "TypeScript Migration Guide",
    tags: ["dev", "react", "typescript"],
    created_at: "2024-10-26T15:23:00Z",
    last_edited: "2024-10-26T15:23:00Z",
    text: `
Project migration steps:

1. Initial Setup
- Install TypeScript dependencies
- Configure tsconfig.json
- Set up build pipeline

2. Migration Strategy
- Start with newer modules
- Add type definitions gradually
- Use 'any' temporarily for complex cases

3. Testing Approach
- Update test configuration
- Add type testing
- Validate build process

Deadline: End of Q4 2024
    `,
  },
  {
    id: "note-8",
    archived: true,
    title: "Gift Ideas",
    tags: ["personal", "shopping"],
    created_at: "2024-10-20T15:23:00Z",
    last_edited: "2024-10-20T15:23:00Z",
    text: `
        `,
  },
  {
    id: "note-9",
    archived: true,
    title: "React Component Library",
    tags: ["dev", "react"],
    created_at: "2024-10-15T15:23:00Z",
    last_edited: "2024-10-15T15:23:00Z",
    text: `
        `,
  },
];

export { TAGS, DUMMY_NOTES };
