<template>
  <div
    v-show="storeLoader.status"
    class="loader-main">
    <LoaderAnimate class="loader-main__svg"/>
  </div>
</template>

<script setup>
import LoaderAnimate from '../../assets/icons/loader-animate.svg'
import { useLoaderStatus } from '../../stores/loaderStatus';

const storeLoader = useLoaderStatus(); 
</script>

<style lang="scss" scoped>
.loader-main {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    background-color: $bg-color;

    &__svg {
      width: 150px;
    }
}
</style>