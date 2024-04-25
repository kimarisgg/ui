<script lang="ts" setup>
import { computed } from "vue"

const props = defineProps({
  as: {
    type: String,
    default: () => "h1"
  }
})

const componentClass = computed(() => {
  switch (props.as) {
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
  <component :is="as" :class="componentClass">
    <slot />
  </component>
</template>
