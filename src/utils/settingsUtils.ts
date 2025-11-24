const validFonts = ["sans-serif", "serif", "monospace"] as const;

export function getInitialFont(): (typeof validFonts)[number] {
  try {
    const stored = localStorage.getItem("fontTheme");
    if (stored && validFonts.includes(stored as typeof validFonts[number])) return stored as typeof validFonts[number];
  } catch {
    return "sans-serif";
  }
  return "sans-serif";
}
