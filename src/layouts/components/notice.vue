<script setup lang="ts">
import { ref } from 'vue'

const currentTab = ref(0)
</script>

<template>
  <n-popover placement="bottom" trigger="click" arrow-point-to-center>
    <template #trigger>
      <n-tooltip align="bottom" trigger="hover">
        <template #trigger>
          <IconButton>
            <n-badge dot>
              <div class="i-icon-park-outline-remind" />
            </n-badge>
          </IconButton>
        </template>
        <span>消息通知</span>
      </n-tooltip>
    </template>

    <div class="w-390px">
      <n-tabs v-model:value="currentTab" type="line" animated justify-content="space-evenly">
        <n-tab-pane :name="0">
          <template #tab>
            <n-space class="w-130px" justify="center">
              通知
              <n-badge type="info" :value="2" :max="99" />
            </n-space>
          </template>
          <NoticeItem type="notice" />
        </n-tab-pane>
        <n-tab-pane :name="1">
          <template #tab>
            <n-space class="w-130px" justify="center">
              消息
              <n-badge type="warning" :value="2" :max="99" />
            </n-space>
          </template>
          <NoticeItem type="msg" />
        </n-tab-pane>
        <n-tab-pane :name="2">
          <template #tab>
            <n-space class="w-130px" justify="center">
              代办
              <n-badge type="error" :value="2" :max="99" />
            </n-space>
          </template>
          <NoticeItem type="empty" />
        </n-tab-pane>
      </n-tabs>
    </div>
  </n-popover>
</template>
