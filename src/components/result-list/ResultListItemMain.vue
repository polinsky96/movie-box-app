<template>
    <div class="result-list-item-main">
        <result-list-item :poster-path="details.poster_path">
            <template v-slot:content>
                <ResultListItemContent>
                    <template v-slot:title>
                        <ResultListItemTitle :details="details" />
                    </template>
                    <template v-slot:subtitle-block>
                        <ResultListItemSubtitle> 
                            <template v-slot:vote-average>
                                <RatingBlock :score="details.vote_average"/>
                            </template>
                            <template v-slot:release-data>
                                <ResultListItemDate :details="details" />
                            </template>
                        </ResultListItemSubtitle>
                    </template>
                    <template v-slot:overview>{{ details.overview }}</template>
                </ResultListItemContent>
            </template>
        </result-list-item>
    </div>
</template>

<script setup>
import ResultListItem from './ResultListItem.vue';
import ResultListItemContent from './ResultListItemContent.vue';
import ResultListItemSubtitle from './ResultListItemSubtitle.vue';
import ResultListItemTitle from './ResultListItemTitle.vue';
import ResultListItemDate from './ResultListItemDate.vue';
import RatingBlock from '../rating-block/RatingBlock.vue';

const props = defineProps({
    details: {
        type: Object
    }
})
</script>