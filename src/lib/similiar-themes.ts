import { pipe, A, N, flow, G } from "@mobily/ts-belt"
import chroma from "chroma-js"

import {
  type ColorPalette,
  type ProcessedTheme,
} from "../pages/api/themes.json"

/** Get themes sorted by their color of the parameter */
export function getSimiliarThemes(
  thisTheme: ProcessedTheme,
  allThemes: readonly ProcessedTheme[],
  limit = 6,
): readonly ProcessedTheme[] {
  const baseColors = paletteToOklch(thisTheme.colors)

  const sortedThemes = allThemes
    .filter((theme) => theme.name !== thisTheme.name)
    .sort(({ colors: a }, { colors: b }) => {
      const [aDifference, bDifference] = pipe(
        [a, b] as const,
        A.map(paletteToOklch),
        A.map(
          flow(
            // Get an array of arrays of differences of colors
            A.zipWith(baseColors, calculateVectorsDifferences),
            A.flat,
            A.reduce(0, N.add),
          ),
        ),
      )

      // TS dont cry
      if (G.isNullable(aDifference) || G.isNullable(bDifference)) {
        throw new Error(
          `Should not happen. At least one difference in palettes is nullish.`,
        )
      }

      return aDifference - bDifference
    })
    .slice(0, limit + 1)

  return sortedThemes
}

function paletteToOklch(palette: ColorPalette): readonly Oklch[] {
  return Object.values(palette).map(({ hex }) => chroma.hex(hex).oklch())
}

/** Get the difference of item of each array as an absolute value. */
function calculateVectorsDifferences(
  a: readonly number[],
  b: readonly number[],
): readonly number[] {
  if (a.length !== b.length)
    throw new Error(
      `Provided arrays have unequal lenghts: a: ${A.length} and b: ${b.length}`,
    )

  return pipe(
    a,
    A.zipWith(b, (a1, b1) => Math.abs(b1 - a1)),
  )
}

type Oklch = [lightness: number, chroma: number, hue: number]
