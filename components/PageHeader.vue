<template>
  <nav
    class="h-12 z-20 md:px-36 px-6 fixed w-full flex gap-4 justify-between items-center border-b-2 bg-gray-950 text-slate-100 border-gray-900"
  >
    <div>
      <a
        href="#main"
        class="text-3xl font-title"
        :aria-label="$t('home.label')"
      >
        V<span class="brand-gradient font-bold bg-clip-text [-webkit-text-fill-color:transparent] ">X</span>
      </a>
    </div>
    <div class="hidden sm:flex gap-6 text-2xl font-title [--tw-underline-height:2px]">
      <a
        class="link"
        href="#about"
        :aria-label="$t('about.label')"
      >
        {{ $t('about.content') }}
      </a>
      <a
        class="link"
        href="#things"
        :aria-label="$t('projects.label')"
      >
        {{ $t('projects.content') }}
      </a>
    </div>
    <div class="flex gap-3">
      <a
        href="https://github.com/ViniciusX22"
        :aria-label="$t('github.label')"
        target="_blank"
      >
        <Icon
          name="uil:github"
          size="24"
          color="white"
        />
      </a>
      <a
        :href="`https://www.linkedin.com/in/vinicius-xavier-s/${locale == 'pt' ? '?locale=pt_BR' : ''}`"
        :aria-label="$t('linkedin.label')"
        target="_blank"
      >
        <Icon
          name="uil:linkedin"
          size="24"
          color="white"
        />
      </a>
      <LocaleSelector class="sm:ml-10" />
    </div>
  </nav>
</template>
<script lang="ts" setup>
const { locale } = useI18n()
</script>
