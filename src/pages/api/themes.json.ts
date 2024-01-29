import Vibrant from "node-vibrant"
import { G, D, pipe } from "@mobily/ts-belt"

import type { APIContext } from "astro"
import type { JsonResponse } from "src/types/Types"

const themesFileUrl =
  "https://raw.githubusercontent.com/hyprland-community/theme-repo/main/themes.json"

export async function GET(
  _context: APIContext,
): Promise<JsonResponse<readonly ProcessedTheme[]>> {
  const response = new Response(JSON.stringify(await getThemes()))

  // @ts-expect-error
  return response
}

export type ProcessedTheme = Theme & {
  colors: ColorPalette
}

export type ColorPalette = Record<
  ColorNames,
  { hex: string; population: number }
>

async function getThemes(): Promise<readonly ProcessedTheme[]> {
  const response =
    import.meta.env.DEV ?
      getPlaceholderThemes()
    : fetch(themesFileUrl).then(
        (response) => response.json() as Promise<ThemesData>,
      )

  const themes = await Promise.all(
    await response
      .then((response) => response.themes)
      .then(async (unprocessed) =>
        unprocessed.map(async (theme) => {
          const heroUrl = theme.images[0]

          if (!heroUrl) {
            console.warn(`No image found for ${theme.name}`)
            return
          }

          console.log(heroUrl)
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

/**
 * Useful for dev, as this will use local placeholder images and fake themes.
 *
 * Speeding up the dev process as it wont fetch images and themes online anymore on every reload.
 */
async function getPlaceholderThemes(): Promise<ThemesData> {
  // TODO: Figure out how to use the dev-server url
  // Instead of hardcoding the port 4321, which could be taken
  return {
    themes: [
      {
        name: "GG Retro",
        images: [
          "http://localhost:4321/dev-placeholders/r2.jpg",
          "http://localhost:4321/dev-placeholders/r3.jpg",
          "http://localhost:4321/dev-placeholders/r1.jpg",
          "http://localhost:4321/dev-placeholders/c1.jpg",
          "http://localhost:4321/dev-placeholders/p1.jpg",
          "http://localhost:4321/dev-placeholders/r4.jpg",
        ],
        branch: "main",
        config: "xxx",
        desc: "Vibing old-school",
        repo: "ay this should be updated once we use this",
      },
      {
        name: "Pastel sunset",
        images: ["http://localhost:4321/dev-placeholders/p1.jpg"],
        branch: "main",
        config: "xxx",
        desc: "Smooth light theme. Inspired by Japan",
        repo: "ay this should be updated once we use this",
      },
      {
        name: "Gruvvy",
        images: ["http://localhost:4321/dev-placeholders/r1.jpg"],
        branch: "main",
        config: "xxx",
        desc: "Retro tech for your eyeholes",
        repo: "ay this should be updated once we use this",
      },
      {
        name: "Vibrant Vibes",
        images: ["http://localhost:4321/dev-placeholders/c1.jpg"],
        branch: "main",
        config: "xxx",
        desc: "Strong colors for your mood",
        repo: "ay this should be updated once we use this",
      },
    ],
  }
}
