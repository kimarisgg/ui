<script setup lang="ts">
import { computed, defineModel } from "vue"
import FormGroup from "#ui/components/forms/FormGroup.vue"

defineProps({
  id: {
    type: String
  }
})

const model = defineModel({
  default: false,
  required: true,
  type: Boolean
})

const rootClass = computed(() => {
  if (model.value) {
    return "bg-blue-800"
  } else {
    return "bg-neutral-800"
  }
})

const thumbClass = computed(() => {
  if (model.value) {
    return "translate-x-5"
  } else {
    return "translate-none"
  }
})
</script>

<template>
  <FormGroup :id>
    <template #component>
      <button
        :class="
          [
            rootClass,
            'relative inline-block w-10 h-5 transition-colors duration-400 ease-in-out block rounded-full'
          ].join(' ')
        "
        role="switch"
        type="button"
        :aria-checked="model"
        aria-required="false"
        @click="model = !model"
      >
        <input :id class="hidden" type="checkbox" v-model="model" />
        <span
          :class="
            [
              thumbClass,
              'before:content-empty absolute block h-3 w-3 left-1 bottom-1 bg-white transition-transform duration-400 ease-in-out transform rounded-full'
            ].join(' ')
          "
        >
        </span>
      </button>
    </template>
    <slot></slot>
  </FormGroup>
</template>
