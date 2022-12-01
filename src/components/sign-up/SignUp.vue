<template>
    <div class="sign-up">
        <h3 class="sign-up__title">Create account</h3>
        <VeeForm
          v-slot="{ handleSubmit }"
          :validation-schema="schema"
          as="div">
            <FormAuthentication @submit="handleSubmit($event, submitOn)">
                <template #inputs>

                    <InputAuthentication
                      name="username"
                      type="text"
                      label="Username"
                      placeholder="Your username"
                      class="sign-up__input"/>
                    

                    <InputAuthentication
                      name="email"
                      type="text"
                      label="Email"
                      placeholder="Your Email"
                      class="sign-up__input"/>

                    <InputAuthentication
                      name="password"
                      type="password"
                      label="Password"
                      placeholder="At least 8 characters"
                      class="sign-up__input"/>

                    <InputAuthentication
                      name="confirm_password"
                      type="password"
                      label="Confirm Password"
                      placeholder="Type password again"
                      class="sign-up__input"/>

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
import { object, string, ref } from 'yup';
import SignUp from '../../modules/supabase/SignUp';

const schema = object({
    username: string().required().trim(),
    email: string().required().email(),
    password: string().required().min(8).max(25),
    confirm_password: string()
        .required()
        .oneOf([ref('password')], 'Passwords do not match'),
});

const submitOn = async (values) => {
    try {
        await SignUp(values.email, values.password);

    } catch (error) {
        console.log(error.message);
    }
}
</script>

<style lang="scss" scoped>
.sign-up {
    width: 100%;
    min-width: 275px;
    max-width: 350px;
    padding: 1.25rem 0.625rem;

    @include card-frame;

    &__title {
        text-align: center;
    }

    &__input {
        margin-bottom: calc(1rem * 1.7);
    }
}
</style>