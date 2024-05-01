<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger
} from "radix-vue"

defineProps({
  triggerTitle: {
    type: String,
    default: () => "Show Modal"
  },
  dialogTitle: {
    type: String,
    default: () => "Dialog"
  },
  dialogDescription: {
    type: String,
    default: () => ""
  }
})
</script>

<template>
  <DialogRoot>
    <DialogTrigger class="inline-block" :title="triggerTitle">
      <slot name="trigger"></slot>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="bg-neutral-950/75 fixed inset-0 z-30" />
      <DialogContent
        class="bg-neutral-900 fixed top-[50%] left-[50%] max-h-[85dvh] w-[90dvw] max-w-xl translate-x-[-50%] translate-y-[-50%] rounded-lg p-4 z-100"
      >
        <DialogTitle>
          <UHeading as="h5">{{ dialogTitle }}</UHeading>
        </DialogTitle>
        <DialogDescription v-if="dialogDescription" class="mt-2 mb-5 text-md leading-normal">
          {{ dialogDescription }}
        </DialogDescription>
        <slot></slot>
        <div class="mt-4 flex justify-end">
          <slot name="actions"></slot>
        </div>
        <DialogClose class="absolute top-3 right-3 hover:text-neutral-400" aria-label="Close">
          <LucideX />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
