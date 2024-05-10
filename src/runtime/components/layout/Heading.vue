<script lang="ts" setup>
import { computed, type PropType } from "vue"

const props = defineProps({
  is: {
    type: String as PropType<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">,
    default: () => "h1"
  }
})

const componentClass = computed(() => {
  switch (props.is) {
    case "h1":
      return "text-4xl"
    case "h2":
      return "text-3xl"
    case "h3":
      return "text-2xl"
    case "h4":
      return "text-xl"
    default:
      return "text-lg"
  }
})
</script>

<template>
  <component :is :class="[componentClass, 'font-semibold'].join(' ')">
    <slot />
  </component>
</template>
