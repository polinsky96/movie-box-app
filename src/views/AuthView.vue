<template>
    <div class="auth-view">
        <BaseContainer>        
            <div class="auth-view__wrapper">
                <router-view class="auth-view__frame"></router-view>           
                    <button 
                        @click="switchRoute"
                        class="auth-view__button">
                        {{ getButtonText }}
                    </button>
            </div>
        </BaseContainer>
    </div>
</template>
  
<script setup>
import { computed, ref } from "vue";
import { useRouter } from 'vue-router';
import BaseContainer from "../components/base/BaseContainer.vue";

const router = useRouter();
const isSignUp = ref(router.currentRoute.value.name === 'register');

const getButtonText = computed(() => {
    return isSignUp.value 
        ? "Already have an account? Sign In!"
        : "Don't have an account? Sign Up!"
});

const switchRoute = () => {
    if (router.currentRoute.value.name === 'login') {
        router.push({ name: 'register'});
        isSignUp.value = true;
    } else if (router.currentRoute.value.name === 'register') {
        router.push({ name: 'login'});
        isSignUp.value = false;
    }
}
</script>
  
<style lang="scss" scoped>
.auth-view {
    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    &__frame {
        margin-bottom: 1rem;
    }

    &__button {
        @include reset-style-button;
    }
}
</style>