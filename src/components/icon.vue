<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { NIcon } from 'naive-ui'

interface IconProps {
  /* 图标名称 */
  icon?: string
  /* 图标颜色 */
  color?: string
  /* 图标大小 */
  size?: number
  /* 图标深度 */
  depth?: 1 | 2 | 3 | 4 | 5
}

const { icon, color, size = 18, depth } = defineProps<IconProps>()

const isLocal = icon && icon?.startsWith('local:')

const getLocalIcon = (icon: string) => {
  const svgName = icon?.replace('local:', '')
  const svg = import.meta.glob('~/assets/svg-icons/*.svg', {
    query: '?raw',
    import: 'default',
    eager: true,
  })
  const target = svg[`~/assets/svg-icons/${svgName}.svg`]
  return target
}
</script>

<template>
  <NIcon
    v-if="icon"
    :size="size"
    :depth="depth"
    :color="color"
  >
    <template v-if="isLocal">
      <i v-html="getLocalIcon(icon)" />
    </template>
    <template v-else>
      <Icon :icon="icon" />
    </template>
  </NIcon>
</template>
