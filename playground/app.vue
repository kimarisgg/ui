<script lang="ts" setup>
const scrollable = isScrollable()

useHead({
  title: "Kimaris UI Playground",
  htmlAttrs: {
    lang: "en"
  }
})
</script>

<template>
  <Body class="antialiased font-sans text-neutral-200 bg-neutral-950" :class="{ 'overflow-hidden': !scrollable }">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </Body>
</template>
