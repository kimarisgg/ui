<script lang="ts" setup></script>

<template>
  <div class="flex gap-4 justify-center">
    <UPopover trigger="click" type="button">
      <UButton type="button">Popover Button</UButton>
      <template #popover>
        <UButton type="button">A Button</UButton>
        <UButton type="button">A Button</UButton>
        <UButton type="button">A Button</UButton>
        <UButton type="button">A Button</UButton>
      </template>
    </UPopover>
  </div>
</template>
