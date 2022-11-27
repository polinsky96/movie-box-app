<template>
  <header class="header-block">
    <div class="header-block__logo">
      <router-link to="/" class="header-block__logo-link">
        <HeaderLogo />
      </router-link>
    </div>
  </header>
</template>

<script setup>
import HeaderLogo from './TheHeaderLogo.vue';
</script>

<style lang="scss" scoped>
.header-block {
  display: flex;
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
</style>