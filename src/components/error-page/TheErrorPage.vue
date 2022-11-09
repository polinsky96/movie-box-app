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
        </div>
    </div>
</template>

<script setup>
import { useErrorStatus } from '../../stores/errorStatus';

const store = useErrorStatus();  
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
        font-size: 1.5rem;
    }


}
</style>