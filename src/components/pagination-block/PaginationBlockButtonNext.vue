<template>
    <PaginationBlockButton 
        @click-button="clickNextButton">
        <slot>Next →</slot>
    </PaginationBlockButton>
</template>

<script setup>
import { computed } from 'vue';
import PaginationBlockButton from './PaginationBlockButton.vue';

const props = defineProps({
    currentPage: {
        type: Number,
        default: 0
    }
});

const emits = defineEmits({
    clickNextButton: null
})

const increaseCurrentPage = computed(() => {
    let value = props.currentPage;
    return ++value
})

const clickNextButton = () => {
    emits('clickNextButton', increaseCurrentPage.value);
}
</script>