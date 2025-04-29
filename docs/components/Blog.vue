<script setup lang="ts">
// 参数格式
export interface Blog {
  // 图标
  img: string
  // 标题
  title: string
  // 简要
  briefly: string
  // 链接
  link: string
}

const props = defineProps<{
  blogs: Blog[]
}>();

</script>

<template>
  <div class="blog-container">
    <a class="blog-item"
       v-for="item in blogs"
       :href="item.link"
       :key="Math.random()">
      <img :src="item.img" :alt="item.title" class="blog-img"/>
      <div class="blog-content">
        <h1>{{ item.title }}</h1>
        <p>{{ item.briefly }}</p>
      </div>
    </a>
  </div>
</template>

<style scoped>

.blog-container {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
}

.blog-item {
  display: flex;
  width: 100%;
  border-radius: 8px;
  padding: 10px;
  text-align: left;
  text-decoration: none;
  transition: transform 0.3s ease;
  color: var(--text-color);
  background-color: var(--bg-color);
}

.blog-item:hover {
  transform: translateY(-5px);
}

.blog-img {
  flex: 0 0 15%;
  max-width: 15%;
  height: auto;
  border-radius: 5px;
  margin-right: 20px;
}

.blog-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
  margin-bottom: 0;
}
</style>