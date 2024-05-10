<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    default: () => false
  }
})
</script>

<template>
  <div class="relative">
    <slot />
    <span v-if="show" class="absolute top--1 right--1 rounded-full bg-red-400 p-1"></span>
  </div>
</template>
