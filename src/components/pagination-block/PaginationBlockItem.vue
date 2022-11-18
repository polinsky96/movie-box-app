<template>
    <div 
        @click="setCurrentPage"
        :class="{'pagination-block-item_select--item': value == currentPage}"
        class="pagination-block-item">
        <div class="pagination-block-item__value">
            {{ value }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    value: {
        type: [Number, String],
        default: ''
    },
    
    currentPage: {
        type: Number,
        default: 0
    }
});

const emits = defineEmits({
    setCurrentPage: null
})

const setCurrentPage = () => {
    emits('setCurrentPage', props.value);
}
</script>

<style lang="scss" scoped>
.pagination-block-item {
    display: inline-block;
    padding: 0.125rem 0.375rem;

    // color: $font-light-color;
    cursor: pointer;

    &__value {    
        @include for-size(laptop-up) {
            &:hover {
                color: $accent-color-hover;
            }
        }
    }

    &_select--item {
        background-color: $accent-color;
        border-radius: $card-border-radius;
    }
}
</style>