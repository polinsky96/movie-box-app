<template>
    <div class="result-list-item-movie">
        <result-list-item :image-path="details.poster_path">
            <template v-slot:poster>
                <BaseImage 
                    :image-path="details.poster_path"
                    alt="poster"
                    default-image-size="100x220"/>
            </template>
            <template v-slot:title>{{ details.original_title }}</template>
            <template v-slot:release-data>{{ details.release_date }}</template>
            <template v-slot:overview>{{ details.overview }}</template>
            <template v-slot:vote-average>
                <RatingBlock :score="details.vote_average"/>
            </template>
        </result-list-item>
    </div>
</template>

<script setup>
import ResultListItem from './ResultListItem.vue';
import BaseImage from '../base/BaseImage.vue';
import RatingBlock from '../rating-block/RatingBlock.vue';

const props = defineProps({
    details: {
        type: Object
    }
})
</script>