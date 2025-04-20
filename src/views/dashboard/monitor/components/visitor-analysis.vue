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
  },
  grid: {
    top: 10,
    right: 0,
    bottom: 40,
    left: 0,
    containLabel: true,
  },
  legend: {
    data: [
      '老客户',
      '新客户',
    ],
    bottom: 0,
    left: 'center',
    itemWidth: 14,
    itemHeight: 14,
    textStyle: {
      fontSize: 12,
      color: mode.value !== 'dark' ? '#808290' : '#222B45',
    },
    icon: 'roundRect',
    itemStyle: {
      borderRadius: 4,
    },
  },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: mode.value !== 'dark' ? '#808290' : '#7B91B0',
    },
  },
  yAxis: {
    type: 'value',
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#EFF1F3',
        width: 0.8,
      },
    },
    axisLabel: {
      color: mode.value !== 'dark' ? '#808290' : '#7B91B0',
    },
  },
  series: [
    {
      name: '老客户',
      type: 'line',
      smooth: true,
      symbol: 'none',
      data: [260, 200, 150, 130, 180, 270, 340, 380, 300, 220, 170, 130],
      lineStyle: {
        color: '#2B8DFA',
        width: 3,
      },
      itemStyle: {
        color: '#2B8DFA',
      },
    },
    {
      name: '新客户',
      type: 'line',
      smooth: true,
      symbol: 'none',
      data: [280, 350, 300, 250, 230, 210, 240, 280, 320, 350, 300, 200],
      lineStyle: {
        color: '#18C653',
        width: 3,
      },
      itemStyle: {
        color: '#18C653',
      },
    },
  ],
},
)
</script>

<template>
  <n-card title="访客分析" class="h-260px">
    <ECharts ref="chartRef" :option="option" />
  </n-card>
</template>
