<script setup lang="ts">
import type { ECOption } from '~/components/ECharts/config'
import ECharts from '~/components/ECharts/index.vue'

const settingStore = useSettingStore()
const { mode } = storeToRefs(settingStore)

const chartRef = ref<InstanceType<typeof ECharts>>()


const chartData = [
  { volume: 800, services: 400 },
  { volume: 1000, services: 600 },
  { volume: 750, services: 300 },
  { volume: 600, services: 250 },
  { volume: 450, services: 200 },
  { volume: 500, services: 300 },
]

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
  legend: {
    data: [
      '业务量',
      '服务水平',
    ],
    bottom: 20,
    itemWidth: 10,
    itemHeight: 10,
    icon: 'circle',
    textStyle: {
      fontSize: 12,
      color: mode.value !== 'dark' ? '#808290' : '#222B45',
    },
  },
  grid: {
    left: '20',
    right: '20',
    bottom: '60',
    top: '30',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: chartData.map((_, index) => `${index + 1}`),
    axisLine: {
      show: true,
      lineStyle: {
        color: mode.value !== 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#EFF1F3',
        width: 0.8,
      },
    },
    axisTick: { show: false },
    axisLabel: { show: false },
  },
  yAxis: {
    type: 'value',
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    axisLabel: { show: false },
  },
  series: [
    {
      name: '业务量',
      type: 'bar',
      stack: 'total',
      data: chartData.map(item => item.volume),
      itemStyle: {
        color: '#0095FF',
        borderRadius: [0, 0, 4, 4],
      },
      barWidth: '15',
    },
    {
      name: '服务水平',
      type: 'bar',
      stack: 'total',
      data: chartData.map(item => item.services),
      itemStyle: {
        color: '#00E096',
        borderRadius: [4, 4, 0, 0],
      },
      barWidth: '50%',
    },
  ],
})
</script>

<template>
  <n-card title="业务能力和服务水平" class="h-400px">
    <ECharts ref="chartRef" :option="option" />
  </n-card>
</template>
