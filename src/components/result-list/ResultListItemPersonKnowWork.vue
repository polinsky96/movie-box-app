<template>
    <div class="result-list-item-person-know-work">
        <div class="result-list-item-person-know-work__wrapper">
            <div class="result-list-item-person-know-work__item"
                v-for="(item, idx) in knownList"
                :key="idx">
                    <router-link class="result-list-item-person-know-work__link" to="#">
                        <div class="result-list-item-person-know-work__title">
                            {{item.title}}
                        </div>
                    </router-link>
                    <div class="result-list-item-person-know-work__separator">
                        {{ (knownList.length - 1) != idx ? ',' : '' }}
                    </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    knownList: {
        type: Array,
        default: () => {
            return []
        }
    }
});
</script>

<style lang="scss" scoped>
.result-list-item-person-know-work {
    font-size: 14px;

    &__wrapper {
        display: flex;
        flex-wrap: wrap;
    }
    
    &__item {
        margin-right: 5px;

        @include overflow-text-for-columns(1);
    }
    
    &__link {
        text-decoration: none;
    }
    
    &__title {
        display: inline;

        &:hover {
            color: $accent-color-hover;
        }
    }
    
    &__separator {
        display: inline;
    }
}
</style>