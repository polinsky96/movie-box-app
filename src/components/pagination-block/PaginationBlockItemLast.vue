<template>
  <PaginationBlockItem
    @set-current-page="setCurrentPage"
    v-show="viewLastItem"
    :value="totalPages"
    :current-page="currentPage"/>
</template>

<script setup>
import { computed } from 'vue';
import PaginationBlockItem from './PaginationBlockItem.vue';

const props = defineProps({
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

const viewLastItem = computed(() => {
    return props.totalPages > 1
});
</script>