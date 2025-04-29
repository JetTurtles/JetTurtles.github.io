<script setup lang="ts">
// 游戏
interface Game {
  name: string;
  img: string;
}

//  自己
interface Me {
  // 头像
  img: string;
  // 名字
  name: string;
  //  描述
  desc: string;
  // 游戏
  games?: Game[];
}

const props = defineProps<{
  me: Me
}>();

</script>

<template>
  <div class="about-container">
    <div class="left-section">
      <div class="profile-card">
        <img :src="me.img" :alt="me.name" class="profile-img"/>
        <h1>{{ me.name }}</h1>
        <p>{{ me.desc }}</p>
      </div>
    </div>
    <div class="right-section">
      <div class="game-list">
        <div v-for="game in me.games" :key="game.name" class="game-item">
          <img :src="game.img" :alt="game.name" class="game-img"/>
          <span>{{ game.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  width: 80%;
  height: 400px;
  margin: 10px auto;
  gap: 10px;
  display: flex;
  color: var(--text-color);
}

.left-section {
  flex: 3;
  align-items: center;
  justify-content: center;
}

.profile-card {
  min-width: 180px;
  width: 80%;
  height: 100%;
  gap: 20px;
  border-radius: 5px;
  text-align: center;
  background: var(--profile-card-bg);
  display: flex;
  flex-direction: column;

  p {
    width: 80%;
    margin: auto;
  }
}

.profile-img {
  width: 150px;
  height: 150px;
  margin: auto;
  border-radius: 50%;
}

.right-section {
  flex: 6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.game-item {
  height: 110px;
  width: 150px;
  text-align: center;
  border-radius: 5px;
  background: var(--game-bg);

  span {
    line-height: 30px;
  }
}

.game-item:hover {
  transform: translateY(-5px);
}

.game-img {
  width: 100%;
  height: 80px;
  border-radius: 5px;
  object-fit: cover;
}
</style>