<template>
    <div class="result-list-item-layout">
        <div class="result-list-item-layout__wrapper">
            <div class="result-list-item-layout__poster">
                <BaseImage :image-path="posterPath" image-size="w154" />
            </div>
            <div class="result-list-item-layout__content">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseImage from '../base/BaseImage.vue';

const props = defineProps({
    posterPath: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.result-list-item-layout {
    position: relative;

    max-height: 150px;

    @include card-frame;
    @include card-box-shadow;

    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    transition: 0.3s all ease;

    @include for-size(laptop-up) {
        &:hover {
            @include accent-border;
        }
    }

    &__wrapper {
        display: flex;
    }

    &__poster {
        flex: 0 0 100px;
        height: 150px;
        margin-right: 0.9375rem;
    }

    &__content {
        padding: 0.9375rem;
        padding-left: 0;
    }
}
</style>