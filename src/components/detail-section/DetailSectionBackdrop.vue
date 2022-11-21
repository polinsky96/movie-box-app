<template>
  <div class="detail-section-backdrop">
    <div class="detail-section-backdrop__gradient"></div>
    <img 
      :src="getImageUrl" 
      class="detail-section-backdrop__poster" 
      alt="backdrop-poster">
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import theMovieDb from '../../modules/theMovieDb/theMovieDb';
import getPallete from '../../modules/getPallete';


const props = defineProps({
  backdropPath: {
    type: String,
    default: ''
  }
})

let gradient = ref('');

const getImageUrl = computed(() => {
    return theMovieDb.common.getImage({ file: props.backdropPath, size: 'w1280' });
})

const getGradient = async (imagePath) => {
  const pallete = await getPallete(imagePath);
  const color = pallete.DarkMuted._rgb.join(',');

  gradient.value = `linear-gradient(270deg, rgba(${color}, 0.5) 0%, rgba(${color}, 1) 80%)`;
}

watch(() => props.backdropPath, () => getGradient(getImageUrl.value));
</script>

<style lang="scss" scoped>
.detail-section-backdrop {
  position: absolute;
  z-index: -1;

  width: 100%;
  height: 100%;
  
  overflow: hidden;

  background-color: black;

  &__poster {
    position: absolute;
    right: 0;

    width: 80%;
    height: 100%;

    opacity: 0.3;

    object-fit: cover;
    object-position: top;
  }

  &__gradient {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: v-bind('gradient');
  }
}
</style>