import Vibrant from "node-vibrant"
import { G, D, pipe } from "@mobily/ts-belt"

import type { APIContext } from "astro"

// TODO: add some way to load dummy themes in dev mode
// TODO: error handling
// TODO: calculate gradient / fancy title colors
// - Title: Should have enough contrast between the layers
// - Gradient: Should just look nice, default vibrant palette might be good enough

const themesFileUrl =
  "https://raw.githubusercontent.com/hyprland-community/theme-repo/main/themes.json"

export async function GET(_context: APIContext) {
  const response = new Response(JSON.stringify(await getThemes()))

  return response
}

export type ProcessedTheme = Theme & {
  colors: Record<ColorNames, { hex: string; population: number }>
}

async function getThemes(): Promise<readonly ProcessedTheme[]> {
  // return []
  const themes = await Promise.all(
    await fetch(themesFileUrl)
      .then((response) => response.json() as Promise<ThemesData>)
      .then((response) => response.themes)
      .then((unprocessed) =>
        unprocessed.map(async (theme) => {
          const heroUrl = theme.images[0]

          if (!heroUrl) {
            console.warn(`No image found for ${theme.name}`)
            return
          }

          const heroBuffer = await fetch(heroUrl).then((response) =>
            response.arrayBuffer(),
          )

          // Typings of this lib are a bit broken, as the returned object is actually {default: ...}
          const palettesBase: Palette = (
            await new Vibrant(Buffer.from(heroBuffer), {
              maxDimension: 1600,
            }).getPalettes()
          ).default as any

          const colors = pipe(
            palettesBase,
            D.map((swatch) => ({
              hex: swatch!.hex,
              population: swatch!.population,
            })),
          )

          return { ...theme, colors }
        }),
      ),
  )

  return themes.filter(G.isNotNullable)
}

type ThemesData = {
  themes: readonly Theme[]
}

type Theme = {
  name: string
  repo: string
  branch: string
  config: string
  desc: string
  images: string[]
}

// This mess is nessecary, as this lib does not export the types >-<
type Palette = Awaited<ReturnType<InstanceType<typeof Vibrant>["palette"]>>

type ColorNames =
  | "Vibrant"
  | "Muted"
  | "DarkVibrant"
  | "DarkMuted"
  | "LightVibrant"
  | "LightMuted"
