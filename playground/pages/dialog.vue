<template>
  <UDialog dialog-title="Hello Dialog" dialog-description="Hello Dialog Description">
    <template #trigger>
      Show Modal
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
</template>
