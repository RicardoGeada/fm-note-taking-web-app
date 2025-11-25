const validFonts = ["sans-serif", "serif", "monospace"] as const;
const validThemes = ["light", "dark", "system"] as const;

export function getInitialFont(): (typeof validFonts)[number] {
  try {
    const stored = localStorage.getItem("fontTheme");
    if (stored && validFonts.includes(stored as (typeof validFonts)[number]))
      return stored as (typeof validFonts)[number];
  } catch {
    return "sans-serif";
  }
  return "sans-serif";
}

export function getInitialTheme(): (typeof validThemes)[number] {
  try {
    const stored = localStorage.getItem("colorTheme");
    if (stored && validThemes.includes(stored as (typeof validThemes)[number]))
      return stored as (typeof validThemes)[number];
  } catch {
    return "system";
  }
  return "system";
}
