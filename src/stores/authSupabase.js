import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

const useAuthSupabase = defineStore('authSupabase', () => {
    const user = ref(null);

    const setUser = (session) => {
        user.value = session;
    }

    const getUser = computed(() => {
        return user.value;
    })

    const isUser = computed(() => {
        return user.value != null;
    })

    return { setUser, getUser, isUser }
})

export default useAuthSupabase;