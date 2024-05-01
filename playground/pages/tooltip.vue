<template>
  <div class="flex flex-col gap-4 items-center justify-center">
    <UTooltip>
      <template #tooltip>Some Tooltip Content</template>
      Hover Me [Top]
    </UTooltip>
    <UTooltip position="right">
      <template #tooltip>Some Tooltip Content</template>
      Hover Me [Right]
    </UTooltip>
    <UTooltip position="left">
      <template #tooltip>Some Tooltip Content</template>
      Hover Me [Left]
    </UTooltip>
    <UTooltip position="bottom">
      <template #tooltip>Some Tooltip Content</template>
      Hover Me [Bottom]
    </UTooltip>
  </div>
</template>
<script setup lang="ts">
</script>
