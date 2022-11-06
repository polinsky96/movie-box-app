<template>
    <div
        class="type-content-list-items">
        <h3 class="type-content-list-items__title">Search results:</h3>
        <ul class="type-content-list-items__items">
            <li 
                v-for="(type, idx) in typesContent"
                @click="setType"
                :key="idx" 
                class="type-content-list-items__item">
                {{type}}
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    typesContent: {
        type: Object,
        default: () => {
            return {}
        }
    }
});

const emits = defineEmits({
    setType: null
});

const setType = (event) => {
    const selectedContentType = event.target.innerHTML;
    emits('setType', selectedContentType);
} 
</script>

<style lang="scss" scoped>
.type-content-list-items {
    padding: 1.25rem 0.625rem;

    @include card-frame;
    border: none;

    &__title {
        margin-bottom: 1rem;

        font-weight: 600;
        text-align: center;
    }

    &__items {
        margin: 0;
    }
    
    &__item {
        padding: 0.625rem;
        margin-bottom: 0.625rem;
        
        @include accent-border;
        border-radius: $card-border-radius;
        list-style-type: none;
        cursor: pointer;

        &:last-child {
            margin: 0;
        }
    }
}
</style>