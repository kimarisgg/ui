<script lang="ts" setup>
import type { PropType } from "vue"

defineProps({
  is: {
    type: String as PropType<"div" | "form" | "main">,
    default: () => "div"
  }
})
</script>

<template>
  <component :is class="mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <slot></slot>
  </component>
</template>
