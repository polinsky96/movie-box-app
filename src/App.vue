<template>
  <div class="app">
    <AppHeaderBlock />
    <div class="app__wrapper">
      <!-- <Auth v-if="!store.state.user" />
      <div v-else class="hello">hello</div>
      <button @click="signOut">Sign Out</button> -->
      <RouterView />
      <ErrorPage />
      <LoaderMain />
    </div>
  </div>
</template>

<script setup>
import ErrorPage from './components/error-page/TheErrorPage.vue';
import AppHeaderBlock from './components/header-block/TheAppHeaderBlock.vue';
import LoaderMain from './components/loader-main/TheLoaderMain.vue'
// import Auth from "./components/AuthView.vue";

import { store } from "./store.js";
import { supabase } from "./supabase.js";

defineProps({
  msg: String,
});

store.state.user = supabase.auth.getUser();
// we then set up a listener to update the store when the user changes either by logging in or out
supabase.auth.onAuthStateChange((event, session) => {
  if (event == "SIGNED_OUT") {
    store.state.user = null;
  } else {
    store.state.user = session.user;
  }
});

// async function signOut() {
//   const { error } = await supabase.auth.signOut();
// }
</script>

<style lang="scss" scoped>
.app__wrapper {
  position: relative;

  min-height: 100vh;
  padding-top: 4.375rem;
  padding-bottom: 3.125rem;
  background-color: $bg-color;

  @include for-size(laptop-up) {
    padding-top: 5.625rem;
  }
}
</style>