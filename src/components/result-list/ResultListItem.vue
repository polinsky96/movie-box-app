<template>
    <div class="result-list-item">
        <div class="result-list-item__wrapper">
            <div class="result-list-item__poster">
                <slot name="poster" />
            </div>
            <div class="result-list-item__content">
                <h3 class="result-list-item__title">
                    <slot name="title" />
                </h3>
                <div class="result-list-item__row-two">
                    <div class="result-list-item__vote-average">
                        <slot name="vote-average" />
                    </div>
                    <div class="result-list-item__data">
                        <slot name="release-data" />
    
                    </div>  
                </div>
                <p class="result-list-item__overview">
                    <slot name="overview" />
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.result-list-item {
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
        min-width: 100px;
        max-width: 100px;
        margin-right: 0.9375rem;
    }

    &__content {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0.625rem;
        padding-left: 0;
    }

    &__title {
        margin-bottom: 0.75rem;

        @include overflow-text-for-columns(2);
    }
    
    &__row-two {
        display: flex;
        margin-bottom: 0.55rem;
    }

    &__data {
        color: #c5c5c5;
    }
    
    &__vote-average {
        margin-right: 20px;

        color: rgb(77, 197, 77);
        font-weight: 500;

        @include for-size(laptop-up) {
            font-weight: 600;
        }
    }

    &__overview {
        @include overflow-text-for-columns(3);
        
        @include for-size(phone-only) {
            @include overflow-text-for-columns(2);
        }
    }

}
</style>