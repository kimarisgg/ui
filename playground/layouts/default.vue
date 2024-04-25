<script setup lang="ts"></script>

<template>
  <UNavMenu>
    <template #menu-items>
      <UNavMenuItem href="/card"> Card </UNavMenuItem>
      <UNavMenuItem href="/heading"> Heading </UNavMenuItem>
      <UNavMenuItem href="/skeleton"> Skeleton </UNavMenuItem>
    </template>
  </UNavMenu>
  <UContainer :constrained="true" class="flex flex-col gap-4">
    <slot></slot>
  </UContainer>
</template>
