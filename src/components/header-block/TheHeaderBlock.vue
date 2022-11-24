<template>
  <header class="header-block">
    <div class="header-block__logo-wrapper">
      <div v-if="isMobile || isTablet" class="header-block__logo logo--mobile">
        <p>MB</p>
      </div>
      <div v-else class="header-block__logo logo--desktop">
        <p>MOVIE BOX</p>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useTypeDevices } from '../../modules/useTypeDevice';

const { isMobile, isTablet } = useTypeDevices();
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

  &__logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>