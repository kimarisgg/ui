<script setup lang="ts">
import type { PropType } from "vue"
import type { Placement } from "@floating-ui/vue"

defineProps({
  position: {
    type: String as PropType<Placement>
  },
  trigger: {
    type: String as PropType<"hover" | "click">
  },
  tooltip: {
    type: String
  }
})
</script>

<template>
  <UFloat :position :trigger>
    <slot></slot>
    <template #content>
      {{ tooltip }}
    </template>
  </UFloat>
</template>
