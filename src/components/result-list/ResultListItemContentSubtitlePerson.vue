<template>
    <div class="result-list-item-content-subtitle-person">
        <div class="result-list-item-content-subtitle-person__wrapper">
            <div class="result-list-item-content-subtitle-person__occupation">
                <slot name="occupation" />
            </div>
            <div class="result-list-item-content-subtitle-person__known-for">
                <slot name="known-for" />
            </div>  
        </div>
    </div>
</template>

<style lang="scss" scoped>
.result-list-item-content-subtitle-person {
    &__wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.55rem;
    }

    &__occupation {
        color: $font-subtitle-color;
        margin-bottom: 0.55rem;
    }
}
</style>