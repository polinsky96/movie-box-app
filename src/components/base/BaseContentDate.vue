<template>
    <div class="base-content-date">{{ getDate }}</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    date: {
        type: String,
        default: ''
    },

    alsoYear: {
        type: Boolean,
        default: false
    }
});

const getDate = computed(() => {
    const formatDate = props.date.split('-').reverse();
    
    if (props.alsoYear) {
        return formatDate[2]
    }

    return formatDate.join('.')
});
</script>

<style lang="scss" scoped>
.base-content-date {
    color: $font-subtitle-color;
}
</style>