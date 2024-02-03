import Vibrant from "node-vibrant"
import { G, D, pipe } from "@mobily/ts-belt"

import type { APIContext } from "astro"
import { SharpImage } from "#lib/SharpImage"
import { JsonResponse } from "#lib/helper"

const themesFileUrl =
  "https://raw.githubusercontent.com/hyprland-community/theme-repo/main/themes.json"

export async function GET(_context: APIContext) {
  return new JsonResponse(await getThemes())
}

export type ProcessedTheme = Theme & {
  colors: ColorPalette
}

export type ColorPalette = Record<
  ColorNames,
  { hex: string; population: number }
>

export async function getThemes(): Promise<readonly ProcessedTheme[]> {
  // const response = fetch(themesFileUrl).then(
  //   (response) => response.json() as Promise<ThemesData>,
  // )
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

          const heroBuffer = await fetch(heroUrl).then((response) =>
            response.arrayBuffer(),
          )

          // Typings of this lib are a bit broken, as the returned object is actually {default: ...}
          const palettesBase = (
            await new Vibrant(Buffer.from(heroBuffer), {
              maxDimension: 1600,
              ImageClass: SharpImage,
            }).getPalettes()
          ).default as any

          const colors = pipe(
            palettesBase,
            D.map((swatch) => ({
              hex: swatch!.hex,
              population: swatch!.population,
            })),
          ) as ColorPalette

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
          "http://localhost:4321/dev-placeholders/r2.webp",
          "http://localhost:4321/dev-placeholders/r3.webp",
          "http://localhost:4321/dev-placeholders/r1.webp",
          "http://localhost:4321/dev-placeholders/c1.webp",
          "http://localhost:4321/dev-placeholders/p1.webp",
          "http://localhost:4321/dev-placeholders/r1.webp",
        ],
        branch: "main",
        config: "xxx",
        desc: "Vibing old-school",
        repo: "https://github.com/flick0/dotfiles",
      },
      {
        name: "Pastel sunset",
        images: [
          "http://localhost:4321/dev-placeholders/p1.webp",
          "http://localhost:4321/dev-placeholders/c1.webp",
        ],
        branch: "main",
        config: "xxx",
        desc: "Smooth light theme. Inspired by Japan",
        repo: "https://github.com/flick0/dotfiles",
      },
      {
        name: "Gruvvy",
        images: ["http://localhost:4321/dev-placeholders/r1.webp"],
        branch: "main",
        config: "xxx",
        desc: "Retro tech for your eyeholes",
        repo: "https://github.com/flick0/dotfiles",
      },
      {
        name: "Vibrant Vibes",
        images: ["http://localhost:4321/dev-placeholders/c1.webp"],
        branch: "main",
        config: "xxx",
        desc: "Strong colors for your mood",
        repo: "https://github.com/flick0/dotfiles",
      },
      {
        name: "R37R0_4RCH",
        images: ["http://localhost:4321/dev-placeholders/r3.webp"],
        branch: "main",
        config: "xxx",
        desc: "1337 R37R0",
        repo: "https://github.com/flick0/dotfiles",
      },
      {
        name: "Sakura",
        images: ["http://localhost:4321/dev-placeholders/p2.webp"],
        branch: "main",
        config: "xxx",
        desc: "Memories from a trip Japan yet to be made",
        repo: "https://github.com/flick0/dotfiles",
      },
    ],
  }
}
