<template>
  <header class="header-block">
    <div class="header-block__logo">
      <router-link to="/" class="header-block__logo-link">
        <HeaderLogo />
      </router-link>
    </div>
    <router-link :to="{ name: 'profile', params: { id: 123 }}">
      <button>Profile</button>
    </router-link>
    <button @click="signOut">Sign Out</button>
  </header>
</template>

<script setup>
import HeaderLogo from './TheHeaderLogo.vue';
import { supabase } from "../../supabase";

async function signOut() {
  console.log('log out');
  const { error } = await supabase.auth.signOut();
}
</script>

<style lang="scss" scoped>
.header-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 1rem;

  background-color: $accent-color;

  transition: 0.3s ease all;
  transition-delay: 0.3s;

  &__logo-link {
    text-decoration: none;
  }
}

button {
  color: black;
}
</style>