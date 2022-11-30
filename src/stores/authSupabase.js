import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

const useAuthSupabase = defineStore('authSupabase', () => {
    const user = ref(null);

    const setUser = (session) => {
        user.value = session;
    }

    const isUser = computed(() => {
        return user.value;
    })

    return { setUser, isUser }
})

export default useAuthSupabase;