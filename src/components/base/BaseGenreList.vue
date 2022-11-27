<template>
    <div class="base-genre-list">
        {{ genresList.join(', ') }}
    </div>
</template>

<script setup>
defineProps({
    genresList: {
        type: Array,
        default: () => {
            return []
        }
    }
});
</script>

<style lang="scss" scoped>
.base-genre-list {
    margin-bottom: 0.5rem;

    font-style: italic;
}
</style>