<script setup lang="ts">
import type { PropType } from "vue"
import type { Placement } from "@floating-ui/vue"

defineProps({
  position: {
    type: String as PropType<Placement>
  },
  trigger: {
    type: String as PropType<"hover" | "click">
  }
})
</script>

<template>
  <UFloat :position :trigger>
    <slot></slot>
    <template #content>
      <div class="flex flex-col gap-2">
        <slot name="popover"></slot>
      </div>
    </template>
  </UFloat>
</template>
