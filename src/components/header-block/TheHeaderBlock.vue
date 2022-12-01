<template>
  <header class="header-block">
    <div class="header-block__logo">
      <router-link to="/" class="header-block__logo-link">
        <HeaderLogo />
      </router-link>
    </div>
    <nav class="header-block__navigation">
      <ButtonProfile />
      <ButtonSignOut v-show="store.isUser"/>
    </nav>
  </header>
</template>

<script setup>
import HeaderLogo from './TheHeaderLogo.vue';
import ButtonProfile from '../button-profile/ButtonProfile.vue';
import ButtonSignOut from '../button-sign-out/ButtonSignOut.vue';

import useAuthSupabase from '../../stores/authSupabase';

const store = useAuthSupabase();
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

  &__navigation {
    display: flex;
    gap: 1.5rem;
  }
}
</style>