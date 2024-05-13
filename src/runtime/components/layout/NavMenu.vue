<script setup lang="ts">
import { computed, type PropType } from "vue"

const props = defineProps({
  orientation: {
    type: String as PropType<"horizontal" | "vertical">,
    default: "horizontal"
  },
  position: {
    type: String as PropType<"start" | "center" | "end">,
    default: "start"
  }
})

const navClass = computed(() => {
  let classes = "relative z-[1] flex gap-4 w-full p-4"

  if (props.orientation === "vertical") {
    classes += " flex-col"
  }

  switch (props.position) {
    case "center":
      classes += " justify-center"
      break
    case "end":
      classes += " justify-end"
      break
  }

  return classes
})
</script>

<template>
  <nav :class="navClass">
    <slot name="menu-items"></slot>
  </nav>
</template>
