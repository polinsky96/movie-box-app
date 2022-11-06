<template>
    <div class="search-result-view">
        <div class="container">
            <TypeContentList @set-type="switchTypeContent"/>
            <div class="search-result-view__wrapper">
                <div class="search-result-view__column">
                    <ResultList 
                        :results="resultsData.results || []"
                        :type-content="typeContent"
                        class="search-result-view__result-list"/>
                    <PaginationBlock
                        v-show="resultsData.totalPages > 1" 
                        @set-current-page="getResultData"
                        :total-pages="resultsData.totalPages"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useResponseStatus } from '../modules/useResponseStatus';

import ResultList from '../components/result-list/ResultList.vue';
import TypeContentList from '../components/type-content-list/TheTypeContentList.vue';
import PaginationBlock from '../components/pagination-block/ThePaginationBlock.vue';

import theMovieDb from '../modules/theMovieDb/theMovieDb';

const route = useRoute();
const { setResponseStatus } = useResponseStatus();

const typeContent = ref(theMovieDb.typeContent.movie);
const resultsData = reactive({
    page: null,
    results: null,
    totalPages: null,
    totalResults: null
});

const query = route.params.query;

const getResultData = (page = 1) => {
    setResponseStatus(theMovieDb.search.searchContentSelectType(
        typeContent.value,
        { 
            query: query, 
            page: page
        },
        (response) => {
            const { page, results, total_pages, total_results } = response;
    
            resultsData.page = page;
            resultsData.results = results;
            resultsData.totalPages = total_pages;
            resultsData.totalResults = total_results;
        })
    );  
}

const switchTypeContent = (type) => {
    typeContent.value = type;
    getResultData();
}

getResultData();
</script>

<style lang="scss" scoped>
.search-result-view {
    .container {
        padding: 0 1rem;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
    }

    &__column {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
    
        @include for-size(laptop-up) {
            margin-left: 250px;
        }
    }

    &__result-list {
        margin-bottom: 2rem;
    }
}
</style>