<script lang="ts" setup>
import { computed, type PropType, ref } from "vue"
import type { Placement } from "@floating-ui/vue"
import { useFloating, offset, flip, shift, autoUpdate } from "@floating-ui/vue"

type TriggerType = "hover" | "click"
type HoverTriggerType = "enter" | "leave"

const base = ref()
const floating = ref()

const show = ref<boolean>(false)
const isHover = ref<boolean>(false)

const props = defineProps({
  position: {
    type: String as PropType<Placement>,
    default: "bottom"
  },
  trigger: {
    type: String as PropType<TriggerType>,
    default: "hover"
  }
})

const { floatingStyles } = useFloating(base, floating, {
  placement: props.position,
  whileElementsMounted: autoUpdate,
  middleware: [offset(10), flip(), shift()]
})

const handleTrigger = (type: TriggerType, hoverTrigger: HoverTriggerType = null) => {
  if (props.trigger === "click" && type === props.trigger) {
    show.value = !show.value
  } else if (type === props.trigger) {
    isHover.value = hoverTrigger === "enter"
    setTimeout(() => {
      show.value = isHover.value
    }, 500)
  }
}

const visibility = computed(() => {
  if (show.value) {
    return "visible opacity-100"
  } else {
    return "invisible opacity-0"
  }
})
</script>

<template>
  <div
    class="inline-block"
    @mouseover="handleTrigger('hover', 'enter')"
    @mouseleave="handleTrigger('hover', 'leave')"
    @click="handleTrigger('click')"
  >
    <div class="inline-block" ref="base">
      <slot></slot>
    </div>
    <div
      ref="floating"
      class="bg-neutral-800 rounded-lg text-sm p-2 transition-all-500 delay-150 z-100"
      :class="visibility"
      :style="floatingStyles"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>
