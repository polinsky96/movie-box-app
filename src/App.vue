<template>
  <div class="app">
    <AppHeaderBlock />
    <div class="app__wrapper">
      <BaseContainer>      
        <RouterView />
        <ErrorPage />
        <LoaderMain />
      </BaseContainer>
    </div>
  </div>
</template>

<script setup>
import BaseContainer from './components/base/BaseContainer.vue';
import ErrorPage from './components/error-page/TheErrorPage.vue';
import AppHeaderBlock from './components/header-block/TheAppHeaderBlock.vue';
import LoaderMain from './components/loader-main/TheLoaderMain.vue'
</script>

<style lang="scss" scoped>
.app__wrapper {
  position: relative;
  
  min-height: 100vh;
  padding-top: 110px;
  padding-bottom: 50px;
  background-color: $bg-color;

  @include for-size(laptop-up) {
    padding-top: 90px;
  }
}
</style>