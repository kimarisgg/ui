<script setup lang="ts">
import { ref } from "vue"
import { NavigationMenuList, NavigationMenuRoot } from "radix-vue"

const currentTrigger = ref("")
</script>

<template>
  <NavigationMenuRoot v-model="currentTrigger" class="relative z-[1] flex w-full justify-center p-4">
    <NavigationMenuList class="flex gap-4">
      <slot name="menu-items"></slot>
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>
