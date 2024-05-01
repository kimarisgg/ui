<script lang="ts" setup>
import { Label } from 'radix-vue'

defineProps({
  forId: {
    type: String,
    default: () => ""
  }
})
</script>

<template>
  <Label class="font-semibold" :for="forId">
    <slot></slot>
  </Label>
</template>
