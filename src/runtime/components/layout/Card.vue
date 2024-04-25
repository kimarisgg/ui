<script lang="ts" setup></script>

<template>
  <component is="div" class="bg-neutral-900 divide-y divide-neutral-800 ring-1 ring-neutral-800 rounded-lg shadow">
    <div v-if="$slots.header" class="px-4 py-5 sm:p-6">
      <slot name="header" />
    </div>
    <div v-if="$slots.default" class="px-4 py-5 sm:p-6">
      <slot />
    </div>
    <div v-if="$slots.footer" class="px-4 py-5 sm:p-6">
      <slot name="footer" />
    </div>
  </component>
</template>
