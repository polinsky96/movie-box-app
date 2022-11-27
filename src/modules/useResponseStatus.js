import { ref, computed } from "vue";
import { useErrorStatus } from '../components/error-page/errorStatus';
import { useLoaderStatus } from '../components/loader-main/loaderStatus';

export const useResponseStatus = () => {
  const storeError = useErrorStatus();
  const storeLoader = useLoaderStatus();

  const requestStatus = {
    progress: "REQUEST_IN_PROGRESS",
    error: "REQUEST_ERROR",
    success: "REQUEST_SUCCESS",
  }

  const requestState = ref(null);

  const loading = computed(() => requestState.value === requestStatus.progress);
  const error = computed(() => requestState.value == requestStatus.error);

  const setResponseStatus = async (callback) => {
    requestState.value = requestStatus.progress;
    storeLoader.setStatusProgress();

    try {
      await callback();
      
      requestState.value = requestStatus.success;
      storeLoader.setStatusLoaded();
    } catch(error) {
      requestState.value = requestStatus.error;
      storeLoader.setStatusLoaded();
      storeError.setError(error.message || error);
    }
  }

  return { loading, error, requestState, setResponseStatus };
};