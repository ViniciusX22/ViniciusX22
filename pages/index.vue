<script setup>
definePageMeta({
  title: 'pages.home'
})
</script>

<template>
  <div>
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
