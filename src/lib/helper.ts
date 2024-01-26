import type { ProcessedTheme } from "@api/themes.json"

export function getTitleColors(colors: ProcessedTheme["colors"]) {
  const { LightVibrant, DarkMuted, DarkVibrant, LightMuted, Muted, Vibrant } =
    colors

  return [
    LightVibrant.population > LightMuted.population / 10 ?
      LightVibrant.hex
    : LightMuted.hex,
    DarkVibrant.population > DarkMuted.population / 10 ?
      DarkVibrant.hex
    : DarkMuted.hex,
    Vibrant.population > Muted.population / 10 ? Vibrant.hex : Muted.hex,
  ] as const
}
