<template>
  <div>
    <SearchBox @set-request="getMovie"/>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

import SearchBox from '../components/search-box/TheSearchBox.vue';

const router = useRouter();

const getMovie = (request) => {
  router.push({ path: `/result/${request.value}` });
}

</script>

<style lang="scss" scoped>
.test_box {
  width: 400px;
  height: 400px;  
}
</style>
