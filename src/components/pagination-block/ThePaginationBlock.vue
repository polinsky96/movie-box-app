<template>
    <div class="pagination-block">
        <div class="pagination-block__wrapper">
            <PaginationBlockButtonPrev
                :current-page="currentPage" 
                @click-prev-button="reduceCurrentPage"/>
            <PaginationBlockItem 
                @set-current-page="setCurrentPage"
                :value="1"
                :current-page="currentPage"/>
            <PaginationBlockItemSecond 
                @set-current-page="setCurrentPage"
                :current-page="currentPage"
                :dynamic-pages="dynamicPages"
                :dynamic-paginate="dynamicPaginate"/>
            <PaginationBlockItemGapLeft 
                :dynamic-pages="dynamicPages"
                :dynamic-paginate="dynamicPaginate"/>
            <PaginationBlockDynamicItems 
                @set-current-page="setCurrentPage"
                :dynamic-pages="dynamicPages"
                :current-page="currentPage"/>
            <PaginationBlockItemGapRight 
                :dynamic-pages="dynamicPages"
                :total-pages="totalPages"
                :dynamic-paginate="dynamicPaginate"/>
            <PaginationBlockItemBeforeLast 
                @set-current-page="setCurrentPage"
                :total-pages="totalPages"
                :current-page="currentPage"
                :dynamic-pages="dynamicPages"
                :dynamic-paginate="dynamicPaginate"/>
            <PaginationBlockItemLast 
                @set-current-page="setCurrentPage"
                :total-pages="totalPages"
                :current-page="currentPage"/>
            <PaginationBlockButtonNext
                :current-page="currentPage" 
                @click-next-button="increaseCurrentPage"/>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';

import PaginationBlockButtonPrev from './PaginationBlockButtonPrev.vue';
import PaginationBlockButtonNext from './PaginationBlockButtonNext.vue';
import PaginationBlockItem from './PaginationBlockItem.vue';
import PaginationBlockItemSecond from './PaginationBlockItemSecond.vue';
import PaginationBlockItemBeforeLast from './PaginationBlockItemBeforeLast.vue';
import PaginationBlockItemLast from './PaginationBlockItemLast.vue';
import PaginationBlockItemGapLeft from './PaginationBlockItemGapLeft.vue';
import PaginationBlockItemGapRight from './PaginationBlockItemGapRight.vue';
import PaginationBlockDynamicItems from './PaginationBlockDynamicItems.vue';

const props = defineProps({
    totalPages: {
        type: Number,
        default: 0
    }
});

const emits = defineEmits({
    setCurrentPage: null
})

const currentPage = ref(1);
const dynamicPages = reactive([]);
const dynamicPaginate = ref(false);

const setDynamicPages = () => {
    dynamicPages.length = 0;
    let i = 2;

    if (props.totalPages <= 9) {
        while (i < props.totalPages) {
            dynamicPages.push(i);
            i++;
        }
    } else {
        dynamicPaginate.value = true;
        while (i < 7) {
            dynamicPages.push(i);
            i++;
        }
    }
}

const moveDynamicPages = (selectedPage) => {
    dynamicPages.length = 0;
    
    for (let i = -2; i <= 2; i++) {
        dynamicPages.push(selectedPage + i);
    }
}

const validateDynamicPages = (selectedPage) => {
    if (dynamicPaginate.value) {
        if (selectedPage >= 4 && selectedPage <= (props.totalPages - 3)) {
            moveDynamicPages(selectedPage);
        }
    
        if (selectedPage === 1) {
            moveDynamicPages(4);
        }
    
        if (selectedPage === props.totalPages) {
            moveDynamicPages(props.totalPages - 3);
        }
    }
}

const reduceCurrentPage = (page) => {
    if (currentPage.value != 1) {
        setCurrentPage(page);
    }
}

const increaseCurrentPage = (page) => {
    if (currentPage.value != props.totalPages) {
        setCurrentPage(page);
    }
}

const setCurrentPage = (page) => {
    currentPage.value = page;
    emits('setCurrentPage', page);
    validateDynamicPages(currentPage.value);
};

watch(
    () => props.totalPages,
    () => setDynamicPages()
);

setDynamicPages();
</script>

<style lang="scss" scoped>
.pagination-block {
    &__wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
    }
}
</style>