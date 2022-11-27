<template>
    <div class="detail-section-content-layout-person">
        <div class="detail-section-content-layout-person__wrapper">
            <h1 class="detail-section-content-layout-person__name">
                <slot name="name"/>
            </h1>
            <div class="detail-section-content-layout-person__overview">
                <h3 class="detail-section-content-layout-person__overview-title">Biography</h3>
                <slot name="biography" />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.detail-section-content-layout-person {
    &__name {
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
}
</style>