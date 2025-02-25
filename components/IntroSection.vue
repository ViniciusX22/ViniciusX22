<!-- eslint-disable vue/no-v-html -->
<template>
  <section
    class="flex justify-center sm:justify-start items-center sm:text-5xl text-4xl sm:leading-tight leading-tight h-screen w-full">
    <h1 class="-mt-40 mx-10 md:mx-36 sm:mx-12 font-title">
      <p>{{ $t('hi') }}</p>
      <p>
        {{ $t('greetings') }} <a class="link" href="#about">{{ $t('name') }}</a>
      </p>
      <p>
        {{ $t('doerOf') }}
        <a class="link" href="#things">{{ $t('things') }}</a>
        <span v-html="$t('forinternet', { years })" />
      </p>
    </h1>
  </section>
</template>ts
<script lang="ts" setup>
const { years } = useYearsOfExperience()
</script>
