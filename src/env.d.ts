/* eslint-disable unicorn/prevent-abbreviations */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="astro/astro-jsx" />

// See https://github.com/unplugin/unplugin-icons/issues/253
declare module "virtual:icons/*" {
  import { SvelteComponent } from "svelte"
  import type { SvelteHTMLElements } from "svelte/elements"

  export default class extends SvelteComponent<SvelteHTMLElements["svg"]> {}
}

declare module "~icons/*" {
  const component: (props: astroHTML.JSX.SVGAttributes) => astroHTML.JSX.Element
  export default component
}
