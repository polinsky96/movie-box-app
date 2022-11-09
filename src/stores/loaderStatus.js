import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLoaderStatus = defineStore('loadingStatus', () => {
  const status = ref(false);

  function setLoading() {
    status.value = true;
  }

  function setSuccess() {
    status.value = false;
  }

  return { status, setLoading, setSuccess }
})
