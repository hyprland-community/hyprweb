import type { ProcessedTheme } from "#api/themes.json"

/**
 * Get the colors for the title.
 *
 * Prefers vibrant over muted colors.
 */
export function getTitleColors(colors: ProcessedTheme["colors"]) {
  const vibrantWeight = 10

  const { LightVibrant, DarkMuted, DarkVibrant, LightMuted, Muted, Vibrant } =
    colors

  return [
    LightVibrant.population > LightMuted.population / vibrantWeight ?
      LightVibrant.hex
    : LightMuted.hex,
    DarkVibrant.population > DarkMuted.population / vibrantWeight ?
      DarkVibrant.hex
    : DarkMuted.hex,
    Vibrant.population > Muted.population / vibrantWeight ?
      Vibrant.hex
    : Muted.hex,
  ] as const
}

/**
 *  TODO: Implement and use this
 *  Ensure that a color has a minimum amount of saturation and lightness */
export function boostColorMinimum(
  hex: string,
  applyMinimumSaturation = 80,
  minimumLightness = 80,
): string {
  return hex
}

/**
 *  TODO: Implement and use this
 * */
// export class JsonResponse extends Response {}
