<script lang="ts" setup>
import { PauseIcon, PlayIcon } from "lucide-vue-next"
import { useMediaControls } from "@vueuse/core"
import { computed, ref } from "vue"

const props = defineProps({
  src: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "audio/ogg"
  }
})

const audio = ref<HTMLAudioElement>()
const controls = useMediaControls(audio, {
  src: {
    src: props.src,
    type: props.type
  }
})

const { playing, currentTime, duration } = controls

function formatDuration(seconds: number) {
  return new Date(1000 * seconds).toISOString().slice(14, 19)
}

const progress = computed(() => {
  return (currentTime.value / duration.value) * 100
})
</script>

<template>
  <button
    type="button"
    @click="playing = !playing"
    class="flex flex-col w-full border border-neutral-800 rounded-lg relative overflow-hidden"
  >
    <audio ref="audio" class="hidden"></audio>
    <span class="flex gap-2 w-full items-center p-2">
      <PlayIcon v-if="!playing" class="h-6 w-6" />
      <PauseIcon v-else class="h-6 w-6" />
      <span class="font-mono"> {{ formatDuration(currentTime) }} / {{ formatDuration(duration) }} </span>
    </span>
    <UProgressBar v-model="progress"></UProgressBar>
  </button>
</template>
