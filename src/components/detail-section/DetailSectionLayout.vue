<template>
    <section class="detail-section-layout">
        <div class="detail-section-layout__wrapper">
            <BaseImage 
                class="detail-section-layout__poster"
                :image-path="posterPath" />
            <div class="detail-section-layout__content">
                <slot name="content" />
            </div>
        </div>
    </section>
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
.detail-section-layout {
    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        @include for-size(tablet-up) {
            padding: 1.875rem 2.5rem;
            flex-direction: row;
            align-items: flex-start;
        }
    }

    &__poster {
        min-width: 300px;
        max-width: 300px;
        margin-right: 0.9375rem;

        border-radius: $card-border-radius;
    }
    
    &__content {
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 100%;
    }
}
</style>