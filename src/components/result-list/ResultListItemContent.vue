<template>
    <div class="result-list-item-content">
        <h3 class="result-list-item-content__title">
            <slot name="title" />
        </h3>
        <div class="result-list-item-content__subtitle-block">
            <slot name="subtitle-block" />
        </div>
        <p class="result-list-item-content__overview">
            <slot name="overview" />
        </p>
    </div>
</template>

<style lang="scss" scoped>
.result-list-item-content {
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