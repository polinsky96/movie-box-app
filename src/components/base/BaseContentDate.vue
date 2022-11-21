<template>
    <div class="base-content-date">{{ getDate }}</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    details: {
        type: Object,
        default: () => {
            return {}
        }
    },

    alsoYear: {
        type: Boolean,
        default: false
    }
});

const getDate = computed(() => {
    const date = props.details.release_date || props.details.first_air_date || '-';
    const formatDate = date.split('-').reverse();
    
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