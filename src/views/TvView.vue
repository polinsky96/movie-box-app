<template>
  <div class="tv-view">
    <div class="tv-view__wrapper">
      <DetailSectionMain :details="details"/>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import DetailSectionMain from '../components/detail-section/DetailSectionMain.vue';

import getTvDetails from '../modules/interface/getTvDetails';
import { useResponseStatus } from '../modules/useResponseStatus';

const route = useRoute();
const { setResponseStatus } = useResponseStatus();

const id = route.params.id;
const details = ref({});

const getDetails = () => {
  setResponseStatus(async () => {
    details.value = await getTvDetails({ id });
  })
}

getDetails();
</script>
  
<style lang="scss" scoped>

</style>