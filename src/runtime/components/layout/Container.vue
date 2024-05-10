<script lang="ts" setup>
import { computed, type PropType } from "vue"

const props = defineProps({
  is: {
    type: String as PropType<"div" | "form" | "main" | "article">,
    default: () => "div"
  },
  layout: {
    type: String as PropType<"vertical" | "horizontal">,
    default: () => "vertical"
  }
})

const containerClass = computed(() => {
  const baseClass = "flex gap-4 mx-auto px-4 sm:px-6 lg:px-8 w-full"
  switch (props.layout) {
    case "horizontal":
      return baseClass
    case "vertical":
      return ["flex-col", baseClass].join(" ")
  }
})
</script>

<template>
  <component :is :class="containerClass">
    <slot></slot>
  </component>
</template>
