<template>
    <div class="result-list-item-content-subtitle">
        <div class="result-list-item-content-subtitle__wrapper">
            <div class="result-list-item-content-subtitle__vote-average">
                <slot name="vote-average" />
            </div>
            <div class="result-list-item-content-subtitle__data">
                <slot name="release-data" />
            </div>  
        </div>
    </div>
</template>

<style lang="scss" scoped>
.result-list-item-content-subtitle {
    &__wrapper {
        display: flex;
        margin-bottom: 0.55rem;
    }
    
    &__vote-average {
        margin-right: 0.9375rem;
    }
}
</style>