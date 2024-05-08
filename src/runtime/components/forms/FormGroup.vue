<script lang="ts" setup>
defineProps({
  id: {
    type: String
  }
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="id">
      <slot></slot>
    </label>
    <slot name="component"></slot>
  </div>
</template>
