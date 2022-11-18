<template>
    <section class="result-list">
        <div class="result-list__wrapper">
            <div v-if="isEmptyResults" class="result-list__items">
                <h3 class="result-list__empty">Not results</h3>
            </div>
            <div 
                v-if="typeContent === 'movie' || typeContent === 'tv'" 
                class="result-list__items">
                    <router-link 
                        v-for="(result, idx) in results"
                        :key="idx"
                        :to="{ name: typeContent, params: { id: result.id }}"
                        class="result-list__link">
                            <ResultListMainItem :details="result"/>
                    </router-link>
            </div>
            <div 
                v-if="typeContent === 'person'" 
                class="result-list__items">
                    <router-link 
                        v-for="(result, idx) in results"
                        :key="idx"
                        :to="{ name: typeContent, params: { id: result.id }}"
                        class="result-list__link">
                            <ResultListPersonItem :details="result"/>
                    </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import ResultListMainItem from './ResultListMainItem.vue';
import ResultListPersonItem from './ResultListPersonItem.vue';

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

    &__link {
        text-decoration: none;
    }
}
</style>