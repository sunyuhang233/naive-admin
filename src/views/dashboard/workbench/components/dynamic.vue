<template>
  <n-card title="动态">
    <template #header-extra>
      <n-button
        type="primary"
        quaternary
      >
        更多
      </n-button>
    </template>
    <n-list hoverable>
      <n-list-item>
        <template #prefix>
          <n-avatar
            round
            :size="48"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </template>
        <n-thing
          title="客怎车"
          title-extra="09/29/2022"
          description="是“我的客厅怎么会有车”的缩写，指那些在车道间肆意穿梭，把马路当客厅的人，多有嘲讽意味，主要用于车祸视频中。"
        />
      </n-list-item>
      <n-list-item>
        <template #prefix>
          <n-avatar
            round
            :size="48"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </template>
        <n-thing
          title="街健五大神技"
          title-extra="09/29/2022"
          description="街头健身五大神技，包括1.单手引体向上。2.慢速双力臂。3.人旗。4.前水平。5.俄式挺身。"
        />
      </n-list-item>
      <n-list-item>
        <template #prefix>
          <n-avatar
            round
            :size="48"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </template>
        <n-thing
          title="天下岂有七十年太子乎"
          title-extra="09/29/2022"
          description="★含义：用来调侃由于英国女王超长的在位时间，导致其长子查理斯王子成为史上等待王位时间最久的王储 "
        />
      </n-list-item>
      <n-list-item>
        <template #prefix>
          <n-avatar
            round
            :size="48"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </template>
        <n-thing
          title="你干嘛～哈哈～哎哟～"
          title-extra="09/29/2022"
          description="出自著名偶像练习生、练习时长两年半、背带异常梳中分的蔡徐坤在2018年的一档综艺节目偶像练习生中出现的一幕"
        />
      </n-list-item>
    </n-list>
  </n-card>
</template>
