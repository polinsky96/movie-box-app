<template>
    <div class="button-profile">
        <button @click="goToProfile" class="button-profile__button">
            <ProfileIcon class="button-profile__profile-icon" />
        </button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import ProfileIcon from '../../assets/icons/profile-icon.svg'

import useAuthSupabase from '../../stores/authSupabase';

const router = useRouter();
const store = useAuthSupabase();

const goToProfile = () => {    
    router.push({ name: 'profile', params: { id: store.isUser ? store.getUser.id : null } });
}
</script>

<style lang="scss" scoped>
.button-profile {
    &__button {
        @include reset-style-button;
    }

    &__profile-icon {
        width: 35px;
    }
}
</style>