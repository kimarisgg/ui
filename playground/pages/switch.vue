<script lang="ts" setup>
const model = ref<boolean>()
</script>

<template>
  <USwitch id="test-switch" v-model="model">Switch me!</USwitch>
</template>
