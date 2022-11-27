<template>
    <div class="header-block-logo">
        <div v-if="isMobile || isTablet" class="header-block-logo logo--mobile">
            <p>MB</p>
        </div>
        <div v-else class="header-block-logo logo--desktop">
            <p>MOVIE BOX</p>
        </div>
    </div>
</template>

<script setup>
import { useTypeDevices } from '../../modules/useTypeDevice';

const { isMobile, isTablet } = useTypeDevices();
</script>

<style lang="scss" scoped>
.header-block-logo {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>