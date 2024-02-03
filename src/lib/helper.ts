import type { ProcessedTheme } from "#api/themes.json"
import type { Jsonifiable } from "type-fest"

/**
 * Get the colors for the title.
 *
 * Prefers vibrant over muted colors.
 */
export function getTitleColors(
  colors: ProcessedTheme["colors"],
): readonly [light: string, middle: string, dark: string] {
  const vibrantWeight = 10

  const { LightVibrant, DarkMuted, DarkVibrant, LightMuted, Muted, Vibrant } =
    colors

  return [
    LightVibrant.population > LightMuted.population / vibrantWeight ?
      LightVibrant.hex
    : LightMuted.hex,
    Vibrant.population > Muted.population / vibrantWeight ?
      Vibrant.hex
    : Muted.hex,
    DarkVibrant.population > DarkMuted.population / vibrantWeight ?
      DarkVibrant.hex
    : DarkMuted.hex,
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

/** A response constructor with an actual generic */
export class JsonResponse<T extends Jsonifiable> extends Response {
  constructor(body?: T, init?: ResponseInit | undefined) {
    super(JSON.stringify(body), init)
  }

  json(): Promise<T> {
    return super.json()
  }
}

/**
 * Return the author from a repo URL.
 */
export function extractAuthorFromRepoUrl(url: string): string {
  const author = new URL(url).pathname.split("/")[1]

  if (!author) throw new Error(`Failed to get author from url: ${url}`)

  return author
}
