<template>
    <TypeContentListItems
        v-if="!isMobile && !isTablet" 
        @set-type="setType"
        :types-content="contentTypes"
        :class="{
            'hidden': hiddenElement
        }" 
        class="type-content-list__type-content-list-items"/>
    <TypeContentListMobile 
        v-else
        @set-type="setType"
        :types-content="contentTypes"
        :class="{
            'hidden--mobile': hiddenElement
        }" 
        class="type-content-list__type-content-list-mobile"/>
</template>

<script setup>
import TypeContentListItems from './TypeContentListItems.vue';
import TypeContentListMobile from './TypeContentListMobile.vue';

import { useScrollHideElement } from '../../modules/useScrollHideElement';
import { useTypeDevices } from '../../modules/useTypeDevice';

const props = defineProps({
    contentTypes: {
        type: Object,
        default: () => {
            return {}
        }
    }
})

const emits = defineEmits({
    setType: null
})

const setType = (type) => {
    const selectedContentType = type;
    emits('setType', selectedContentType);
} 

const { hiddenElement } = useScrollHideElement(70);
const { isMobile, isTablet } = useTypeDevices();
</script>

<style lang="scss" scoped>
.type-content-list {
    &__type-content-list-items {
        position: fixed;
        top: 90px;
        left: 16px;
        z-index: 99;
    
        width: 230px;

        transition: 0.3s ease all;
        transition-delay: 0.3s;
    }

    &__type-content-list-mobile {
        position: fixed;
        top: 70px;
        left: 0;
        z-index: 99;

        transition: 0.3s ease all;
        transition-delay: 0.3s;
    }
}

.hidden {
    top: 10px;
}
.hidden--mobile {
    top: 0;
}
</style>