<template>
    <div v-show="runtime && runtime !== 0" class="base-content-runtime">{{ getConvertRuntime }}</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    runtime: {
        type: [Number, String],
        default: 0
    }
})

const getConvertRuntime = computed(() => {
    const hours = Math.floor(props.runtime / 60);
    const minutes = props.runtime % 60;

    if (hours === 0) {
        return `${minutes}m`
    } 
        
    return `${Math.floor(props.runtime / 60)}h : ${props.runtime % 60}m`;

});
</script>

<style lang="scss" scoped>

</style>