<script lang="ts" context="module">
export type Card3dContext = Writable<{
  hasMouseEntered: boolean
  coordinates: [x: number, y: number]
}>
</script>

<script lang="ts">
import { setContext } from "svelte"
import { writable, type Writable } from "svelte/store"

export let containerClass: string | undefined = undefined

let wrapperElement: HTMLDivElement
const context = setContext(
  "3dCard",
  writable({
    hasMouseEntered: false,
    coordinates: [0, 0],
  }) as Card3dContext,
)

function handleMouseMove(e: MouseEvent) {
  const { left, top, width, height } = wrapperElement.getBoundingClientRect()
  const x = e.clientX - left - width / 2
  const y = e.clientY - top - height / 2

  context.update((state) => ({ ...state, coordinates: [x, y] }))
}

function handleMouseEnter(e: MouseEvent) {
  context.update((state) => ({ ...state, hasMouseEntered: true }))
}

function handleMouseLeave(e: MouseEvent) {
  context.update((_) => ({ coordinates: [0, 0], hasMouseEntered: false }))
}
</script>

<div class="flex items-center justify-center [perspective:1000px]">
  <div
    class={`${containerClass} group/card translate flex w-max  items-center  justify-center transition-all  [transform-style:preserve-3d]  `}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    on:mousemove={handleMouseMove}
    bind:this={wrapperElement}
    role="contentinfo"
    style:transform={`rotateY(${$context.coordinates[ 0 ] / 25}deg) rotateX(${$context.coordinates[ 1 ] / 25}deg) `}
  >
    <div
      class={`${$$restProps.class} relative flex  items-center justify-center   transition-all duration-200 ease-linear [transform-style:preserve-3d] `}
    >
      <slot />
    </div>
  </div>
</div>
