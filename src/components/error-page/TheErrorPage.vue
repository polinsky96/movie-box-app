<template>
    <div v-if="store.status" class="error-page">
        <div class="error-page__wrapper">
            <p class="error-page__message">
                {{ store.textError }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { useErrorStatusStore } from '../../stores/errorStatus';

const store = useErrorStatusStore();  
</script>

<style lang="scss" scoped>
.error-page {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    
    width: 100%;
    min-height: 100vh;  

    background-color: pink;

    &__wrapper {
        display: flex;  
        flex-direction: column;
        justify-content: center;
        align-items: center;

        min-height: 100vh;
    }

    &__message {
        font-size: 2rem;
    }
}
</style>