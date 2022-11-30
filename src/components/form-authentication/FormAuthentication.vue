<template>
  <div class="form-authentication">
    <div class="form-authentication__wrapper">
      <form 
        @submit.prevent="emits('updateSubmit')"
        class="form-authentication__form">
        <div class="form-authentication__inputs">
          <slot name="inputs" />
        </div>
          <button 
            type="submit"
            class="form-authentication__button">
              <slot name="button-text">Submit</slot>
          </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits({
    updateSubmit: null
})
</script>

<style lang="scss" scoped>
.form-authentication {
  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__inputs {
    padding: 0.625rem 0;
  }

  &__button {
    @include reset-style-button;

    padding: 10px 5px;

    font-weight: bold;

    background-color: $accent-color;

    border-radius: $card-border-radius;

    &:hover {
      background-color: $accent-color-hover;
    }
  }
}
</style>