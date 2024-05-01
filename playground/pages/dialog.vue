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
        <button title="Some Action">Some Action</button>
      </UDialogAction>
    </template>
  </UDialog>
</template>
