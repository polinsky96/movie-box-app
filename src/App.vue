<template>
  <div class="app">
    <AppHeaderBlock />
    <div class="app__wrapper">
      <RouterView />
      <ErrorPage />
    </div>
  </div>
</template>

<script setup>
import ErrorPage from './components/error-page/TheErrorPage.vue';
import AppHeaderBlock from './components/header-block/TheAppHeaderBlock.vue';
</script>

<style lang="scss" scoped>
.app__wrapper {
  position: relative;
  
  min-height: 100vh;
  padding-top: 110px;
  background-color: $bg-color;

  @include for-size(laptop-up) {
    padding-top: 90px;
  }
}
</style>