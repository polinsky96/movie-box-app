<template>
    <div class="sign-in">
        <h3 class="sign-in__title">Sign in to your account</h3>
        <VeeForm
          v-slot="{ handleSubmit }"
          :validation-schema="schema"
          as="div">
            <FormAuthentication @submit="handleSubmit($event, submitOn)">
                <template #inputs>

                    <InputAuthentication
                      name="email"
                      type="text"
                      label="Email"
                      placeholder="Your Email"
                      class="sign-in__input" />

                    <InputAuthentication
                      name="password"
                      type="password"
                      label="Password"
                      placeholder="Your password"
                      class="sign-in__input" />

                </template>
                <template #button-text>Submit</template>
            </FormAuthentication>
        </VeeForm>
    </div>
</template>

<script setup>
import FormAuthentication from '../form-authentication/FormAuthentication.vue';
import InputAuthentication from '../input-authentication/InputAuthentication.vue';

import { Form as VeeForm } from 'vee-validate';
import { object, string } from 'yup';
import SignIn from '../../modules/supabase/SignIn';

const schema = object({
    username: string().required().trim(),
    email: string().required().email(),
    password: string().required().min(8).max(25)
});

const submitOn = async (values) => {
    try {
        await SignIn(values.email, values.password);

    } catch (error) {
        console.log(error.message);
    }
}
</script>

<style lang="scss" scoped>
.sign-in {
    min-width: 320px;
    max-width: 380px;
    padding: 1.25rem 0.625rem;

    @include card-frame;

    &__title {
        margin-bottom: 1rem;

        text-align: center;
    }

    &__input {
        margin-bottom: calc(1rem * 1.7);
    }
}
</style>