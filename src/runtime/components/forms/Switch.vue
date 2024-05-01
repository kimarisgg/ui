<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'radix-vue'
import { computed, ref } from "vue"

const switchState = ref(false)
const emit = defineEmits(["updated"])

const update = () => {
  switchState.value = !switchState.value
  emit("updated", switchState.value)
}

const rootClass = computed(() => {
  if (switchState.value) {
    return "bg-blue-800"
  } else {
    return "bg-neutral-800"
  }
})

const thumbClass = computed(() => {
  if (switchState.value) {
    return "translate-x-5"
  } else {
    return "translate-none"
  }
})
</script>

<template>
  <SwitchRoot
    v-model:checked="switchState"
    :class="[rootClass, 'relative inline-block w-10 h-5 transition-colors duration-400 ease-in-out block rounded-full'].join(' ')"
  >
    <SwitchThumb
      :class="[thumbClass, 'before:content-empty absolute block h-3 w-3 left-1 bottom-1 bg-white transition-transform duration-400 ease-in-out transform rounded-full'].join(' ')"
    />
  </SwitchRoot>
</template>
