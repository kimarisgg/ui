<script setup lang="ts"></script>

<template>
  <header>
    <UNavMenu>
      <template #menu-items>
        <UNavMenuItem href="/audio-player"> AudioPlayer </UNavMenuItem>
        <UNavMenuItem href="/button"> Button </UNavMenuItem>
        <UNavMenuItem href="/card"> Card </UNavMenuItem>
        <UNavMenuItem href="/chip"> Chip </UNavMenuItem>
        <UNavMenuItem href="/dialog"> Dialog </UNavMenuItem>
        <UNavMenuItem href="/heading"> Heading </UNavMenuItem>
        <UNavMenuItem href="/forms"> Forms </UNavMenuItem>
        <UNavMenuItem href="/lightbox"> Lightbox </UNavMenuItem>
        <UNavMenuItem href="/pin-input"> PinInput </UNavMenuItem>
        <UNavMenuItem href="/popover"> Popover </UNavMenuItem>
        <UNavMenuItem href="/progressbar"> ProgressBar </UNavMenuItem>
        <UNavMenuItem href="/skeleton"> Skeleton </UNavMenuItem>
        <UNavMenuItem href="/switch"> Switch </UNavMenuItem>
        <UNavMenuItem href="/tooltip"> Tooltip </UNavMenuItem>
      </template>
    </UNavMenu>
  </header>
  <UContainer class="max-w-7xl">
    <main class="flex flex-col gap-4 items-center">
      <slot></slot>
    </main>
  </UContainer>
</template>
