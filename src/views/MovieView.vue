<template>
  <div class="movie-view">
    <div class="movie-view__wrapper">
      <DetailSectionMain :details="details" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import DetailSectionMain from '../components/detail-section/DetailSectionMain.vue';

import getMovieDetails from '../modules/interface/getMovieDetails';
import { useResponseStatus } from '../modules/useResponseStatus';

const route = useRoute();
const { setResponseStatus } = useResponseStatus();

const id = route.params.id;
const details = ref({});

const getDetails = () => {
  setResponseStatus(async () => {
    details.value = await getMovieDetails({ id });
  })
}

getDetails();
</script>

<style lang="scss" scoped>

</style>