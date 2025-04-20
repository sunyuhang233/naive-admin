<script setup lang="ts">
</script>

<template>
  <n-card class="h-260px" title="今日销售">
    <template #header-extra>
      <n-button quaternary type="primary">
        <template #icon>
          <Icon icon="ri:download-2-fill" :size="20" />
        </template>
        下载
      </n-button>
    </template>
    <div class="flex gap-4 items-center justify-between">
      <n-card>
        <n-thing>
          <n-el class="flex flex-col gap-1">
            <n-icon-wrapper :size="42" color="var(--success-color)" :border-radius="999">
              <Icon :size="24" icon="icon-park-outline:chart-line" />
            </n-icon-wrapper>
            <n-statistic label="总销售额">
              <n-number-animation show-separator :from="0" :to="12039" />
            </n-statistic>
            <p class="text-gray-500">
              24.5% 较上月
            </p>
          </n-el>
        </n-thing>
      </n-card>
      <n-card>
        <n-thing>
          <n-el class="flex flex-col gap-1">
            <n-icon-wrapper :size="42" color="var(--info-color)" :border-radius="999">
              <Icon :size="24" icon="icon-park-outline:order" />
            </n-icon-wrapper>
            <n-statistic label="总订单数">
              <n-number-animation show-separator :from="0" :to="12039" />
            </n-statistic>
            <p class="text-gray-500">
              24.5% 较上月
            </p>
          </n-el>
        </n-thing>
      </n-card><n-card>
        <n-thing>
          <n-el class="flex flex-col gap-1">
            <n-icon-wrapper :size="42" color="var(--error-color)" :border-radius="999">
              <Icon :size="24" icon="icon-park-outline:shopping-bag" />
            </n-icon-wrapper>
            <n-statistic label="已售产品">
              <n-number-animation show-separator :from="0" :to="12039" />
            </n-statistic>
            <p class="text-gray-500">
              24.5% 较上月
            </p>
          </n-el>
        </n-thing>
      </n-card><n-card>
        <n-thing>
          <n-el class="flex flex-col gap-1">
            <n-icon-wrapper :size="42" color="var(--warning-color)" :border-radius="999">
              <Icon :size="24" icon="icon-park-outline:people" />
            </n-icon-wrapper>
            <n-statistic label="新客户">
              <n-number-animation show-separator :from="0" :to="12039" />
            </n-statistic>
            <p class="text-gray-500">
              24.5% 较上月
            </p>
          </n-el>
        </n-thing>
      </n-card>
    </div>
  </n-card>
</template>
