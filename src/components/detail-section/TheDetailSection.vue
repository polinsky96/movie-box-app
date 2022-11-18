<template>
    <section class="detail-section">
        <div class="detail-section__wrapper">
            <div class="detail-section__poster">
                <BaseImage />
            </div>
            <div class="detail-section__right-column">
                <div class="detail-section__title">
                    <slot name="title"/>
                </div>
                <div class="detail-section__content">
                    <slot name="content" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import BaseImage from '../base/BaseImage.vue';
</script>

<style lang="scss" scoped>
.detail-section {
    &__wrapper {
        display: flex;
    }

    &__poster {
        width: 200px;
        margin-right: 0.9375rem;
    }

    &__right-column {
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
    }

    &__content {
        width: 100%;
        height: 100%;
        background-color: black;
    }
}
</style>