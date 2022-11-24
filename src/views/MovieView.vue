<template>
  <div class="movie-view">
    <div class="movie-view__wrapper">
      <DetailSectionMovie :details="details"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import DetailSectionMovie from '../components/detail-section/DetailSectionMovie.vue';

import getMovieDetails from '../modules/interface/getMovieDetails';
import { useResponseStatus } from '../modules/useResponseStatus';

const route = useRoute();
const { setResponseStatus } = useResponseStatus();

const id = route.params.id;
const details = ref({});

const getDetails = async () => {
  details.value = await getMovieDetails({ id });
}

getDetails();
</script>

<style lang="scss" scoped>

</style>