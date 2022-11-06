<template>
  <img 
    :src="getImageUrl" 
    :alt="alt"
    @error="getDefaultImage"
    class="base-image">
</template>

<script setup>
import { computed } from 'vue';
import theMovieDb from '../../modules/theMovieDb/theMovieDb';

const props = defineProps({
    imagePath: {
        type: String,
        default: ''
    },

    alt: {
        type: String,
        default: 'poster'
    },

    defaultImageSize: {
        type: String,
        default: '200x300'
    },

    defaultImageText: {
        type: String,
        default: 'Image+error'
    }
})

const getImageUrl = computed(() => {
    return theMovieDb.common.getImage({ file: props.imagePath });
})

const getDefaultImage = (event) => {
    //this use placeholder.com. To learn more: https://placeholder.com/
    event.target.src = `https://via.placeholder.com/${props.defaultImageSize}?text=${props.defaultImageText}`;
}

</script>

<style lang="scss" scoped>
.base-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>