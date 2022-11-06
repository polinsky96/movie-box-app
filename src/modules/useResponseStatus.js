import { ref, computed } from "vue";
import { useErrorStatusStore } from '../stores/errorStatus';

export const useResponseStatus = () => {
  const store = useErrorStatusStore();

  const requestStatus = {
    progress: "REQUEST_IN_PROGRESS",
    error: "REQUEST_ERROR",
    success: "REQUEST_SUCCESS",
  }

  const requestState = ref(null);

  const loading = computed(() => requestState.value === requestStatus.loading);
  const error = computed(() => requestState.value === requestStatus.error);

  const setResponseStatus = async (callback) => {
    requestState.value = requestStatus.progress;

    try {
      await callback;
      
      requestState.value = requestStatus.success;

    } catch(error) {
      requestState.value = requestStatus.error;
      store.setError(error.message || error);
    }
  }

  return { loading, error, requestState, setResponseStatus };
};