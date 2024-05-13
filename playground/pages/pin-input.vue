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
</template>
