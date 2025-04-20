<script setup lang="ts">
import CustomerSatisfaction from './components/customer-satisfaction.vue'
import HotProduct from './components/hot-product.vue'
import RevenueAnalysis from './components/revenue-analysis.vue'
import SaleToday from './components/sale-today.vue'
import SalesDistribution from './components/sales-distribution.vue'
import TargetVsReality from './components/target-vs-reality.vue'
import VisitorAnalysis from './components/visitor-analysis.vue'
import VolumeServiceLevel from './components/volume-service-level.vue'
</script>

<template>
  <div class="flex flex-col gap-6">
    <n-grid responsive="screen" item-responsive x-gap="16" y-gap="16">
      <n-gi span="24 m:14 l:15">
        <SaleToday />
      </n-gi>
      <n-gi span="24 m:10 l:9">
        <VisitorAnalysis />
      </n-gi>
    </n-grid>
    <n-grid responsive="screen" item-responsive x-gap="16" y-gap="16">
      <n-gi span="24 m:10 l:10">
        <RevenueAnalysis />
      </n-gi>
      <n-gi span="24 m:7 l:7">
        <CustomerSatisfaction />
      </n-gi>
      <n-gi span="24 m:7 l:7">
        <SalesDistribution />
      </n-gi>
    </n-grid>
    <n-grid responsive="screen" item-responsive x-gap="16" y-gap="16">
      <n-gi span="24 m:10 l:10">
        <HotProduct />
      </n-gi>
      <n-gi span="24 m:7 l:7">
        <VolumeServiceLevel />
      </n-gi>
      <n-gi span="24 m:7 l:7">
        <TargetVsReality />
      </n-gi>
    </n-grid>
  </div>
</template>


