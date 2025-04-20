<script setup lang="ts" name="ECharts">
import type { ECElementEvent, EChartsType } from 'echarts/core'
import type { ECOption } from './config'
import { useDebounceFn } from '@vueuse/core'
import {
  computed,
  markRaw,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue'
import echarts from './config'

interface Props {
  option: ECOption
  renderer?: 'canvas' | 'svg'
  resize?: boolean
  width?: number | string
  height?: number | string
  onClick?: (event: ECElementEvent) => any
}

const props = withDefaults(defineProps<Props>(), {
  renderer: 'canvas',
  resize: true,
})

const emit = defineEmits(['mapClick'])
const settingStore = useSettingStore()
const echartsStyle = computed(() => {
  return props.width || props.height
    ? {
        height: `${props.height}px`,
        width: `${props.width}px`,
      }
    : {
        height: '100%',
        width: '100%',
      }
})

const chartRef = ref<HTMLDivElement | HTMLCanvasElement>()
const chartInstance = ref<EChartsType>()

const draw = () => {
  if (chartInstance.value) {
    chartInstance.value.setOption(props.option, {
      notMerge: true,
    })
  }
}

watch(props, () => {
  draw()
})


const init = () => {
  const theme = settingStore.mode === 'dark' ? 'dark' : 'light'
  if (!chartRef.value) {
    return
  }
  chartInstance.value = echarts.getInstanceByDom(chartRef.value)

  if (!chartInstance.value) {
    chartInstance.value = markRaw(
      echarts.init(chartRef.value, theme, {
        renderer: props.renderer,
      }),
    )
    draw()
  }
}

const resize = () => {
  if (chartInstance.value && props.resize) {
    chartInstance.value.resize({ animation: { duration: 300 } })
  }
}

const debouncedResize = useDebounceFn(resize, 300, { maxWait: 800 })

// const globalStore = useGlobalStore();
// const { maximize, isCollapse, tabs, footer } = storeToRefs(globalStore);

// watch(
//   () => [maximize, isCollapse, tabs, footer],
//   () => {
//     debouncedResize();
//   },
//   { deep: true }
// );

onMounted(() => {
  nextTick(() => init())
  window.addEventListener('resize', debouncedResize)
})

onBeforeUnmount(() => {
  chartInstance.value?.dispose()
  window.removeEventListener('resize', debouncedResize)
})

defineExpose({
  getInstance: () => chartInstance.value,
  resize,
  draw,
})
</script>

<template>
  <div id="echarts" ref="chartRef" :style="echartsStyle" />
</template>
