<template>
    <div class="result-list-item-main">
        <ResultListItemLayout :poster-path="details.poster_path">
            <template v-slot:content>
                <ResultListItemContentLayout>
                    <template v-slot:title>
                        <BaseContentTitle :details="details" />
                    </template>
                    <template v-slot:subtitle-block>
                        <ResultListItemContentSubtitle> 
                            <template v-slot:vote-average>
                                <RatingBlock :score="details.vote_average"/>
                            </template>
                            <template v-slot:release-data>
                                <BaseContentDate :details="details" />
                            </template>
                        </ResultListItemContentSubtitle>
                    </template>
                    <template v-slot:overview>{{ details.overview }}</template>
                </ResultListItemContentLayout>
            </template>
        </ResultListItemLayout>
    </div>
</template>

<script setup>
import ResultListItemLayout from './ResultListItemLayout.vue';
import ResultListItemContentLayout from './ResultListItemContentLayout.vue';
import ResultListItemContentSubtitle from './ResultListItemContentSubtitle.vue';
import BaseContentTitle from '../base/BaseContentTitle.vue';
import BaseContentDate from '../base/BaseContentDate.vue';
import RatingBlock from '../rating-block/RatingBlock.vue';

const props = defineProps({
    details: {
        type: Object
    }
})
</script>