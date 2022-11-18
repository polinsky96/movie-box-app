<template>
    <div class="result-list-item-content-layout">
        <h3 class="result-list-item-content-layout__title">
            <slot name="title" />
        </h3>
        <div class="result-list-item-content-layout__subtitle-block">
            <slot name="subtitle-block" />
        </div>
        <p class="result-list-item-content-layout__overview">
            <slot name="overview" />
        </p>
    </div>
</template>

<style lang="scss" scoped>
.result-list-item-content-layout {
    &__title {
        margin-bottom: 0.3125rem;
        
        @include overflow-text-for-columns(1);
    }

    &__overview {
        @include overflow-text-for-columns(3);
        
        @include for-size(phone-only) {
            @include overflow-text-for-columns(2);
        }
    }

}
</style>