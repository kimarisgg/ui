<script setup lang="ts"></script>

<template>
  <header>
    <UNavMenu>
      <template #menu-items>
        <UNavMenuItem href="/button"> Button </UNavMenuItem>
        <UNavMenuItem href="/card"> Card </UNavMenuItem>
        <UNavMenuItem href="/dialog"> Dialog </UNavMenuItem>
        <UNavMenuItem href="/heading"> Heading </UNavMenuItem>
        <UNavMenuItem href="/skeleton"> Skeleton </UNavMenuItem>
        <UNavMenuItem href="/switch"> Switch </UNavMenuItem>
        <UNavMenuItem href="/tooltip"> Tooltip </UNavMenuItem>
      </template>
    </UNavMenu>
  </header>
  <UContainer :constrained="true">
    <main class="flex flex-col gap-4">
      <slot></slot>
    </main>
  </UContainer>
</template>
