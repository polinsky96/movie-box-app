<template>
  <div class="person-view">
    <DetailSectionPerson :details="details"/>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import DetailSectionPerson from '../components/detail-section/DetailSectionPerson.vue';

import getPersonDetails from '../modules/interface/getPersonDetails';
import { useResponseStatus } from '../modules/useResponseStatus';

const route = useRoute();
const { setResponseStatus } = useResponseStatus();

const id = route.params.id;
const details = ref({});

const getDetails = () => {
  setResponseStatus(async () => {
    details.value = await getPersonDetails({ id });
  })
}

getDetails();
</script>
  
<style lang="scss" scoped>

</style>