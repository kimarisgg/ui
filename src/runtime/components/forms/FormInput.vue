<script lang="ts" setup>
import FormGroup from "#ui/components/forms/FormGroup.vue"
import { type InputHTMLAttributes, useAttrs } from "@vue/runtime-dom"
import { defineModel } from "vue"

interface Props extends /* @vue-ignore */ InputHTMLAttributes {}

const props = withDefaults(defineProps<Props>(), {})
const attrs = useAttrs()

const model = defineModel()
</script>

<template>
  <FormGroup :id="props.id">
    <template #component>
      <input
        v-bind="attrs"
        v-model="model"
        class="w-full px-2 py-1 rounded-lg bg-neutral-700 border border-neutral-600"
      />
    </template>
    <slot></slot>
  </FormGroup>
</template>
