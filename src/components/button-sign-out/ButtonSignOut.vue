<template>
    <div class="button-sign-out">
        <button @click="signOut" class="button-sign-out__button">
            <LogoutIcon class="button-sign-out__logout-icon" />
        </button>
    </div>
</template>

<script setup>
import { supabase } from "../../supabase";

import LogoutIcon from '../../assets/icons/logout-icon.svg'

async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        alert(error.message);
    }
}
</script>

<style lang="scss" scoped>
.button-sign-out {
    &__button {
        @include reset-style-button;
    }

    &__logout-icon {
        width: 35px;
    }
}
</style>