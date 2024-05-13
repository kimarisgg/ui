<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-4 items-center justify-center">
    <UTooltip tooltip="Some Tooltip Content"> Hover Me [Bottom (Default)] </UTooltip>
    <UTooltip position="right" tooltip="Some Tooltip Content"> Hover Me [Right] </UTooltip>
    <UTooltip position="left" tooltip="Some Tooltip Content"> Hover Me [Left] </UTooltip>
    <UTooltip position="bottom" tooltip="Some Tooltip Content" trigger="click"> Click Me [Bottom] </UTooltip>
    <UTooltip position="bottom" tooltip="Some Tooltip Content"> Hover Me [Bottom] </UTooltip>
  </div>
</template>
