<script lang="ts" setup>
defineProps({
  constrained: Boolean,
  default: () => false
})
</script>

<template>
  <component is="div" class="mx-auto px-4 sm:px-6 lg:px-8" :class="[constrained ? 'max-w-7xl' : '']">
    <slot></slot>
  </component>
</template>
