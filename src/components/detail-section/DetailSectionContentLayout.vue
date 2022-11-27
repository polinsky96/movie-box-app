<template>
    <div class="detail-section-content-layout">
        <div class="detail-section-content-layout__wrapper">
            <h1 class="detail-section-content-layout__title">
                <slot name="title"/>
            </h1>
            <slot name="genres-list" />
            <div class="detail-section-content-layout__subtitle">
                <div class="detail-section-content-layout__rating">
                    <slot name="rating"/>
                </div>
                <div class="detail-section-content-layout__date">
                    <slot name="date"/>
                </div>
                <div class="detail-section-content-layout__runtime">
                    <slot name="runtime"/>
                </div>
            </div>
            <div class="detail-section-content-layout__tagline">
                <slot name="tagline"/>
            </div>
            <div class="detail-section-content-layout__overview">
                <h3 class="detail-section-content-layout__overview-title">Overview</h3>
                <slot name="overview" />
            </div>
            <div class="detail-section-content-layout__maker">
                <slot name="maker" />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.detail-section-content-layout {
    display: flex;
    min-height: 100%;

    &__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        @include for-size(laptop-up) {
            align-items: flex-start;
        }
    }

    &__title {
        margin-bottom: 0.3rem;
    }

    &__subtitle {
        display: flex;
        gap: 15px;
        margin-bottom: 1rem;
    }

    &__overview-title {
        margin-bottom: 1rem;
    }

    &__tagline {
        margin-bottom: 1rem;

        color: $font-subtitle-color;
    }
}
</style>