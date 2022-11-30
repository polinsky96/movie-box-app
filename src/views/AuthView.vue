<template>
    <div class="auth-view">
        <BaseContainer>        
            <div class="auth-view__wrapper">
                <div class="auth-view__frames">
                    <SignUp v-if="isSignUp" />
                    <SignIn v-else />
                </div>
                <button 
                    @click="isSignUp = !isSignUp"
                    class="auth-view__button">
                    {{ getButonText }}
                </button>
            </div>
        </BaseContainer>
    </div>
</template>
  
<script setup>
import { computed, ref } from "vue";
import BaseContainer from "../components/base/BaseContainer.vue";
import SignUp from "../components/sign-up/SignUp.vue";
import SignIn from "../components/sign-in/SignIn.vue";

const isSignUp = ref(true);

const getButonText = computed(() => {
    return  isSignUp.value
        ? "Already have an account? Sign In"
        : "Don't have an account yet? Sign Up"
})
</script>
  
<style lang="scss" scoped>
.auth-view {
    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__frames {
        margin-bottom: 1rem;
    }

    &__button {
        @include reset-style-button;
        display: block;
        text-align: center;
    }
}
</style>