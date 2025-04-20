<script setup lang="ts">
import CustomerSatisfaction from './components/customer-satisfaction.vue'
import RevenueAnalysis from './components/revenue-analysis.vue'
import SaleToday from './components/sale-today.vue'
import SalesDistribution from './components/sales-distribution.vue'
import VisitorAnalysis from './components/visitor-analysis.vue'
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
  </div>
</template>


