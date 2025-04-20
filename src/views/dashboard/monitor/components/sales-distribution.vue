<script setup lang="ts">
import type { ECOption } from '~/components/ECharts/config'
import ECharts from '~/components/ECharts/index.vue'

const settingStore = useSettingStore()
const { mode } = storeToRefs(settingStore)

const chartRef = ref<InstanceType<typeof ECharts>>()

watch(mode, () => {
  chartRef.value?.draw()
}, { immediate: true })
const chartData = [
  { value: 1048, name: 'Beijing', itemStyle: { color: 'rgba(99, 102, 241, 0.9)' } },
  { value: 735, name: 'Shanghai', itemStyle: { color: 'rgba(134, 239, 172, 0.9)' } },
  { value: 580, name: 'Guangzhou', itemStyle: { color: 'rgba(253, 224, 71, 0.9)' } },
  { value: 484, name: 'Shenzhen', itemStyle: { color: 'rgba(248, 113, 113, 0.9)' } },
  { value: 300, name: 'Chengdu', itemStyle: { color: 'rgba(125, 211, 252, 0.9)' } },
]
const option = ref<ECOption>({
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      name: 'Sales Mapping',
      type: 'pie',
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: chartData,
    },
  ],
},
)
</script>

<template>
  <n-card title="销售分布" class="h-400px">
    <ECharts ref="chartRef" :option="option" />
  </n-card>
</template>
