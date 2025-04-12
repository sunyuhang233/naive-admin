<script setup lang="ts">
</script>

<template>
  <n-config-provider class="h-full w-full">
    <n-message-provider>
      <n-notification-provider>
        <RouterView />
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>
