<template>
    <div>
        <SignUp v-if="isSignUp" />
        <SignIn v-else />
        <button @click="isSignUp = !isSignUp">
            {{
        isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account yet? Sign Up"
            }}
        </button>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import SignUp from "./SignUp.vue";
import SignIn from "./SignIn.vue";

const isSignUp = ref(true);

</script>
  
<style scoped>
button {
    color: black;
}
</style>