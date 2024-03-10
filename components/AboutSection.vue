<!-- eslint-disable vue/no-v-html -->
<template>
  <section
    id="about"
    class="w-full h-auto min-h-screen px-10 md:px-36 sm:px-12 py-32"
  >
    <div class="flex justify-around flex-wrap gap-10">
      <div class="flex-1 basis-96 sm:text-xl text-lg font-mono [&_p:first-of-type]:mt-12 [&_p]:mt-6">
        <h1 class="gradient-underline sm:text-5xl text-4xl w-fit inline font-title">
          {{ $t('hey') }}
        </h1>
        <div v-html="$t('aboutContent', { years })" />
      </div>
      <div class="flex justify-center flex-1">
        <ClientOnly>
          <img
            class="aspect-[3/4] sm:max-w-96 max-w-60 rounded-lg shadow-2xl shadow-gray-600"
            src="/imgs/profile.webp"
            :alt="$t('profileAlt')"
          >
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const startDate = new Date(2020, 3, 1)
const years = ref('');
const { locale } = useI18n()

const updateYears = () => {
  const now = Date.now()
  years.value = Intl.NumberFormat(locale.value, { maximumFractionDigits: 8, minimumFractionDigits: 8}).format(((now - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365)))
}

watch(locale, () => {
  updateYears()
})

onMounted(() => {
  updateYears()
  setInterval(updateYears, 1000)
})
</script>
