import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLoaderStatus = defineStore('loadingStatus', () => {
  const status = ref(false);

  function setStatusProgress() {
    status.value = true;
  }

  function setStatusLoaded() {
    status.value = false;
  }

  return { status, setStatusProgress, setStatusLoaded }
})
