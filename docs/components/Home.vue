<script setup lang="ts">
import {useData} from 'vitepress'
import Blog from "./Blog.vue";
import AboutMe from "./AboutMe.vue";

const {frontmatter: fm} = useData()

console.log(fm.blogs)
</script>

<template>
  <AboutMe v-if="fm.me" :me="fm.me"/>
  <Blog v-if="fm.blogs" :blogs="fm.blogs"/>
</template>