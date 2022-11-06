<template>
    <div 
        :class="{
            high: 7 <= score && score <= 10,
            medium: 5 <= score && score < 7,
            low: 0 < score && score < 5
        }"
        class="rating-block">
        {{ score }}
    </div>
</template>

<script setup>
const props = defineProps({
    score: {
        type: Number,
        default: 0
    }
})
</script>

<style lang="scss" scoped>
.rating-block {
    color: $font-light-color;
    font-weight: 500;

    @include for-size(laptop-up) {
        font-weight: 600;
    }
}

.high {
    color: rgb(77, 197, 77);
}

.medium {
    color: rgb(255, 247, 0);
}

.low {
    color: rgb(230, 48, 48);
}
</style>