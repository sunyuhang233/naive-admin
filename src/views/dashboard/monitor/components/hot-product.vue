<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { NProgress, NTag } from 'naive-ui'

interface Product {
  title: string
  hot: number
  sales: number
  tagType: 'success' | 'warning' | 'error' | 'info' | 'default'
}

function createColumns(): DataTableColumns<Product> {
  return [
    {
      title: '名称',
      key: 'title',
    },
    {
      title: '热度',
      key: 'hot',
      width: 160,
      render(row) {
        return h(
          NProgress,
          {
            percent: row.hot,
            showIndicator: false,
            type: 'line',
            percentage: row.hot,
            status: row.tagType,
          },
        )
      },
    },
    {
      title: '销量',
      key: 'sales',
      render(row) {
        return h(
          NTag,
          {
            type: row.tagType,
            size: 'small',
          },
          { default: () => `${row.sales}%` },
        )
      },
    },
  ]
}

const data: Product[] = [
  { title: '家居装饰系列', hot: 22, sales: 10, tagType: 'success' },
  { title: '迪士尼公主粉色包 18"', hot: 20, sales: 20, tagType: 'warning' },
  { title: '家居装饰系列 2', hot: 30, sales: 30, tagType: 'error' },
  { title: '浴室用品', hot: 40, sales: 4, tagType: 'info' },
  { title: '苹果智能手表', hot: 50, sales: 50, tagType: 'default' },
  { title: '健身追踪器', hot: 60, sales: 61, tagType: 'success' },
  { title: '无线耳机', hot: 70, sales: 73, tagType: 'warning' },
  { title: '智能手环', hot: 80, sales: 80, tagType: 'error' },
  { title: '智能手环 2', hot: 90, sales: 10, tagType: 'info' },
]

const columns = createColumns()
</script>

<template>
  <n-card title="热销商品" class="h-400px">
    <n-scrollbar class="h-300px">
      <n-data-table :columns="columns" :data="data" :pagination="false" :bordered="false" />
    </n-scrollbar>
  </n-card>
</template>
