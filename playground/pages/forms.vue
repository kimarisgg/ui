<script lang="ts" setup>
const userRef = ref()
const passwordRef = ref()
const numberRef = ref()
const checkRef = ref()
</script>

<template>
  <UHeading as="h1">Basic Form:</UHeading>
  <UCard is="form">
    <div class="flex flex-col gap-2">
      <UFormInput id="username" type="text" v-model="userRef">Username</UFormInput>
      {{ userRef }}
      <UFormInput id="password" type="password" v-model="passwordRef">Password</UFormInput>
      {{ passwordRef }}
      <UFormInput id="number" type="number" v-model="numberRef">A number</UFormInput>
      {{ numberRef }}
      <UFormInput id="check" type="checkbox" v-model="checkRef">A check</UFormInput>
      {{ checkRef }}
      <UButton type="submit" color="primary">Submit</UButton>
    </div>
  </UCard>
</template>
