<template>
    <div class="result-list-item-date">
        {{ getDate }}
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    details: {
        type: Object,
        default: () => {
            return {}
        }
    }
});

const getDate = computed(() => {
    return props.details.release_date || props.details.first_air_date;
});
</script>

<style lang="scss" scoped>
.result-list-item-date {
    color: $font-subtitle-color;
}
</style>