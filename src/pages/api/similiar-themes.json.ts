import { pipe, A, N, flow } from "@mobily/ts-belt"
import chroma from "chroma-js"

import type { APIContext } from "astro"
import type { ColorPalette, ProcessedTheme } from "./themes.json"
import type { JsonResponse } from "#types/Types"

/** Get themes sorted by their color of the parameter */
export async function GET({
  params,
}: APIContext<never, { name: string; limit?: string }>): Promise<
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

  const themes = await fetch("/api/themes.json").then(
    (response) => response.json() as Promise<ProcessedTheme[]>,
  )

  const baseTheme = themes.find((theme) => theme.name === name)
  if (!baseTheme) {
    throw new Error(
      `Requested similiar themes for name: "${name}", but no such theme could be found.`,
    )
  }
  // What to do about the population? Comparing colors which do not exists doesnt make too much sense. Might be easier though
  // Also the "non-existing" colors seeem to match the theme quite well
  // But it might not be represantative
  // Lets try and see what happens if we just ignore the population
  //
  // And should we compare by Hue only, or also lightness?
  // Lightness would make sense, as this would show light-themes for light-themes
  // But how to go about it?
  // Diffing each value would make sense I think
  // Then comes the question: What is more important: Hue or Lightness? (Let's ignore saturation)
  // I think Hue, because like that someone might also discover a light-version of the color theme he likes
  // But what if he wants light-themes primarly?
  // Booth seem to be equally important, hmm
  // Looks like we need to compare Saturation too, because otherwise monochrome or very desaturated themes will be the same as some highly saturated pop colors theme
  // But we can decrease the importance of saturation I think. Just because two themes have the same saturation, it really doesnt say anything
  // For now lets not decrease it, cuz its easier and the function looks so nice.

  const baseColors = paletteToOklch(baseTheme.colors)

  const sortedThemes = themes
    .filter((theme) => theme.name !== name)
    .toSorted(({ colors: a }, { colors: b }) => {
      const [aDifference, bDifference] = pipe(
        [a, b] as const,
        A.map(paletteToOklch),
        A.map(
          flow(
            A.zipWith(baseColors, calculateVec3Differnce),
            A.reduce(0, N.add),
          ),
        ),
      )

      // su TS
      if (aDifference === undefined || bDifference === undefined) {
        throw new Error(
          `Should not happen. At least one difference in palettes is undefined`,
        )
      }

      return bDifference - aDifference
    })
    .slice(0, parsedLimit + 1)

  return new Response(JSON.stringify(sortedThemes))
}

function paletteToOklch(palette: ColorPalette): readonly Oklch[] {
  return Object.values(palette).map(({ hex }) => chroma.hex(hex).oklch())
}

function calculateVec3Differnce(colors1: Oklch, colors2: Oklch): number {
  return pipe(
    colors1,
    A.zipWith(colors2, (a, b) => b - a),
    A.flat,
    A.reduce(0, N.add),
  )
}

type Oklch = [lightness: number, chroma: number, hue: number]
