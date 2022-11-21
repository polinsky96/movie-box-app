<template>
    <div class="result-list-item-main">
        <ResultListItemLayout :poster-path="details.posterPath">
            <template #content>
                <ResultListItemContentLayout>
                    <template #title>
                        <BaseContentTitle :title="details.title" />
                    </template>
                    <template #subtitle-block>
                        <ResultListItemContentSubtitle> 
                            <template #vote-average>
                                <RatingBlock :rating="details.rating"/>
                            </template>
                            <template #release-data>
                                <BaseContentDate :date="details.releaseDate" />
                            </template>
                        </ResultListItemContentSubtitle>
                    </template>
                    <template #overview>{{ details.overview }}</template>
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