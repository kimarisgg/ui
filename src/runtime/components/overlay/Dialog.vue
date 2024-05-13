<script lang="ts" setup>
import { ref } from "vue"
import { onClickOutside, onKeyUp } from "@vueuse/core"
import { isModalOpen } from "#ui/composables/utils"
import { watch } from "@vue/runtime-core"

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

const open = isModalOpen()

const isOpen = ref<boolean>(false)
const popupRef = ref()

onClickOutside(popupRef, () => {
  isOpen.value = false
})

onKeyUp("Escape", () => {
  isOpen.value = false
})

watch(isOpen, (newValue) => {
  open.value = newValue
})
</script>

<template>
  <div class="inline-block" @click="isOpen = !isOpen">
    <slot name="trigger"></slot>
  </div>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300 ease-in-out"
      leave-active-class="transition-all duration-300 ease-in-out"
      enter-from-class="opacity-0 scale-90"
      leave-to-class="opacity-0 scale-90"
    >
      <div class="bg-neutral-950/75 fixed inset-0 z-30" v-if="isOpen">
        <div
          class="bg-neutral-900 fixed top-[50%] left-[50%] max-h-[85dvh] w-[90dvw] max-w-xl translate-x-[-50%] translate-y-[-50%] rounded-lg p-4 z-100"
          ref="popupRef"
        >
          <div>
            <UHeading as="h5">{{ dialogTitle }}</UHeading>
          </div>
          <div v-if="dialogDescription" class="mt-2 mb-5 text-md leading-normal">
            {{ dialogDescription }}
          </div>
          <slot></slot>
          <div class="mt-4 flex justify-end">
            <slot name="actions"></slot>
          </div>
          <button
            type="button"
            class="absolute top-3 right-3 hover:text-neutral-400"
            aria-label="Close"
            @click="isOpen = false"
          >
            <LucideX />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
