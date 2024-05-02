<script lang="ts" setup>
const isCompleted = ref<boolean>(false)
const value = ref<string[]>([])
</script>

<template>
  <div class="flex flex-col gap-2">
    <span>Is completed? {{ isCompleted }}</span>
    <span>Value: {{ value.join("") }}</span>
    <UPinInput v-model="value" :length="6" @completed="isCompleted = true"></UPinInput>
  </div>
  <input
    type="text"
    tabindex="-1"
    aria-hidden="true"
    value=""
    style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0"
  />
</template>
