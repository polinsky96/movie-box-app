<template>
    <section class="detail-section-layout">
        <div class="detail-section-layout__wrapper">
            <div class="detail-section-layout__poster">
                <BaseImage 
                    :image-path="posterPath" 
                    image-size="w500"/>
            </div>
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

        background-color: $main-color;
        
        @include for-size(tablet-up) {
            padding: 1.875rem 2.5rem;
            flex-direction: row;
            align-items: center;
        }
    }

    &__poster {
        min-width: 300px;
        max-width: 300px;
        height: 450px;
        margin-right: 2.5rem;

        border-radius: $card-border-radius;
        overflow: hidden;
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