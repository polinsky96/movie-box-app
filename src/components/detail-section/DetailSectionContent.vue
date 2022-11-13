<template>
    <div class="detail-section-content">
        <div class="detail-section-content__wrapper">
            <div class="detail-section-content__subtitle">
                <div class="detail-section-content__rating">
                    <slot name="rating"/>
                </div>
                <div class="detail-section-content__date">
                    <slot name="date"/>
                </div>
                <div class="detail-section-content__runtime">
                    <slot name="runtime"/>
                </div>
            </div>
            <div class="detail-section-content__tagline">
                <slot name="tagline"/>
            </div>
            <div class="detail-section-content__overview">
                <slot name="overview" />
            </div>
            <div class="detail-section-content__maker">
                <slot name="maker" />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.detail-section-content {
    &__subtitle {
        display: flex;
        gap: 15px;
    }
}
</style>