<script setup lang="ts"></script>

<template>
  <header>
    <UNavMenu position="center">
      <template #menu-items>
        <UNavMenuItem to="/audio-player"> AudioPlayer </UNavMenuItem>
        <UNavMenuItem to="/button"> Button </UNavMenuItem>
        <UNavMenuItem to="/card"> Card </UNavMenuItem>
        <UNavMenuItem to="/chip"> Chip </UNavMenuItem>
        <UNavMenuItem to="/dialog"> Dialog </UNavMenuItem>
        <UNavMenuItem to="/heading"> Heading </UNavMenuItem>
        <UNavMenuItem to="/forms"> Forms </UNavMenuItem>
        <UNavMenuItem to="/lightbox"> Lightbox </UNavMenuItem>
        <UNavMenuItem to="/popover"> Popover </UNavMenuItem>
        <UNavMenuItem to="/progressbar"> ProgressBar </UNavMenuItem>
        <UNavMenuItem to="/skeleton"> Skeleton </UNavMenuItem>
        <UNavMenuItem to="/switch"> Switch </UNavMenuItem>
        <UNavMenuItem to="/tooltip"> Tooltip </UNavMenuItem>
      </template>
    </UNavMenu>
  </header>
  <UContainer class="max-w-7xl">
    <main class="flex flex-col gap-4 items-center">
      <slot></slot>
    </main>
  </UContainer>
</template>
