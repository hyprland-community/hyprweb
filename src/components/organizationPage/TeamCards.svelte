<script lang="ts">
import CardBody from "#components/3dCard/CardBody.svelte"
import CardContainer from "#components/3dCard/CardContainer.svelte"
import CardItem from "#components/3dCard/CardItem.svelte"
</script>

<!-- Context doesnt work with Astro, so lets create this slice fully in Svelte -->

<div
  class="flex max-w-full flex-wrap items-center justify-center gap-8 px-8 lg:grid lg:grid-cols-3"
>
  <CardContainer containerClass="mt-20">
    <CardBody
      class="group/card relative h-auto w-auto rounded-xl border border-white/[0.2] bg-black p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1] sm:w-[30rem]"
    >
      <CardItem class="w-full text-xl font-bold  text-white" translateZ={20}>
        <div class="mb-4 flex w-full items-center justify-center">
          <img
            src="https://images-ext-1.discordapp.net/external/Sfe4WDX8-BapzTSt6PBRm7G3JtznnVE8dCN0-pWQmn8/https/s.mj.run/nG05gh6Li-w?format=webp&width=979&height=979"
            class="-mt-20 size-80 rounded-xl shadow-2xl shadow-purple-500 outline outline-pink-500/20"
            alt="RFC Team logo"
          />
        </div>
      </CardItem>
      <CardItem class="text-xl font-bold  text-white" translateZ={40}>
        <h3 class="">RFC Steering Committee</h3>
      </CardItem>
      <CardItem class="text-base  text-white" translateZ={120}>
        <p class="font-medium text-slate-400">
          Ideate. Debate. Progress. Debate again.
        </p>
      </CardItem>
    </CardBody>

    <div
      class="absolute inset-[-2px] -z-10 rounded-xl bg-gradient-to-tl from-pink-500 via-purple-500 to-cyan-500"
    ></div>
  </CardContainer>

  <CardContainer containerClass="mt-20">
    <CardBody
      class="group/card relative h-auto w-auto rounded-xl border border-white/[0.2] bg-black p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1] sm:w-[30rem]"
    >
      <CardItem class="w-full text-xl font-bold  text-white" translateZ={20}>
        <div class="flex w-full items-center justify-center">
          <img
            src="https://images-ext-1.discordapp.net/external/Sfe4WDX8-BapzTSt6PBRm7G3JtznnVE8dCN0-pWQmn8/https/s.mj.run/nG05gh6Li-w?format=webp&width=979&height=979"
            class="-mt-20 size-80 rounded-xl shadow-2xl shadow-cyan-500 outline outline-cyan-500/20"
            alt="RFC Team logo"
          />
        </div>
      </CardItem>
      <CardItem class="text-xl font-bold  text-white" translateZ={40}>
        <h3 class="">RFC Steering Committee</h3>
      </CardItem>
      <CardItem class="text-xl font-bold  text-white" translateZ={120}>
        <p class="font-medium text-slate-400">
          Ideate. Debate. Progress. Debate again.
        </p>
      </CardItem>
    </CardBody>

    <div
      class="absolute inset-[-2px] -z-10 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-500"
    ></div>
  </CardContainer>
  <CardContainer containerClass="mt-20">
    <CardBody
      class="group/card relative h-auto w-auto rounded-xl border border-white/[0.2] bg-black p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1] sm:w-[30rem]"
    >
      <CardItem class="w-full text-xl font-bold  text-white" translateZ={20}>
        <div class="flex w-full items-center justify-center">
          <img
            src="https://images-ext-1.discordapp.net/external/Sfe4WDX8-BapzTSt6PBRm7G3JtznnVE8dCN0-pWQmn8/https/s.mj.run/nG05gh6Li-w?format=webp&width=979&height=979"
            class="-mt-20 size-80 rounded-xl shadow-2xl shadow-cyan-500 outline outline-cyan-500/20"
            alt="RFC Team logo"
          />
        </div>
      </CardItem>
      <CardItem class="text-xl font-bold  text-white" translateZ={40}>
        <h3 class="">RFC Steering Committee</h3>
      </CardItem>
      <CardItem class="text-xl font-bold  text-white" translateZ={120}>
        <p class="font-medium text-slate-400">
          Ideate. Debate. Progress. Debate again.
        </p>
      </CardItem>
    </CardBody>

    <div
      class="absolute inset-[-2px] -z-10 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-500"
    ></div>
  </CardContainer>
</div>
