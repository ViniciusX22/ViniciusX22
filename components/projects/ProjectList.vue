<template>
  <div class="flex flex-wrap my-10 gap-10 gap-y-16 justify-center xl:justify-start">
    <ProjectItem
      v-for="project in projects"
      v-bind="project"
      :key="`${project.name}-${locale}-${isMobile}`"
    />
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import type { Project } from './typings';
import ProjectItem from './ProjectItem.vue'

const isMobile = useBreakpoints(breakpointsTailwind).smallerOrEqual('md')
const { locale } = useI18n()

const projects: Project[] = [
  {
    "name": "Nook",
    "description": {
      "en": "An entertainment focused Discord bot",
      "pt": "Um bot de entretenimento para o Discord"
    },
    "cover": "/imgs/nook-discord-bot.webp",
    "url": "http://nookbot.fun",
    "skills": ["Python", "MongoDB"]
  },
  {
    "name": "Trading Bot",
    "description": {
      "en": "A bot that converts signals into trade orders",
      "pt": "Um bot que converte sinais em operações binárias"
    },
    "cover": "/imgs/pocket-option-trading-bot-telegram.webp",
    "url": "https://github.com/ViniciusX22/trading-bot",
    "skills": ["Python", "Selenium", "Telegram API"]
  },
  {
    "name": "Portal de Telemetria",
    "description": {
      'en': "The landing page of Hi Tecnologia's telemetry portal",
      'pt': 'Landing page de um portal de telemetria'
    },
    "cover": "/imgs/telemetry-portal-hi-tecnologia.webp",
    "url": "https://telemetria.hitecnologia.com.br/",
    "skills": ["HTML/CSS", "Bulma", "JavaScript"]
  },
  {
    "name": "Rubik's Cube",
    "description": {
      'en': "A pure CSS Rubik's Cube",
      'pt': 'Um cubo de Rubik feito apenas com CSS'
    },
    "cover": "/imgs/rubiks-cube-css-only.webp",
    "url": "https://codepen.io/viniciusx22/full/XWRLWOv",
    "skills": ["HTML/CSS"]
  },
  {
    "name": "Image Generator",
    "description": {
      'en': "An image generator powered by DALL-E",
      'pt': 'Um gerador de imagens utilizando DALL-E'
    },
    "cover": "/imgs/image-generator-with-artificial-inteligence.webp",
    "url": "https://github.com/ViniciusX22/image-generator",
    "skills": ["HTML/CSS", "JavaScript"]
  },
  {
    "name": "Snake",
    "description": {
      'en': "The Snake game made in Python",
      'pt': 'O jogo da cobrinha feito em Python'
    },
    "cover": "/imgs/python-snake-game-screenshot.webp",
    "url": "https://github.com/ViniciusX22/python-snake",
    "skills": ["Python"]
  },
  {
    "name": "Paths",
    "description": {
      'en': "A game made in the Global Game Jam 2019",
      'pt': 'Um jogo feito na Global Game Jam 2019'
    },
    "cover": "/imgs/paths-global-game-jam-project.webp",
    "url": "https://github.com/ViniciusX22/paths",
    "skills": ["Unity", "C#"]
  },
  {
    "name": "Portfolio",
    "description": {
      'en': "This website you're looking at!",
      'pt': 'Esse site que você está vendo!'
    },
    "cover": "/imgs/vinicius-xavier-portfolio-screenshot.webp",
    "url": "https://github.com/ViniciusX22/ViniciusX22",
    "skills": ["HTML/CSS", "TypeScript", "Nuxt.js", "TailwindCSS", "GSAP"]
  },
  {
    "name": "Hellos",
    "description": {
      'en': 'API for getting a "Hello" text in multiple languages',
      'pt': 'API para obter a palavra "Olá" em múltiplos idiomas'
    },
    "cover": "/imgs/text-bubble-hello-multiple-languages.webp",
    "url": "https://github.com/ViniciusX22/hellos",
    "skills": ["Node.js", "TypeScript", "Express.js"]
  },
  {
    "name": "LinkedIn Saved Links Extractor",
    "description": {
      'en': 'Extension to copy saved links from LinkedIn',
      'pt': 'Extensão para copiar links salvos do LinkedIn'
    },
    "cover": "/imgs/linkedin-saved-items-link-extractor.webp",
    "url": "https://github.com/ViniciusX22/linkedin-saved-links-extractor",
    "skills": ["HTML/CSS", "JavaScript"]
  }
]
</script>