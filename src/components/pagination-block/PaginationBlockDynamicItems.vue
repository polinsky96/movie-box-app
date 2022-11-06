<template>
    <div
        v-if="viewDynamicItems" 
        class="pagination-block-dynamic-items">
        <div class="pagination-block-dynamic-items__wrapper">
            <PaginationBlockItem 
                v-for="item in dynamicPages"
                @set-current-page="setCurrentPage"
                :key="item"
                :value="item"
                :current-page="currentPage"/>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import PaginationBlockItem from './PaginationBlockItem.vue';

const props = defineProps({
    dynamicPages: {
        type: Array,
        defaut: () => {
            return []
        }
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

const viewDynamicItems = computed(() => {
    return props.dynamicPages.length !== 0
});
</script>

<style lang="scss" scoped>
.pagination-block-dynamic-items {
    &__wrapper {
        display: flex;
        gap: 10px;
    }
}
</style>