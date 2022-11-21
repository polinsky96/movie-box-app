<template>
    <div class="search-result-view">
        <BaseContainer>        
            <TypeContentList @set-type="switchTypeContent"/>
            <div class="search-result-view__wrapper">
                <div class="search-result-view__column">
                    <ResultList 
                        :results="resultsData.results || []"
                        :type-content="typeContent"
                        class="search-result-view__result-list"/>
                    <PaginationBlock
                        v-show="resultsData.total_pages > 1" 
                        @set-current-page="getResultData"
                        :total-pages="resultsData.total_pages"/>
                </div>
            </div>
        </BaseContainer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useResponseStatus } from '../modules/useResponseStatus';

import BaseContainer from '../components/base/BaseContainer.vue';

import ResultList from '../components/result-list/TheResultList.vue';
import TypeContentList from '../components/type-content-list/TheTypeContentList.vue';
import PaginationBlock from '../components/pagination-block/ThePaginationBlock.vue';

import theMovieDb from '../modules/theMovieDb/theMovieDb';

const route = useRoute();
const { setResponseStatus } = useResponseStatus();

const typeContent = ref(theMovieDb.typeContent.movie);
const resultsData = ref({});

const query = route.params.query;

const getResultData = (page = 1) => {
    setResponseStatus(theMovieDb.search.searchContentSelectType(
        typeContent.value,
        { 
            query: query, 
            page: page
        },
        (response) => {
            resultsData.value = response;
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