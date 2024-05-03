import type { ProcessedTheme } from "#api/themes.json"
import chroma from "chroma-js"
import type { Jsonifiable } from "type-fest"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Get the colors for the title.
 *
 * Prefers vibrant over muted colors.
 */
export function getTitleColors(
  colors: ProcessedTheme["colors"],
): readonly [light: string, middle: string, dark: string] {
  const vibrantWeight = 25

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

/** Gets a HEX color and brightens it, if it's too dar */
export function setMinimumReadableLightness(color: string): string {
  const oklch = chroma.hex(color).oklch()

  return oklch[0] < 0.6 ? chroma.oklch(0.7, oklch[1], oklch[2]).hex() : color
}

/** Merge Tailwind classes */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function trimText(string: string, length: number) {
  return string.length > length ? string.slice(0, length - 1) + "…" : string
}
