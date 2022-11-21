<template>
    <div class="detail-section-content-layout">
        <div class="detail-section-content-layout__wrapper">
            <h3 class="detail-section-content-layout__title">
                <slot name="title"/>
            </h3>
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
    &__subtitle {
        display: flex;
        gap: 15px;
    }
}
</style>