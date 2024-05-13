import { useState } from "#app"
import { watch } from "@vue/runtime-core"

export const isModalOpen = () => {
  return useState("is-modal-open", () => false)
}

export const isScrollable = () => {
  const popUpOpen = isModalOpen()

  const scrollable = useState("is-scrollable", () => true)

  watch([popUpOpen], ([newA]) => {
    scrollable.value = !newA
  })

  return scrollable
}
