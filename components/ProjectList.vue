<template>
  <div class="flex flex-wrap my-10 gap-10 justify-center xl:justify-start">
    <ProjectItem
      v-for="project in projects"
      v-bind="project"
      :key="`${project.name}-${locale}-${isMobile}`"
    />
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const isMobile = useBreakpoints(breakpointsTailwind).smallerOrEqual('md')
const { locale } = useI18n()

const projects = [
  {
    "name": "Nook",
    "description": {
      "en": "An entertainment focused Discord bot",
      "pt": "Um bot de entretenimento para o Discord"
    },
    "cover": "/imgs/nook.webp",
    "url": "http://nookbot.fun"
  },
  {
    "name": "Portal de Telemetria",
    "description": {
      'en': "The landing page of Hi Tecnologia's telemetry portal",
      'pt': 'Landing page de um portal de telemetria'
    },
    "cover": "/imgs/portal.webp",
    "url": "https://telemetria.hitecnologia.com.br/"
  },
  {
    "name": "Rubik's Cube",
    "description": {
      'en': "A pure CSS Rubik's Cube",
      'pt': 'Um cubo de Rubik feito apenas com CSS'
    },
    "cover": "/imgs/cube.webp",
    "url": "https://codepen.io/viniciusx22/full/XWRLWOv"
  },
  {
    "name": "Image Generator",
    "description": {
      'en': "An image generator powered by DALL-E",
      'pt': 'Um gerador de imagens utilizando DALL-E'
    },
    "cover": "/imgs/ai-image.webp",
    "url": "https://github.com/ViniciusX22/image-generator"
  },
  {
    "name": "Snake",
    "description": {
      'en': "The Snake game made in Python",
      'pt': 'O jogo da cobrinha feito em Python'
    },
    "cover": "/imgs/snake.webp",
    "url": "https://github.com/ViniciusX22/python-snake"
  },
  {
    "name": "Paths",
    "description": {
      'en': "A game made in the Global Game Jam 2019",
      'pt': 'Um jogo feito na Global Game Jam 2019'
    },
    "cover": "/imgs/paths.webp",
    "url": "https://github.com/ViniciusX22/paths"
  },
  {
    "name": "Portfolio",
    "description": {
      'en': "This website you're looking at!",
      'pt': 'Esse site que você está vendo!'
    },
    "cover": "/imgs/portfolio.webp",
    "url": "https://github.com/ViniciusX22/ViniciusX22"
  }
]

</script>