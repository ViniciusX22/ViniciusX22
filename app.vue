<template>
  <div>
    <Head>
      <Link
        rel="icon"
        href="/favicon.webp"
        type="image/webp"
      />
    </Head>
    <PageHeader />
    <main
      id="main"
      class="w-full h-auto bg-gray-950 text-slate-100"
    >
      <ClientOnly>
        <AnimatedBackground class="z-0" />
      </ClientOnly>
      <div class="z-10 relative">
        <IntroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Vinícius Xavier",
  description: "Vinícius Xavier is a web developer and a maker of things for the internet.",
});

const i18nHead = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang,
    dir: i18nHead.value.htmlAttrs!.dir,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])]
})
</script>
