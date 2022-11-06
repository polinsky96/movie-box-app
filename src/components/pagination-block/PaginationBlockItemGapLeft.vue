<template>
    <PaginationBlockItemGap 
        v-show="viewLeftGap"/>
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
    }
});

const viewLeftGap = computed(() => {
    return props.dynamicPages[0] > 3 && props.dynamicPaginate
});
</script>