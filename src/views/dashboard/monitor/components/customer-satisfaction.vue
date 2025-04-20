<script setup lang="ts">
import type { ECOption } from '~/components/ECharts/config'
import * as echarts from 'echarts'
import ECharts from '~/components/ECharts/index.vue'

const settingStore = useSettingStore()
const { mode } = storeToRefs(settingStore)

const chartRef = ref<InstanceType<typeof ECharts>>()

watch(mode, () => {
  chartRef.value?.draw()
}, { immediate: true })
const option = ref<ECOption>({
  grid: {
    top: 30,
    right: 10,
    bottom: 30,
    left: 10,
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    confine: true,
  },
  legend: {
    data: [
      '上个月',
      '这个月',
    ],
    bottom: 0,
    textStyle: {
      fontSize: 12,
      color: mode.value !== 'dark' ? '#808290' : '#222B45',
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Week 0', 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { show: false }, // 隐藏 x 轴标签
  },
  yAxis: {
    type: 'value',
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { show: false },
    splitLine: {
      show: false, // 将 show 设置为 false 以去除水平线条
    },
  },
  series: [
    {
      name: '上个月',
      type: 'line',
      smooth: true,
      data: [1800, 2800, 1800, 2300, 2600, 2500, 3500],
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(0,157,255,0.33)' },
          { offset: 1, color: 'rgba(255,255,255,0)' },
        ]),
      },
      lineStyle: {
        width: 2,
        color: '#0086E1',
      },
      symbol: 'none',
      itemStyle: {
        color: '#0095FF',
      },
    },
    {
      name: '这个月',
      type: 'line',
      smooth: true,
      data: [4800, 3500, 4300, 3700, 4500, 3500, 5500],
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(7,224,152,0.33)' },
          { offset: 1, color: 'rgba(255,255,255,0)' },
        ]),
      },
      lineStyle: {
        width: 2,
        color: '#04C283',
      },
      symbol: 'none',
      itemStyle: {
        color: '#07E098',
      },
    },
  ],
},
)
</script>

<template>
  <n-card title="客户满意度" class="h-400px">
    <ECharts ref="chartRef" :option="option" />
  </n-card>
</template>
