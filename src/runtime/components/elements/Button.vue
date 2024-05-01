<script lang="ts" setup>
import type { PropType } from "vue"
import { computed } from "vue"

type ButtonType = "button" | "submit" | "reset"

const props = defineProps({
  type: {
    type: Object as PropType<ButtonType>,
    default: "button"
  },
  color: {
    type: String,
    default: () => "default"
  },
  disabled: {
    type: Boolean,
    default: () => false
  }
})

const classButton = computed(() => {
  switch (props.color) {
    case "primary":
      return "bg-blue-700 hover:bg-blue-800"
    case "warning":
      return "bg-orange-700 hover:bg-orange-800"
    case "danger":
      return "bg-red-700 hover:bg-red-800"
    case "success":
      return "bg-green-700 hover:bg-green-800"
    default:
      return "bg-neutral-700 hover:bg-neutral-800"
    }
})
</script>

<template>
  <button :type :class="[classButton, 'text-sm rounded-lg px-3 py-1.5 text-center text-white flex gap-2'].join(' ')" :disabled>
    <slot></slot>
  </button>
</template>
