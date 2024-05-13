<script lang="ts" setup>
const progress = ref<number>(0)
</script>

<template>
  <div class="flex gap-4 justify-center">
    <UButton type="button" @click="progress = 0">0</UButton>
    <UButton type="button" @click="progress = 25">25</UButton>
    <UButton type="button" @click="progress = 50">50</UButton>
    <UButton type="button" @click="progress = 75">75</UButton>
    <UButton type="button" @click="progress = 100">100</UButton>
  </div>
  <div class="flex gap-4 justify-center">
    <UButton type="button" @click="progress += 1">+1</UButton>
    <UButton type="button" @click="progress += 10">+10</UButton>
    <UButton type="button" @click="progress += 100">+100</UButton>
  </div>
  <UProgressBar v-model="progress"></UProgressBar>
</template>
