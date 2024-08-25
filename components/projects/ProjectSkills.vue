<template>
  <div class="flex gap-3 items-center py-4 pb-8 flex-nowrap text-slate-100 overflow-x-auto">
    <a
      v-for="skill in skills"
      :key="skill"
      :class="slugfy(skill)"
      class="font-mono sm:text-sm text-xs font-bold bg-slate-100 text-gray-950 px-2 py-1 rounded-full shadow-2xl hover:shadow-3xl transition-shadow duration-300 ease-linear"
      :href="linkTo(skill)"
      :aria-label="$t('skillLink', { skill })"
      target="_blank"
    >{{ skill }}</a>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from './typings'
import { skillLinks } from "./typings";

defineProps<{
  skills: Skill[]
}>()

const slugfy = (str: string) => str.toLowerCase().replace(/(\s|\.|\/)+/g, '-').replace('#', 'sharp')
const linkTo = (skill: Skill) => skillLinks[skill]

</script>

<style scoped>
.tailwindcss {
  background: #5caee6;
  color: black;
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
  color: black;
}

.bulma {
  background: #00d1b2;
  color: black;
}

.javascript {
  background: #efd81d;
  color: black;
}

.typescript{
  background: #3178c6;
  color: inherit;
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
  color: black;
}

.nuxt-js {
  background: #001e26;
  color: inherit;
}

.selenium {
  background: #cf0a2c;
  color: inherit;
}

.telegram-api {
  background: #1f9dcf;
  color: black;
}

.node-js {
  background: #53a244;
  color: black;
}

.express-js {
  background: #323232;
  color: inherit
}
</style>