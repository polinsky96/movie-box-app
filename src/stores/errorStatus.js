import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useErrorStatus = defineStore('errorStatus', () => {
  const status = ref(false);
  const textError = ref('');

  function setError(error) {
    status.value = true;
    textError.value = error;
  }

  return { status, textError, setError }
})
