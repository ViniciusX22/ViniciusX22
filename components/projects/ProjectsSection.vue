<template>
  <section
    id="things"
    class="w-full h-auto px-10 md:px-36 sm:px-12 py-32"
  >
    <h1 class="gradient-underline sm:text-5xl text-4xl w-fit inline font-title">
      {{ $t('projects.content') }}
    </h1>
    <ProjectList />
  </section>
</template>
<script lang="ts" setup>
import ProjectList from './ProjectList.vue'
</script>
