<template>
    <div class="search-box">
        <input
            @keyup.enter="setRequest"
            v-model="textRequest"
            :placeholder="placeholder"
            class="search-box__input"
        />
        <button 
            @click="setRequest"
            class="search-box__button">
            <SearchIcon />
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import SearchIcon from '../../assets/icons/search-icon.svg';

const props = defineProps({
    placeholder: {
        type: String,
        default: 'Enter your request'
    },
});

const textRequest = ref('');

const emits = defineEmits({
    setRequest: null
});

const setRequest = () => {
    if (textRequest.value.trim() === '') {
            console.log('Please enter your response');
            return 
    }

    emits('setRequest', textRequest);
}
</script>

<style lang="scss" scoped>
.search-box {
    display: flex;
    justify-content: center;

    &__input {
        width: 100%;
        padding: 0.625rem 1.875rem;
        
        color: $font-dark-color;
        font-size: 1.5rem;

        background-color: #f5f5f5;

        border: none;
        border-radius: 5px 0 0 5px;
        outline: none;

        @include for-size(phone-only) {
            font-size: 1rem;
            padding: 0.625rem 1.25rem;
        }
    }

    &__button {
        padding: 0 0.9375rem;

        font-size: 1.5rem;

        background-color: $accent-color;

        cursor: pointer;
        border: none;
        border-radius: 0 0.3125rem 0.3125rem 0;

        &:hover {
            background-color: $accent-color-hover;
        }

        @include for-size(phone-only) {
            font-size: 1rem;
        }
    }
}
</style>