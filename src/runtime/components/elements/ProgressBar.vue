<script lang="ts" setup>
const model = defineModel({
  type: Number,
  get(v) {
    if (v > 100) {
      return 100
    } else {
      return v
    }
  }
})
</script>

<template>
  <div class="relative overflow-hidden rounded-lg w-full h-0.5 bg-neutral-800">
    <span
      class="h-full absolute left-0 top-0 bg-emerald-600 w-full transition duration-300 ease-in-out"
      :style="{ transform: `translateX(${model - 100}%)` }"
    />
  </div>
</template>
