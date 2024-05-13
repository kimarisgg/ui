<script setup lang="ts">
defineProps({
  isExternal: {
    type: Boolean,
    default: () => false
  },
  to: {
    type: String,
    default: () => "/"
  }
})
</script>

<template>
  <NuxtLink class="hover:text-neutral-400" active-class="font-semibold" :to>
    <slot></slot>
  </NuxtLink>
</template>
