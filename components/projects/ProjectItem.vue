<template>
  <div class="sm:w-[486px] sm:h-[276px] w-[278px] h-[159px] p-[3px] [--tw-background-size:278px] sm:[--tw-background-size:486px] rounded-lg bg-gradient-to-r from-purple-800 hover:from-purple-700 via-blue-900 hover:via-blue-800 to-purple-800 hover:to-purple-700 from-20% to-80% hover:animate-gradient-move">
    <a
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
    <div class="flex gap-3 items-center py-4 pb-8 flex-wrap text-slate-100">
      <a
        v-for="skill in skills"
        :key="skill"
        :class="slugfy(skill)"
        class="font-mono text-sm font-bold bg-slate-100 text-gray-950 px-2 py-1 rounded-full shadow-2xl hover:shadow-3xl transition-shadow duration-300 ease-linear"
        :href="linkTo(skill)"
        :aria-label="$t('skillLink', { skill })"
        target="_blank"
      >{{ skill }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { breakpointsTailwind } from '@vueuse/core'
import type { ProjectDescription, Skill } from './typings';
import { skillLinks } from "./typings";

const { description } = defineProps<{ 
	name: string
	description: ProjectDescription
	cover: string
  media?: string
	url: string
  skills: Skill[]
}>()

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

const slugfy = (str: string) => str.toLowerCase().replace(/(\s|\.|\/)+/g, '-').replace('#', 'sharp')
const linkTo = (skill: Skill) => skillLinks[skill]

onMounted(() => {
	if (overlay.value && nameEl.value && descriptionEl.value && !isMobile.value)
		initialState = Flip.getState([overlay.value, nameEl.value, descriptionEl.value], { props: 'backgroundImage'})
})

onUnmounted(() => {
  if (tl) tl.revert()
})
</script>
<style scoped>
.tailwindcss {
  background: #5caee6;
  color: inherit;
}

.python {
  background: #3672a4;
  color: inherit;
}

.mongodb {
  color: #1b2d39;
}

.html-css {
  background: #fc4a0b;
  color: inherit;
}

.bulma {
  background: #00d1b2;
  color: black;
}

.javascript {
  background: #efd81d;
  color: black;
}

.unity {
  background: white;
  color: black;
}

.csharp {
  background: #2e2665;
  color: inherit;
}

.vue-js {
  background: #68b281;
  color: inherit;
}

.nuxt-js {
  background: #001e26;
  color: inherit;
}
</style>