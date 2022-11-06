<template>
  <PaginationBlockItem
    @set-current-page="setCurrentPage"
    v-show="viewSecondPage"
    :value="2"
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

const viewSecondPage = computed(() => {
    return props.dynamicPages[0] === 3 
        && props.currentPage !== 1 
        && props.dynamicPaginate
});
</script>