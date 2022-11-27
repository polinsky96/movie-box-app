<template>
    <div v-if="store.status" class="error-page">
        <div class="error-page__wrapper">
            <img 
                class="error-page__image"
                src="@/assets/images/error-image.gif" 
                alt="error-image">
            <p class="error-page__message">
                {{ store.textError }}
            </p>
            <button
                @click="goHomePage"
                class="error-page__button">
                Come back home page
            </button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useErrorStatus } from './errorStatus';

const store = useErrorStatus();  
const router = useRouter()

const goHomePage = () => {
    store.removeError();
    router.push({
        name: 'home'
    })
}
</script>

<style lang="scss" scoped>
.error-page {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    width: 100%;
    min-height: 100vh;  

    background-color: $bg-color;

    &__wrapper {
        display: flex;  
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        min-height: 100vh;
    }

    &__image {
        width: 80%;
        max-width: 450px;
        margin-bottom: 2rem;
    }

    &__message {
        margin-bottom: 1rem;

        font-size: 1.5rem;
    }

    &__button {
        @include reset-style-button;
        font-size: 1rem;
        color: $accent-color;
    }
}
</style>