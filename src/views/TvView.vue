<template>
  <div class="tv-view">
    <div class="tv-view__wrapper">
      <DetailSectionMovie :details="details"/>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import DetailSectionMovie from '../components/detail-section/DetailSectionMovie.vue';

import getTvDetails from '../modules/interface/getTvDetails';
import { useResponseStatus } from '../modules/useResponseStatus';

const route = useRoute();
const { setResponseStatus } = useResponseStatus();

const id = route.params.id;
const details = ref({});

const getDetails = async () => {
  details.value = await getTvDetails({ id });
}

getDetails();
</script>
  
<style lang="scss" scoped>

</style>