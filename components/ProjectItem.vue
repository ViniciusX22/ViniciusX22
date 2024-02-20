<template>
  <a
    class="sm:w-[486px] sm:h-[276px] w-[278px] h-[159px] p-[3px] [--tw-background-size:278px] sm:[--tw-background-size:486px] rounded-lg bg-gradient-to-r from-purple-800 hover:from-purple-700 via-blue-900 hover:via-blue-800 to-purple-800 hover:to-purple-700 from-20% to-80% hover:animate-gradient-move"
    :href="url"
    target="_blank"
  >
    <div class="sm:w-[480px] sm:h-[270px] w-[272px] h-[153px] relative flex flex-col gap-1 bg-gray-950 text-slate-100 hover:text-gray-200 rounded-lg">
      <div
        ref="overlay"
        class="w-full h-full bg-gradient-to-b z-10 from-transparent to-60% to-slate-950/90 p-4 flex flex-col justify-center items-center rounded-[5px]"
        @mouseenter="fadeOverlay"
        @mouseleave="fadeOverlay"
      >
        <p
          ref="nameEl"
          class="sm:text-3xl text-2xl font-title"
        >{{ name }}</p>
        <p
          ref="descriptionEl"
          class="sm:text-lg text-md font-title"
        >{{ localizedDescription }}</p>
      </div>
      <img
        class="aspect-video w-full rounded-[5px] object-contain absolute"
        :src="cover"
        :alt="localizedDescription"
      >
      <!-- <img
        v-if="!!media"
        class="aspect-video w-full rounded-md object-contain absolute opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-linear"
        :src="media"
        :alt="description"
      > -->
    </div>
  </a>
</template>

<script setup lang="ts">
interface ProjectDescription {
  en: string
  pt: string
}

const { description } = defineProps<{ 
	name: string
	description: ProjectDescription
	cover: string
  media?: string
	url: string
}>()

import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { breakpointsTailwind } from '@vueuse/core'

gsap.registerPlugin(Flip)

const overlay = ref<HTMLElement>()
const nameEl = ref<HTMLElement>()
const descriptionEl = ref<HTMLElement>()

const isMobile = useBreakpoints(breakpointsTailwind).smallerOrEqual('md')
const { locale } = useI18n()

const localizedDescription = computed(() => description[locale.value as keyof ProjectDescription] || description.pt)

let initialState: Flip.FlipState
let tl: gsap.core.Timeline | null = null

const toggleOverlay = () => {
  if (overlay.value) {
    overlay.value.classList.toggle('justify-center')
    overlay.value.classList.toggle('items-center')
    overlay.value.classList.toggle('to-60%')
    overlay.value.classList.toggle('to-slate-950/90')
  
    overlay.value.classList.toggle('justify-end')
    overlay.value.classList.toggle('items-start')
    overlay.value.classList.toggle('to-80%')
    overlay.value.classList.toggle('to-slate-950')
  }
}

const fadeOverlay = () => {
  if (isMobile.value) return
  if (!tl) {
    toggleOverlay()
    tl = Flip.from(initialState, { duration: 0.4, ease: 'power3.inOut', paused: true })
  } else {
    tl.reversed(!tl.reversed())
  }
  tl.resume()
};

onMounted(() => {
	if (overlay.value && nameEl.value && descriptionEl.value && !isMobile.value)
		initialState = Flip.getState([overlay.value, nameEl.value, descriptionEl.value], { props: 'backgroundImage'})
})

onUnmounted(() => {
  if (tl) tl.revert()
})
</script>