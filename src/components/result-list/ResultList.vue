<template>
    <div class="result-list">
        <div class="result-list__wrapper">
            <div v-if="isEmptyResults" class="result-list__items">
                <h3 class="result-list__empty">Not results</h3>
            </div>
            <div v-if="typeContent === 'movie'" class="result-list__items">
                <ResultListItemMovie 
                    v-for="(result, idx) in results"
                    :key="idx"
                    :details="result"/>
            </div>
            <div v-if="typeContent === 'tv'" class="result-list__items">
                <ResultListItemTv 
                    v-for="(result, idx) in results"
                    :key="idx"
                    :details="result"/>
            </div>
            <div v-if="typeContent === 'person'" class="result-list__items">
                <ResultListItemPerson
                    v-for="(result, idx) in results"
                    :key="idx"
                    :details="result"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import ResultListItemMovie from './ResultListItemMovie.vue';
import ResultListItemTv from './ResultListItemTv.vue';
import ResultListItemPerson from './ResultListItemPerson.vue';

const props = defineProps({
    results: {
        type: Array,
        default: () => {
            return []
        }
    },

    typeContent: {
        type: String,
        default: 'movie'
    }
})

const isEmptyResults = computed(() => {
    if (props.results.length === 0) {
        return true
    }

    return false
})
</script>

<style lang="scss" scoped>
.result-list {
    width: 100%;

    &__items {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__empty {
        padding: 3rem;
        text-align: center;
    }
}
</style>