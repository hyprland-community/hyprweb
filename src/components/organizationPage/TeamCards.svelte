<script lang="ts">
import CardBody from "#components/3dCard/CardBody.svelte"
import CardContainer from "#components/3dCard/CardContainer.svelte"
import CardItem from "#components/3dCard/CardItem.svelte"
</script>

<!-- Context doesnt work with Astro, so lets create this slice fully in Svelte -->

<div
  class="flex max-w-full flex-wrap items-center justify-center gap-8 px-8 lg:grid lg:grid-cols-3"
>
  <!-- RFC -->
  <CardContainer containerClass="mt-20">
    <CardBody
      class="group/card relative  h-auto w-auto rounded-3xl border border-white/[0.2] bg-black p-6 hover:shadow-2xl hover:shadow-cyan-500/[0.1] sm:w-[22rem]"
    >
      <CardItem class="w-full text-xl font-bold  text-white" translateZ={30}>
        <div class="mb-4 flex w-full items-center justify-center">
          <img
            src="https://images-ext-1.discordapp.net/external/Sfe4WDX8-BapzTSt6PBRm7G3JtznnVE8dCN0-pWQmn8/https/s.mj.run/nG05gh6Li-w?format=webp&width=979&height=979"
            class="-mt-20 size-64 rounded-xl shadow-2xl shadow-purple-500 outline outline-pink-500/20 group-hover/card:outline-pink-500/50"
            alt="RFC Team logo"
          />
        </div>
      </CardItem>
      <CardItem class="mb-1 text-xl font-bold  text-white" translateZ={50}>
        <h3 class="">RFC Steering Committee</h3>
      </CardItem>
      <CardItem class="text-base  text-white" translateZ={90}>
        <p class="font-medium text-slate-400">Ideate. Debate. Progress.</p>
      </CardItem>
    </CardBody>

    <div
      class="absolute inset-[-1px] -z-10 rounded-3xl bg-gradient-to-tl from-pink-500 via-purple-500 to-cyan-500 opacity-50 transition-opacity duration-200 group-hover/card:opacity-100"
    ></div>
  </CardContainer>

  <!-- Uhay Web -->
  <CardContainer containerClass="mt-20">
    <CardBody
      class="group/card relative  h-auto w-auto rounded-3xl border border-white/[0.2] bg-black p-6 hover:shadow-2xl hover:shadow-cyan-500/[0.1] sm:w-[22rem]"
    >
      <CardItem class="w-full text-xl font-bold  text-white" translateZ={30}>
        <div class="mb-4 flex w-full items-center justify-center">
          <img
            src="https://cdn.discordapp.com/attachments/1233710054729842729/1235516223819878420/visualdawg_logo_black_background_globe_minimalistic_illustratio_addd6568-b95f-40ec-8de6-e90366f66bea.png?ex=6634a7a6&is=66335626&hm=cff283d06b493c4b3e523134a9b4bea751524cf910cb7fb680a28ed71589034d&"
            class="-mt-20 size-64 rounded-xl shadow-2xl shadow-purple-500 outline outline-pink-500/20 group-hover/card:outline-pink-500/50"
            alt="RFC Team logo"
          />
        </div>
      </CardItem>
      <CardItem class="mb-1 text-xl font-bold  text-white" translateZ={50}>
        <h3 class="">Uuay</h3>
      </CardItem>
      <CardItem class="text-base  text-white" translateZ={90}>
        <p class="font-medium text-slate-400">Web. TS. Design.</p>
      </CardItem>
    </CardBody>

    <div
      class="absolute inset-[-1px] -z-10 rounded-3xl bg-gradient-to-tl from-pink-500 via-purple-500 to-cyan-500 opacity-50 transition-opacity duration-200 group-hover/card:opacity-100"
    ></div>
  </CardContainer>
</div>
