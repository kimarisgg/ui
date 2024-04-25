<script setup lang="ts">
import { NavigationMenuItem } from "radix-vue"

defineProps({
  isExternal: {
    type: Boolean,
    default: () => false
  },
  href: {
    type: String,
    default: () => "/"
  }
})
</script>

<template>
  <NavigationMenuItem>
    <NuxtLink class="font-semibold text-lg" :href>
      <slot></slot>
    </NuxtLink>
  </NavigationMenuItem>
</template>
