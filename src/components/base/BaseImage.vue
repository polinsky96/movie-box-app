<template>
    <div class="base-image">
        <div v-show="imageError" class="base-image__error">
            <ImageError class="base-image__error-icon"/>
        </div>
        <div v-show="!imageLoaded" class="base-image__loader"></div>
        <img 
          :src="getImageUrl" 
          :alt="alt"
          @load="onImgLoad"
          @error="onImgError"
          class="base-image__image">
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import theMovieDb from '../../modules/theMovieDb/theMovieDb';

import ImageError from '../../assets/icons/image-error.svg'

const props = defineProps({
    imagePath: {
        type: String,
        default: ''
    },

    alt: {
        type: String,
        default: 'poster'
    },

    imageSize: {
        type: String,
        default: 'w300'
    }
})

const imageLoaded = ref(false);
const imageError = ref(false);

const onImgLoad = () => {
    imageLoaded.value = true;
}

const onImgError = () => {
    imageError.value = true;
}

const getImageUrl = computed(() => {
    return theMovieDb.common.getImage({ file: props.imagePath, size: props.imageSize });
})

watch(
    () => props.imagePath, 
    () => {
        imageLoaded.value = false;
        imageError.value = false;
    }
);
</script>

<style lang="scss" scoped>
.base-image {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    &__loader, &__error {
        width: 100%;
        height: 100%;
    }

    &__error {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: $font-subtitle-color;

        &-icon {
            max-width: 70%;
        }
    }

    &__loader {
    position: relative;
    background-color: #566ed7;

    overflow: hidden;

        &::after {
            content: '';

            position: absolute;

            width: 50%;
            height: 100%;


            animation-name: loader;
            animation-duration: 0.6s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;

            background: linear-gradient(270deg, rgba(0,0,0,0) 0%, 
                rgba(103,129,247,1) 50%, 
                rgba(0,0,0,0) 100%);
        }
    }
}

@keyframes loader {
  from {left: -50%;}
  to {left: 100%;}
}
</style>