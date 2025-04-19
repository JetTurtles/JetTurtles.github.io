<script setup lang="ts">
import Games from './Games.vue';
import {useData} from 'vitepress'

const {frontmatter: fm} = useData()
</script>

<template>
  <Games
      v-if="fm.games"
      class="HomeGames"
      :games="fm.games"
  />
</template>