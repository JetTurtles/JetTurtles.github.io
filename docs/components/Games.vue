<script setup lang="ts">
// 参数格式
export interface Game {
  // 图标
  logo: string
  // 名称
  name: string
  // 背景
  bg: string
  // 链接
  link: string
}

const props = defineProps<{
  games: Game[]
}>();

import {ref, onMounted} from 'vue';

const currentIndex = ref(2);

const leftItems = ref(null);
const rightItems = ref(null);

const MAX_SIZE = 5
// 分割数组
const partition = () => {
  if (props.games) {
    const index = currentIndex.value
    const length = props.games.length;
    if (index >= 0 && index < length) {
      // 获取当前元素之前的5条元素
      leftItems.value = props.games.slice(Math.max(0, index - MAX_SIZE), index)
      // 获取当前元素之后的5条元素
      rightItems.value = props.games.slice(index + 1, Math.min(length, index + 1 + MAX_SIZE))
    }
  }
}

const next = (n: number) => {
  // 往后点几个
  currentIndex.value = currentIndex.value + (1 + n)
  partition()
}
const prev = (n: number) => {
  // 前面元素个数
  const num = Math.min(currentIndex.value, MAX_SIZE)
  // 往前点几个
  const setp = num - n
  currentIndex.value = currentIndex.value - setp
  partition()

}
const open = () => {

}

onMounted(() => {
  partition();
})

</script>

<template>
  <div v-if="games" class="Games" :style="{ backgroundImage: `url(${games[currentIndex].bg})` }">
    <div class="container">
      <!-- 当前元素左侧元素 -->
      <div class="items left-items">
        <div
            v-for="(game, index) in leftItems"
            :key="game.name"
            class="item"
            @click="prev(index)"
        >
          <img :src="game.logo" alt="Game Logo"/>
        </div>
      </div>
      <!-- 游戏名称 -->
      <div class="middle">
        <div class="current" @click="open">
          <div class="item">
            <img :src="games[currentIndex].logo" :title="games[currentIndex].name" alt="Logo"/>
          </div>
        </div>
      </div>
      <!-- 当前元素右侧元素 -->
      <div class="items right-items">
        <div
            v-for="(game, index) in rightItems"
            :key="game.name"
            class="item"
            @click="next(index)"
        >
          <img :src="game.logo" alt="Game Logo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Games {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
}


.left-items {
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .item {
    margin-right: 20px;
  }
}

.right-items {
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .item {
    margin-left: 20px;
  }
}

.item img {
  width: 50px;
  height: 50px;
}

.middle {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.current {
  border: #646cff 5px solid;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
