<template>
  <PaginationBlockItem
    @set-current-page="setCurrentPage"
    v-show="viewBeforeLastPage"
    :value="totalPages - 1"
    :current-page="currentPage"/>
</template>

<script setup>
import { computed } from 'vue';
import PaginationBlockItem from './PaginationBlockItem.vue';

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
    },

    currentPage: {
        type: Number,
        default: 0
    }
});

const emits = defineEmits({
    setCurrentPage: null
})

const setCurrentPage = (page) => {
    emits('setCurrentPage', page);
}

const viewBeforeLastPage = computed(() => {
    return props.dynamicPages[props.dynamicPages.length - 1] === (props.totalPages - 2) 
        && props.dynamicPaginate
});
</script>