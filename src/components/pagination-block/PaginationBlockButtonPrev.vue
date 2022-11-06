<template>
    <PaginationBlockButton 
        @click-button="clickPrevButton">
        <slot>← Prev</slot>
    </PaginationBlockButton>
</template>

<script setup>
import {computed } from 'vue';
import PaginationBlockButton from './PaginationBlockButton.vue';

const props = defineProps({
    currentPage: {
        type: Number,
        default: 0
    }
});

const emits = defineEmits({
    clickPrevButton: null
})

const reduceCurrentPage = computed(() => {
    let value = props.currentPage;
    return --value
})

const clickPrevButton = () => {
    emits('clickPrevButton', reduceCurrentPage.value);
}
</script>