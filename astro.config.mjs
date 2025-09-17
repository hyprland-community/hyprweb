import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import Icons from "unplugin-icons/vite"
import { FileSystemIconLoader } from "unplugin-icons/loaders"

const customCollections = {
  custom: FileSystemIconLoader("./src/assets/icons"),
}

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  site: 'https://hyprland-community.github.io/',
  base: '/hyprweb',
  vite: {
    plugins: [
      Icons({ compiler: "svelte", autoInstall: true, customCollections }),
      Icons({
        compiler: "astro",
        autoInstall: true,
        customCollections,
      }),
    ],
  },
})
