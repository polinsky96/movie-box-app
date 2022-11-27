<template>
  <div>
    <BaseContainer>
      <SearchBox 
        @set-request="getMovie"
        placeholder="Find movie, tv or person"/>
    </BaseContainer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import BaseContainer from '../components/base/BaseContainer.vue';

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
