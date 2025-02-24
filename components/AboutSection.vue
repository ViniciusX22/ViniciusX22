<!-- eslint-disable vue/no-v-html -->
<template>
  <section
    id="about"
    class="w-full h-auto min-h-screen px-10 md:px-36 sm:px-12 py-32"
  >
    <div class="flex justify-around flex-wrap items-start gap-10">
      <div class="basis-96 flex-1 sm:text-xl text-lg font-mono [&_p:first-of-type]:mt-12 [&_p]:mt-6">
        <h2 class="gradient-underline sm:text-5xl text-4xl w-fit inline font-title">
          {{ $t('hey') }}
        </h2>
        <div v-html="$t('aboutContent')" />
      </div>
      <div class="flex justify-center basis-96">
        <img
          class="aspect-[3/4] md:w-96 w-60 rounded-lg shadow-2xl shadow-gray-600"
          src="/imgs/vinicius-xavier-profile-picture.webp"
          :alt="$t('profileAlt')"
        >
      </div>
    </div>
  </section>
</template>
