<script lang="ts" setup>
defineProps({
  extraClass: {
    type: String,
    default: () => ""
  }
})
</script>

<template>
  <div :class="['animate-pulse bg-neutral-800', extraClass].join(' ')" />
</template>
