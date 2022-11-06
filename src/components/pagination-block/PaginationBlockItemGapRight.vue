<template>
    <PaginationBlockItemGap 
        v-show="viewRightGap"/>
</template>

<script setup>
import { computed } from 'vue';
import PaginationBlockItemGap from './PaginationBlockItemGap.vue';

const props = defineProps({
    dynamicPages: {
        type: Array,
        default: () => {
            return []
        }
    },

    dynamicPaginate: {
        type: Boolean,
        default: false
    },

    totalPages: {
        type: Number,
        default: 0
    }
});

const viewRightGap = computed(() => {
    return props.dynamicPages[props.dynamicPages.length - 1] < (props.totalPages - 2) 
    && props.dynamicPaginate
});
</script>