<template>
  <select
    class="bg-transparent rounded-md border-none text-slate-100 uppercase cursor-pointer px-1"
    :value="locale"
    :aria-label="$t('languageLabel')"
    @change="handleLocaleChange"
  >
    <option
      v-for="l in locales"
      :key="l.code"
      class="bg-gray-950 text-slate-100 cursor-pointer"
      :value="l.code"
      :selected="l.code === locale"
    >
      {{ l.name }}
    </option>
  </select>
</template>

<script lang="ts" setup>
const { locale, locales, setLocale } = useI18n()

const handleLocaleChange = (e: Event) => {
  const target = e.target as HTMLSelectElement
  const selectedLocale = target.value
  setLocale(selectedLocale)
}
</script>