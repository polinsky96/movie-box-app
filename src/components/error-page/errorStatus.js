import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useErrorStatus = defineStore('errorStatus', () => {
  const status = ref(false);
  const textError = ref('');

  function setError(error) {
    status.value = true;
    textError.value = error;
  }

  function removeError() {
    status.value = false;
    textError.value = '';
  }

  return { status, textError, setError, removeError }
})
