import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import Icons from "unplugin-icons/vite"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  vite: {
    plugins: [
      Icons({ compiler: "svelte", autoInstall: true }),
      Icons({ compiler: "astro", autoInstall: true }),
    ],
  },
})
