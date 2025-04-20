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
    top: 20,
    right: 3,
    bottom: 40,
    left: 3,
    containLabel: true,
  },
  legend: {
    data: [
      '线上销售',
      '线下销售',
    ],
    bottom: 0,
    icon: 'circle',
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 15,
    textStyle: {
      fontSize: 12,
      color: mode.value !== 'dark' ? '#808290' : '#222B45',
    },
  },
  xAxis: {
    type: 'category',
    data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: mode.value !== 'dark' ? '#808290' : '#7B91B0',
    },
  },
  yAxis: {
    type: 'value',
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: {
      lineStyle: {
        color: mode.value !== 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#EFF1F3',
        width: 0.8,
      },
    },
    axisLabel: { color: mode.value !== 'dark' ? '#808290' : '#7B91B0' },
  },
  series: [
    {
      name: '线上销售',
      type: 'bar',
      data: [12, 13, 5, 15, 10, 15, 18],
      barWidth: '15',
      itemStyle: {
        color: '#0095FF',
        borderRadius: [4, 4, 4, 4],
      },
    },
    {
      name: '线下销售',
      type: 'bar',
      data: [10, 11, 20, 5, 11, 13, 10],
      barWidth: '15',
      itemStyle: {
        color: '#00E096',
        borderRadius: [4, 4, 4, 4],
      },
    },
  ],
})
</script>

<template>
  <n-card title="收入分析" class="h-400px">
    <ECharts ref="chartRef" :option="option" />
  </n-card>
</template>
