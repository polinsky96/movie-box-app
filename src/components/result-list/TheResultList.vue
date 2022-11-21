<template>
    <section class="result-list">
        <div class="result-list__wrapper">
            <div v-if="isEmptyResults" class="result-list__items">
                <h3 class="result-list__empty">Not results</h3>
            </div>
            <div 
                v-if="results.type === 'movie' || results.type === 'tv'" 
                class="result-list__items">
                    <router-link 
                        v-for="(result, idx) in results.results"
                        :key="idx"
                        :to="{ name: results.type, params: { id: result.id }}"
                        class="result-list__link">
                            <ResultListMainItem :details="result"/>
                    </router-link>
            </div>
            <div 
                v-if="results.type === 'person'" 
                class="result-list__items">
                    <router-link 
                        v-for="(result, idx) in results.results"
                        :key="idx"
                        :to="{ name: results.type, params: { id: result.id }}"
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
        type: Object,
        default: () => {
            return {}
        }
    }
})

const isEmptyResults = computed(() => {
    return props.results.results && props.results.results.length === 0
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