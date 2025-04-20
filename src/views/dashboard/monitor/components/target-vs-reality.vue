<script setup lang="ts">
import type { ECOption } from '~/components/ECharts/config'
import ECharts from '~/components/ECharts/index.vue'

const settingStore = useSettingStore()
const { mode } = storeToRefs(settingStore)

const chartRef = ref<InstanceType<typeof ECharts>>()

watch(mode, () => {
  chartRef.value?.draw()
}, { immediate: true })
const option = ref<ECOption>({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    top: 10,
    right: 0,
    bottom: 0,
    left: 0,
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
    axisLabel: {
      color: mode.value !== 'dark' ? '#808290' : '#222B45',
    },
    axisLine: {
      show: false, // 隐藏 x 轴线
    },
    axisTick: {
      show: false, // 隐藏刻度线
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      show: false, // 隐藏 y 轴文字
    },
    splitLine: {
      show: false, // 隐藏 y 轴分割线
    },
    axisLine: {
      show: false, // 隐藏 y 轴线
    },
  },
  series: [
    {
      name: 'Reality Sales',
      type: 'bar',
      data: [8000, 7000, 6000, 8500, 9000, 10000, 9500],
      barWidth: '15',
      itemStyle: {
        borderRadius: [4, 4, 0, 0],
        color: '#2B8DFA',
      },
    },
    {
      name: 'Target Sales',
      type: 'bar',
      data: [10000, 9000, 11000, 10000, 12000, 12500, 11500],
      barWidth: '15',
      itemStyle: {
        borderRadius: [4, 4, 4, 4],
        color: '#95E0FB',
      },
    },
  ],

})
</script>

<template>
  <n-card title="目标与实际" class="h-400px">
    <ECharts ref="chartRef" :option="option" :height="200" />
    <div class="mt-3 space-y-3">
      <div class="flex">
        <div class="flex gap-2 w-60% items-center">
          <div class="rounded-sm bg-[#e6f7ff] flex size-40px items-center justify-center">
            <span class="i-ep:data-line text-2xl text-[#1cb8fc]" />
          </div>
          <div class="flex flex-col gap-1">
            <span>实际销售</span>
            <span class="text-xs text-gray-500">全球</span>
          </div>
        </div>
        <div class="text-2xl text-[#1cb8fc]">
          88223
        </div>
      </div>
      <div class="flex">
        <div class="flex gap-2 w-60% items-center">
          <div class="rounded-sm bg-[#e6f7ff] flex size-40px items-center justify-center">
            <span class="i-ep:histogram text-2xl text-[#1cb8fc]" />
          </div>
          <div class="flex flex-col gap-1">
            <span>目标销售</span>
            <span class="text-xs text-gray-500">全球</span>
          </div>
        </div>
        <div class="text-2xl text-[#1cb8fc]">
          103589
        </div>
      </div>
    </div>
  </n-card>
</template>
