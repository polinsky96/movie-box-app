<template>
    <button
        v-if="viewButton"
        @click="clickButton"
        class="pagination-block-button">
        <slot />
    </button>
</template>

<script setup>
import { computed } from 'vue';
import { useTypeDevices } from '../../modules/useTypeDevice';

const emits = defineEmits({
    clickButton: null
})

const clickButton = () => {
    emits('clickButton');
}

const { isMobile } = useTypeDevices();

const viewButton = computed(() => {
    return !isMobile.value;
});
</script>

<style lang="scss" scoped>
.pagination-block-button {
    background-color: transparent;
    border: none;

    color: $font-light-color;

    cursor: pointer;
}
</style>