<template>
    <div
        class="type-content-list-mobile">
        <div
            @click="toggleViewList" 
            class="type-content-list-mobile__button">
            <MenuIcon />
        </div>
        <div v-show="isViewList" 
            class="type-content-list-mobile__wrapper">
            <TypeContentListItems
                @set-type="setType"
                :types-content="typesContent"
                class="type-content-list-mobile__items"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TypeContentListItems from './TypeContentListItems.vue';
import MenuIcon from '../../assets/icons/menu-icon.svg';

const props = defineProps({
    typesContent: {
        type: Object,
        default: () => {
            return {}
        }
    }
});

const isViewList = ref(false);

const toggleViewList = () => {
    isViewList.value = !isViewList.value;
}

const emits = defineEmits({
    setType: null
});

const setType = (type) => {
    toggleViewList();
    const selectedContentType = type;
    emits('setType', selectedContentType);
} 
</script>

<style lang="scss" scoped>
.type-content-list-mobile {
    width: 100%;

    &__button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 30px;
        background-color: $font-dark-color;
    }
    
    &__wrapper {
        padding: 1.25rem 0.625rem;
        
        @include card-frame;
        border: none;
    }

    &__items {
        width: 100%;
    }  
}
</style>