<template>
  <div class="movie-view">
    <div class="movie-view__wrapper">
      <DetailSectionContentMovie :details="details"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import DetailSectionContentMovie from '../components/detail-section/DetailSectionContentMovie.vue';

import theMovieDb from '../modules/theMovieDb/theMovieDb';
import { useResponseStatus } from '../modules/useResponseStatus';

const route = useRoute();
const { setResponseStatus } = useResponseStatus();

const id = route.params.id;
const details = ref({});

const getDetails = () => {
    setResponseStatus(theMovieDb.movies.getDetails(
        { id },
        (response) => {
          details.value = response;
        })
    );  
}

getDetails();
</script>

<style lang="scss" scoped>

</style>