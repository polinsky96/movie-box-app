<template>
    <div class="sign-in">
        <h3 class="sign-in__title">Sign in for an account</h3>
        <FormAuthentication @update-submit="handleSignUp">
            <template #inputs>
                <InputAuthentication
                    v-model="email" 
                    type="text"
                    id="email"
                    label="Email"
                    placeholder="Enter email"
                    class="sign-in__input"/>
                <InputAuthentication
                    v-model="password" 
                    type="password"
                    id="passsword"
                    label="Passsword"
                    placeholder="Enter passsword"
                    class="sign-in__input"/>
            </template>
        </FormAuthentication>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import InputAuthentication from '../input-authentication/InputAuthentication.vue';
import FormAuthentication from '../form-authentication/FormAuthentication.vue';
import SignIn from "../modules/supabase/SignIn"

const email = ref('');
const password = ref('');

const handleSignUp = () => {
    SignIn(email.value, password.value)
}
</script>
  
<style lang="scss" scoped>
.sign-in {
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