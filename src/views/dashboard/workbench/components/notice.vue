<template>
  <n-card title="公告">
    <template #header-extra>
      <n-button
        type="primary"
        quaternary
      >
        更多
      </n-button>
    </template>
    <n-list>
      <n-list-item>
        <template #prefix>
          <n-tag
            :bordered="false"
            type="info"
            size="small"
          >
            通知
          </n-tag>
        </template>
        <n-button text>
          漂洋过海上大专
        </n-button>
      </n-list-item>
      <n-list-item>
        <template #prefix>
          <n-tag
            :bordered="false"
            type="success"
            size="small"
          >
            消息
          </n-tag>
        </template>
        <n-button text>
          你在玩很新的东西
        </n-button>
      </n-list-item>
      <n-list-item>
        <template #prefix>
          <n-tag
            :bordered="false"
            type="warning"
            size="small"
          >
            活动
          </n-tag>
        </template>
        <n-button text>
          上岸第一剑，先斩意中人
        </n-button>
      </n-list-item>
    </n-list>
  </n-card>
</template>
