<template>
  <div class="sign-up">
    <h3 class="sign-up__title">Sign up for an account</h3>
    <FormAuthentication @update-submit="handleSignUp">
      <template #inputs>
        <InputAuthentication
          v-model="username" 
          type="text"
          id="username"
          label="Username"
          placeholder="Enter username"
          class="sign-up__input"/>
        <InputAuthentication
          v-model="email" 
          type="text"
          id="email"
          label="Email"
          placeholder="Enter email"
          class="sign-up__input"/>
        <InputAuthentication
          v-model="password" 
          type="password"
          id="passsword"
          label="Passsword"
          placeholder="Enter passsword"
          class="sign-up__input"/>
      </template>
    </FormAuthentication>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputAuthentication from '../input-authentication/InputAuthentication.vue';
import FormAuthentication from '../form-authentication/FormAuthentication.vue';
import SignUp from "../modules/supabase/SignUp"

const username = ref('');
const email = ref('');
const password = ref('');

const handleSignUp = () => {
    SignUp(email.value, password.value)
}
</script>

<style lang="scss" scoped>
.sign-up {
  min-width: 300px;
  max-width: 350px;
  padding: 1.25rem 0.625rem;

  @include card-frame;

  &__title {
    margin-bottom: 1rem;

    text-align: center;
  }

  &__input {
    margin-bottom: 1rem;
  }
}
</style>