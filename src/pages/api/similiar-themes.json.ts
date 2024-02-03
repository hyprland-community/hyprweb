import { pipe, A, N, flow, G } from "@mobily/ts-belt"
import chroma from "chroma-js"

import type { APIContext, APIRoute } from "astro"
import {
  getThemes,
  type ColorPalette,
  type ProcessedTheme,
} from "./themes.json"
import { JsonResponse } from "#lib/helper"

/** Get themes sorted by their color of the parameter */
export async function GET({
  params,
}: APIContext<Record<string, any>, { name: string; limit?: string }>): Promise<
  JsonResponse<readonly ProcessedTheme[]>
> {
  const { name, limit = 6 } = params
  const parsedLimit = Number(limit)

  if (Number.isNaN(parsedLimit)) {
    throw new Error(`Invalid limit: "${limit}" provided.`)
  }

  if (!name) {
    throw new Error(
      `Requested similiar themes for ${name}, but ${name} could not be found in Params:\n ${params}`,
    )
  }

  const themes = await getThemes()
  const baseTheme = themes.find((theme) => theme.name === name)
  if (!baseTheme) {
    throw new Error(
      `Requested similiar themes for name: "${name}", but no such theme could be found.`,
    )
  }

  const baseColors = paletteToOklch(baseTheme.colors)

  const sortedThemes = themes
    .filter((theme) => theme.name !== name)
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
    .slice(0, parsedLimit + 1)

  return new JsonResponse(sortedThemes)
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
