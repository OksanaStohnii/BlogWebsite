export function formatUnix(tsSeconds: number, locale = "en-GB"): string {
  const date = new Date(tsSeconds * 1000);
  return date.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
}