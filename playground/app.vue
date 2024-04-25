<script lang="ts" setup>
useHead({
  title: "Kimaris UI Playground",
  htmlAttrs: {
    lang: "en"
  },
  bodyAttrs: {
    class: "antialiased font-sans text-neutral-200 bg-neutral-950"
  }
})
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
