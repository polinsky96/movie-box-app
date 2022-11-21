<template>
    <div class="base-content-title">{{ title }}</div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    }
});
</script> 