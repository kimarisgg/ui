<script setup lang="ts">
import { PinInputInput, PinInputRoot } from "radix-vue"

defineProps({
  length: {
    type: Number,
    default: () => 4
  }
})

const emit = defineEmits(["completed"])
const handleComplete = (e: string[]) => {
  emit("completed", e.join(""))
}
</script>

<template>
  <PinInputRoot placeholder="○" class="flex gap-2 items-center mt-1" @complete="handleComplete">
    <PinInputInput
      v-for="(id, index) in length"
      :key="id"
      :index="index"
      class="w-10 h-10 bg-neutral-800 rounded text-center shadow-lg placeholder:text-neutral-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-neutral-700"
    />
  </PinInputRoot>
</template>
