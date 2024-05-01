<script setup lang="ts">
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'radix-vue'
import type { PropType } from "vue"

type PositionType = "right" | "left" | "top" | "bottom"

defineProps({
  position: {
    type: String as PropType<PositionType>,
    default: () => 'top'
  }
})
</script>

<template>
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger>
        <slot></slot>
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          class="rounded-lg bg-neutral-800 px-2 py-1"
          :side-offset="5"
          :side="position"
        >
          <slot name="tooltip"></slot>
          <TooltipArrow class="fill-neutral-800" :width="8" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
