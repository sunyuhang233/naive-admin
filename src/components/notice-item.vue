<script setup lang="ts">
const { type } = defineProps<{ type: string }>()
const msgList = [
  {
    title: '池不胖 关注了你',
    time: '2021-2-26 23:50',
    avatar: 'https://api.likepoems.com/img/pc',
  },
  {
    title: '唐不苦 关注了你',
    time: '2021-2-21 8:05',
    avatar: 'https://api.likepoems.com/img/pc',
  },
  {
    title: '中小鱼 关注了你',
    time: '2020-1-17 21:12',
    avatar: 'https://api.likepoems.com/img/pc',
  },
  {
    title: '何小荷 关注了你',
    time: '2021-01-14 0:20',
    avatar: 'https://api.likepoems.com/img/pc',
  },
  {
    title: '誶誶淰 关注了你',
    time: '2020-12-20 0:15',
    avatar: 'https://api.likepoems.com/img/pc',
  },
  {
    title: '冷月呆呆 关注了你',
    time: '2020-12-17 22:06',
    avatar: 'https://api.likepoems.com/img/pc',
  },
]

const noticeList = [
  {
    title: '新增国际化',
    time: '2024-6-13 0:10',
    type: 'notice',
  },
  {
    title: '冷月呆呆给你发了一条消息',
    time: '2024-4-21 8:05',
    type: 'message',
  },
  {
    title: '小肥猪关注了你',
    time: '2020-3-17 21:12',
    type: 'collection',
  },
  {
    title: '新增使用文档',
    time: '2024-02-14 0:20',
    type: 'notice',
  },
  {
    title: '小肥猪给你发了一封邮件',
    time: '2024-1-20 0:15',
    type: 'email',
  },
  {
    title: '菜单mock本地真实数据',
    time: '2024-1-17 22:06',
    type: 'notice',
  },
  {
    title: '新增国际化',
    time: '2024-1-17 22:06',
    type: 'notice',
  },
]

const getRandomColor = () => {
  const staticColor = ['#5D87FF', '#B48DF3', '#1D84FF', '#60C041', '#38C0FC', '#F9901F', '#FF80C8']
  return staticColor[Math.floor(Math.random() * staticColor.length)]
}

const noticeStyleMap = {
  notice: {
    icon: 'i-icon-park-outline-remind',
    iconColor: '#a8d3ff',
    backgroundColor: '#ecf2ff',
  },
  message: {
    icon: 'i-icon-park-outline-message',
    iconColor: '#4be7cb',
    backgroundColor: '#e6fffa',
  },
  collection: {
    icon: 'i-carbon-email',
    iconColor: '#fe7e7e',
    backgroundColor: '#fdede8',
  },
  email: {
    icon: 'i-carbon-home',
    iconColor: '#ffaf22',
    backgroundColor: '#fef5e5',
  },
}

const getNoticeStyle = (type: string) => {
  const defaultStyle = {
    icon: 'i-icon-park-outline-remind',
    iconColor: '#ffffff',
    backgroundColor: getRandomColor(),
  }
  const style = noticeStyleMap[type as keyof typeof noticeStyleMap] || defaultStyle
  return {
    ...style,
    backgroundColor: style.backgroundColor,
  }
}
</script>

<template>
  <n-scrollbar class="h-400px">
    <ul v-if="type === 'notice'" class="flex flex-col gap-2">
      <li
        v-for="(item, index) in noticeList" :key="index"
        class="p-10px rounded-1.5 flex cursor-pointer items-center hover:bg-[#f9f9f9]"
      >
        <div
          class="rounded-1.5 flex size-36px items-center justify-center" :style="{
            backgroundColor: `${getNoticeStyle(item.type).backgroundColor} !important`,
          }"
        >
          <i
            :class="getNoticeStyle(item.type).icon" :style="{
              color: `${getNoticeStyle(item.type).iconColor} !important`,
            }"
          />
        </div>
        <div class="ml-3 flex flex-col gap-1">
          <h4 class="text-sm text-ellipsis">
            {{ item.title }}
          </h4>
          <p class="text-xs text-ellipsis">
            {{ item.time }}
          </p>
        </div>
      </li>
    </ul>
    <ul v-else-if="type === 'msg'" class="flex flex-col gap-2">
      <li
        v-for="(item, index) in msgList" :key="index"
        class="p-10px rounded-1.5 flex cursor-pointer items-center hover:bg-[#f9f9f9]"
      >
        <img :src="item.avatar" class="rounded-1.5 size-36px object-cover">
        <div class="ml-3 flex flex-col gap-1">
          <h4 class="text-sm text-ellipsis">
            {{ item.title }}
          </h4>
          <p class="text-xs text-ellipsis">
            {{ item.time }}
          </p>
        </div>
      </li>
    </ul>
    <div v-else>
      <div class="flex h-400px w-full items-center justify-center">
        <n-empty description="暂无内容" size="large" />
      </div>
    </div>
  </n-scrollbar>
  <div class="py-3 flex items-center justify-center relative">
    <n-button block size="large">
      查看全部
    </n-button>
  </div>
</template>
