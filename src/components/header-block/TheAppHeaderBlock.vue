<template>
        <HeaderBlock 
            :class="{
                'app-header-block--hidden': hiddenElement
            }"
            class="app-header-block"/>
</template>

<script setup>
import HeaderBlock from './TheHeaderBlock.vue';
import { useScrollHideElement } from '../../modules/useScrollHideElement';

const { hiddenElement } = useScrollHideElement(70);
</script>

<style lang="scss" scoped>
.app-header-block {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    
    &--hidden {
      top: -70px;
    }
}
</style>