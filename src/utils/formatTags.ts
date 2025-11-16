export default function formatTags(input: string): string[] {
  return Array.from(
    new Set(
      input
        .toLowerCase()
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    )
  );
}
