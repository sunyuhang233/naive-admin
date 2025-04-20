<template>
  <n-el tag="div" class="el p-3 rounded cursor-pointer">
    <n-flex align="center" :wrap="false" class="h-full">
      <slot />
    </n-flex>
  </n-el>
</template>

<style scoped>
.el {
  color: var(--n-text-color);
  transition: 0.3s var(--cubic-bezier-ease-in-out);
  background-color: transparent;
}

.el:hover {
  background-color: var(--button-color-2-hover);
  color: var(--n-text-color-hover);
}
</style>
