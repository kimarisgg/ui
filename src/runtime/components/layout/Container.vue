<script lang="ts" setup>
defineProps({
  is: {
    type: String,
    default: () => "div"
  }
})
</script>

<template>
  <component :is class="mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <slot></slot>
  </component>
</template>
