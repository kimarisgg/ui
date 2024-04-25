<script lang="ts" setup>
defineProps({
  height: {
    type: String,
    default: () => "h-4"
  },
  rounded: {
    type: String,
    default: () => "rounded-md"
  }
})
</script>

<template>
  <div class="animate-pulse bg-neutral-800" :class="[height, rounded].join(' ')" />
</template>
