<script lang="ts" setup>
const value = defineModel<LayoutType>('value', {
  required: true,
})
</script>

<template>
  <div class="flex gap-4 items-center justify-center">
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-el
          :class="{
            'outline-2 outline-solid': value === 'left',
          }"
          class="outline-[var(--primary-color)] grid grid-cols-[20%_1fr] cursor-pointer"
          @click="value = 'left'"
        >
          <div class="bg-[var(--primary-color)]" />
          <div class="bg-[var(--divider-color)]" />
        </n-el>
      </template>
      <span>左侧布局</span>
    </n-tooltip>
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-el
          :class="{
            'outline-2 outline-solid': value === 'top',
          }"
          class="outline-[var(--primary-color)] grid grid-rows-[20%_1fr] cursor-pointer"
          @click="value = 'top'"
        >
          <div class="bg-[var(--primary-color)]" />
          <div class="bg-[var(--divider-color)]" />
        </n-el>
      </template>
      <span>上下布局</span>
    </n-tooltip>
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-el
          :class="{
            'outline-2 outline-solid': value === 'mix',
          }"
          class="outline-[var(--primary-color)] grid grid-cols-[20%_1fr] grid-rows-[20%_1fr] cursor-pointer"
          @click="value = 'mix'"
        >
          <div class="bg-[var(--primary-color)] row-span-2" />
          <div class="bg-[var(--divider-color)]" />
          <div class="bg-[var(--divider-color)]" />
        </n-el>
      </template>
      <span>混合布局</span>
    </n-tooltip>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  height: 60px;
  width: 86px;
  gap: 0.4em;
  padding: 0.4em;
  box-shadow: var(--box-shadow-1);
  border-radius: var(--border-radius);
}
.grid > div {
  border-radius: var(--border-radius);
}
</style>
