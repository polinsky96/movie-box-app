<template>
  <div class="app">
    <AppHeaderBlock />
    <div class="app__wrapper">
      <RouterView />
      <ErrorPage />
      <LoaderMain />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import AppHeaderBlock from './components/header-block/TheAppHeaderBlock.vue';
import LoaderMain from './components/loader-main/TheLoaderMain.vue'
import ErrorPage from './components/error-page/TheErrorPage.vue';

import useAuthSupabase from './stores/authSupabase'
import { supabase } from "./supabase.js";

const store = useAuthSupabase();
const router = useRouter();

supabase.auth.onAuthStateChange((event, session) => {
  if (event == "SIGNED_OUT") {
    store.setUser(null);
  } else {
    store.setUser(session.user);
  }
});

async function checkLoginUser() {
  const user = await supabase.auth.getUser();

  if (user.data.user) {
    store.setUser(user);
  }
}

router.beforeEach(async (to, from) => {
  if (to.name == 'profile') {
    if (!store.isUser) {
      return { name: 'auth' }
    }
  }
})

checkLoginUser();
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

button {
  color: black;
}
</style>