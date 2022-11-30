<template>
  <div class="app">
    <AppHeaderBlock />
    <div class="app__wrapper">
      <button v-if="store.isUser" @click="signOut">Sign Out</button>
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

defineProps({
  msg: String,
});

const store = useAuthSupabase();
const router = useRouter();

supabase.auth.onAuthStateChange((event, session) => {
  if (event == "SIGNED_OUT") {
    store.setUser(null);
  } else {
    store.setUser(session.user);
  }
});

async function signOut() {
  const { error } = await supabase.auth.signOut();
}

async function checkLoginUser() {
  const user = await supabase.auth.getUser();

  if (user.data.user) {
    store.setUser(user);
  }
}

checkLoginUser();

router.beforeEach(async (to, from) => {
  if (to.name == 'user') {
    console.log('user are not login');
    return false
  }
})
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