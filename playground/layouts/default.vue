<script setup lang="ts"></script>

<template>
  <UNavMenu>
    <template #menu-items>
      <UNavMenuItem href="/button"> Button </UNavMenuItem>
      <UNavMenuItem href="/card"> Card </UNavMenuItem>
      <UNavMenuItem href="/dialog"> Dialog </UNavMenuItem>
      <UNavMenuItem href="/heading"> Heading </UNavMenuItem>
      <UNavMenuItem href="/skeleton"> Skeleton </UNavMenuItem>
      <UNavMenuItem href="/switch"> Switch </UNavMenuItem>
    </template>
  </UNavMenu>
  <UContainer :constrained="true" class="flex flex-col gap-4">
    <slot></slot>
  </UContainer>
</template>
