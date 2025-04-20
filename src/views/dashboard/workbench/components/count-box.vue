<script setup lang="ts">
import Icon from '~/components/icon.vue'
</script>

<template>
  <div class="flex gap-3 items-center">
    <n-card>
      <div class="flex flex-col gap-2 items-center">
        <span>
          订单数
        </span>
        <n-icon-wrapper :size="46" :border-radius="999">
          <Icon :size="26" icon="icon-park-outline:all-application" />
        </n-icon-wrapper>
        <span strong class="text-2xl">
          1,234,123
        </span>
      </div>
    </n-card>

    <n-card>
      <div class="flex flex-col gap-2 items-center">
        <span>
          待办
        </span>
        <n-el>
          <n-icon-wrapper :size="46" color="var(--warning-color)" :border-radius="999">
            <Icon :size="26" icon="icon-park-outline:list-bottom" />
          </n-icon-wrapper>
        </n-el>
        <span strong class="text-2xl">
          78
        </span>
      </div>
    </n-card>
  </div>
</template>
