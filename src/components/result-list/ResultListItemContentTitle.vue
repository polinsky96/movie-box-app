<template>
    <div class="result-list-item-content-title">
        {{ getTitle }}
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

const getTitle = computed(() => {
    const fieldTitleList = ['original_title', 'original_name', 'name'];
    let currentField;

    fieldTitleList.forEach( field => {
        if (field in props.details) {
            currentField = field;
        }
    });

    return props.details[currentField];
});
</script>