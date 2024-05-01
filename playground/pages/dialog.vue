<template>
  <div class="flex gap-4 justify-center">
    <UDialog dialog-title="Hello Dialog" dialog-description="Hello Dialog Description">
      <template #trigger>
        <UButton>Show Modal</UButton>
      </template>
      <div>
        Hello body
      </div>
      <template #actions>
        <UDialogAction>
          <UButton>Some Action</UButton>
        </UDialogAction>
      </template>
    </UDialog>
  </div>
</template>
