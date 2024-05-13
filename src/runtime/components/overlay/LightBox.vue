<script setup lang="ts">
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from "radix-vue"

defineProps({
  triggerTitle: {
    type: String,
    default: () => "Show Modal"
  }
})
</script>

<template>
  <DialogRoot>
    <DialogTrigger class="inline-block" :title="triggerTitle">
      <slot name="trigger"></slot>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="bg-neutral-950/75 fixed inset-0 z-30">
        <DialogClose class="absolute top-3 right-3 hover:text-neutral-400" aria-label="Close">
          <LucideX />
        </DialogClose>
      </DialogOverlay>
      <DialogContent
        class="fixed top-[50%] left-[50%] max-h-dvh translate-x-[-50%] translate-y-[-50%] rounded-lg p-12 z-100"
      >
        <slot></slot>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
