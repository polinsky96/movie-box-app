<template>
    <div class="search-result-view">
        <BaseContainer>        
            <TypeContentList 
                @set-type="switchTypeContent"
                :content-types="contentTypes"/>
            <div class="search-result-view__wrapper">
                <div class="search-result-view__column">
                    <ResultList 
                        :results="results.results || []"
                        :type-content="typeContent"
                        class="search-result-view__result-list"/>
                    <PaginationBlock
                        v-show="results.totalPages > 1" 
                        @set-current-page="getResults"
                        :total-pages="results.totalPages"/>
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

import getContentList from '../modules/interface/getContentList';
import getContentTypesList from '../modules/interface/getContentTypesList';

const route = useRoute();
const { setResponseStatus } = useResponseStatus();

const query = route.params.query;

const contentTypes = getContentTypesList();
const typeContent = ref(contentTypes.movie);
const results = ref({});

const getResults = (page = 1) => {
    setResponseStatus(async () => {
        results.value = await getContentList(typeContent.value, { query, page });
    })
}

const switchTypeContent = (type) => {
    typeContent.value = type;
    getResults();
}

getResults();
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