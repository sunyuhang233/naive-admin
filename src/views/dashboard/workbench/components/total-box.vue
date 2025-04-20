<script setup lang="ts">
import Icon from '~/components/icon.vue'
</script>


<template>
  <n-card>
    <div class="flex gap-3 items-center justify-center">
      <n-card>
        <n-thing>
          <template #avatar>
            <n-el>
              <n-icon-wrapper :size="46" color="var(--success-color)" :border-radius="999">
                <Icon :size="26" icon="icon-park-outline:user" />
              </n-icon-wrapper>
            </n-el>
          </template>
          <template #header>
            <n-statistic label="活跃用户">
              <n-number-animation show-separator :from="0" :to="12039" />
            </n-statistic>
          </template>
        </n-thing>
      </n-card>


      <n-card>
        <n-thing>
          <template #avatar>
            <n-el>
              <n-icon-wrapper :size="46" color="var(--success-color)" :border-radius="999">
                <Icon :size="26" icon="icon-park-outline:every-user" />
              </n-icon-wrapper>
            </n-el>
          </template>
          <template #header>
            <n-statistic label="用户">
              <n-number-animation show-separator :from="0" :to="44039" />
            </n-statistic>
          </template>
        </n-thing>
      </n-card>


      <n-card>
        <n-thing>
          <template #avatar>
            <n-el>
              <n-icon-wrapper :size="46" color="var(--success-color)" :border-radius="999">
                <Icon :size="26" icon="icon-park-outline:preview-open" />
              </n-icon-wrapper>
            </n-el>
          </template>
          <template #header>
            <n-statistic label="浏览量">
              <n-number-animation show-separator :from="0" :to="5412" />
            </n-statistic>
          </template>
        </n-thing>
      </n-card>


      <n-card>
        <n-thing>
          <template #avatar>
            <n-el>
              <n-icon-wrapper :size="46" color="var(--success-color)" :border-radius="999">
                <Icon :size="26" icon="icon-park-outline:star" />
              </n-icon-wrapper>
            </n-el>
          </template>
          <template #header>
            <n-statistic label="收藏数">
              <n-number-animation show-separator :from="0" :to="7739" />
            </n-statistic>
          </template>
        </n-thing>
      </n-card>
    </div>
  </n-card>
</template>
