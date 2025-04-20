<script setup lang="ts">
import Chat from './components/chat.vue'
import CountBox from './components/count-box.vue'
import Dynamic from './components/dynamic.vue'
import Notice from './components/notice.vue'
import TimeLine from './components/time-line.vue'
import TotalBox from './components/total-box.vue'
</script>

<template>
  <div class="flex gap-3">
    <div class="flex flex-1 flex-col gap-3">
      <div class="h-400px">
        <Chat />
      </div>
      <TotalBox />
      <Dynamic />
    </div>
    <div class="flex flex-col gap-3 w-400px">
      <Notice />
      <CountBox />
      <TimeLine />
    </div>
  </div>
</template>
